import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";
import multer from "multer";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  app.use(express.json({ limit: '10mb' })); // Add body parser for JSON requests
  const PORT = 3000;

  // Mullter for file uploads
  const upload = multer({ 
    dest: 'uploads/',
    limits: { fileSize: 10 * 1024 * 1024 } // 10MB
  });

  // Ensure uploads directory exists
  if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
  }

  // API Routes
  app.post("/api/process-coloring", upload.single('image'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No image uploaded" });
      }

      const inputPath = req.file.path;
      const outputPath = `uploads/coloring-${req.file.filename}.png`;

      let imageProcessed = false;
      try {
        // Simple edge detection effect using Sharp
        // Grayscale -> Edge detection -> Invert
        await sharp(inputPath)
          .grayscale()
          .linear(1.5, -0.2) // Contrast boost
          .convolve({
            width: 3,
            height: 3,
            kernel: [
              -1, -1, -1,
              -1,  8, -1,
              -1, -1, -1
            ]
          })
          .negate() // Invert so edges are black on white
          .threshold(240) // Make it clean black and white
          .toFile(outputPath);

        // Convert result to base64 for ease of display in this demo
        const imageBuffer = fs.readFileSync(outputPath);
        const base64Image = `data:image/png;base64,${imageBuffer.toString('base64')}`;
        
        imageProcessed = true;
        res.json({ imageUrl: base64Image });
      } finally {
        // Clean up temporary files
        if (fs.existsSync(inputPath)) {
          fs.unlinkSync(inputPath);
        }
        if (fs.existsSync(outputPath)) {
          fs.unlinkSync(outputPath);
        }
      }
    } catch (error) {
      console.error("Processing error:", error);
      res.status(500).json({ error: "Failed to process image magic" });
    }
  });

  app.post("/api/orders", (req, res) => {
    try {
      const order = {
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        ...req.body
      };

      // Save to local orders.json
      const ordersFile = path.join(process.cwd(), 'orders.json');
      let orders = [];
      if (fs.existsSync(ordersFile)) {
        const data = fs.readFileSync(ordersFile, 'utf8');
        orders = JSON.parse(data || '[]');
      }
      
      orders.push(order);
      fs.writeFileSync(ordersFile, JSON.stringify(orders, null, 2));

      console.log(`New order received! ID: ${order.id}`);
      res.json({ success: true, orderId: order.id });
    } catch (error) {
      console.error("Error saving order:", error);
      res.status(500).json({ error: "Failed to process order" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch(console.error);
