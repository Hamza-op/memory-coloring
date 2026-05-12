import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, Upload, Paintbrush, Download, RefreshCw, Sparkles, Image as ImageIcon, Wand2, Heart, Pencil, Camera, ShoppingBag, Star } from 'lucide-react';

const MAGIC_MSGS = ["Sketching the outlines…", "Adding tiny details…", "Sprinkling fairy dust…", "Almost there…"];

const CreatePage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [msgIdx, setMsgIdx] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) {
      if (f.size > 10 * 1024 * 1024) { setError("Image too large. Please choose one under 10MB."); return; }
      setFile(f); setPreview(URL.createObjectURL(f)); setError(null); setResultImage(null);
    }
  };

  const processImage = async () => {
    if (!file) return;
    setIsProcessing(true); setError(null); setMsgIdx(0);
    const interval = setInterval(() => setMsgIdx(p => (p + 1) % MAGIC_MSGS.length), 2200);
    const formData = new FormData();
    formData.append('image', file);
    try {
      const res = await fetch('/api/process-coloring', { method: 'POST', body: formData });
      if (!res.ok) throw new Error('Something went wrong. Please try again.');
      const data = await res.json();
      setResultImage(data.imageUrl);
    } catch (err: any) { setError(err.message); } finally { clearInterval(interval); setIsProcessing(false); }
  };

  const reset = () => { setFile(null); setPreview(null); setResultImage(null); setError(null); };

  return (
    <div className="min-h-screen bg-[var(--bg)] pt-8 pb-24 px-4 relative overflow-hidden transition-colors">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-coral/8 blob animate-float-slow pointer-events-none" />
      <div className="absolute bottom-40 left-[5%] w-56 h-56 bg-honey/10 blob-2 animate-float pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-gradient-to-br from-coral to-honey rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-coral/20">
            <Paintbrush className="text-white w-10 h-10" />
          </motion.div>
          <h1 className="text-4xl lg:text-5xl text-[var(--text)] mb-3 font-display font-bold">Try the Magic ✨</h1>
          <p className="text-lg text-[var(--text-muted)] font-body max-w-lg mx-auto leading-relaxed">
            Upload a photo to preview how we transform your memories into hand-drawn coloring art.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="soft-card p-6 sm:p-10">
          {!preview ? (
            <motion.div whileHover={{ scale: 1.005 }}
              className="border-2 border-dashed border-[var(--border)] rounded-2xl p-10 sm:p-14 text-center cursor-pointer transition-all hover:border-coral/30 hover:bg-coral/3 group flex flex-col items-center"
              onClick={() => fileInputRef.current?.click()}>
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-20 h-20 bg-[var(--bg)] rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg transition-shadow border border-[var(--border)]">
                <Upload className="text-coral" size={32} />
              </motion.div>
              <h3 className="text-2xl text-[var(--text)] mb-2 font-display font-bold">Pick Your Favorite Memory</h3>
              <p className="text-[var(--text-muted)] mb-8 font-body text-sm">PNG or JPG up to 10MB</p>
              <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
              <button className="btn-primary text-base"><Camera size={18} /> Select or Take Photo</button>
            </motion.div>
          ) : (
            <div className="space-y-10">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Source photo */}
                <motion.div initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} className="space-y-3">
                  <span className="badge bg-violet/15 text-violet">Your Photo</span>
                  <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                    <img src={preview} className="w-full h-full object-cover" alt="Your Photo" loading="lazy" />
                  </div>
                </motion.div>

                {/* Result */}
                <motion.div initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }} className="space-y-3">
                  <span className="badge bg-honey/15 text-honey">Magical Art</span>
                  <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center shadow-lg">
                    <AnimatePresence mode="wait">
                      {isProcessing ? (
                        <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="text-center p-8 flex flex-col items-center">
                          <div className="relative w-24 h-24 mb-6">
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
                              <Sparkles className="absolute top-0 left-1/2 -translate-x-1/2 text-honey" size={18} />
                              <Star className="absolute bottom-0 left-1/2 -translate-x-1/2 text-coral" size={14} fill="currentColor" />
                              <Heart className="absolute top-1/2 left-0 -translate-y-1/2 text-violet" size={12} fill="currentColor" />
                            </motion.div>
                            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                              <Wand2 className="text-coral w-12 h-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                            </motion.div>
                          </div>
                          <AnimatePresence mode="wait">
                            <motion.p key={msgIdx} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="font-display text-lg font-bold text-[var(--text)]">{MAGIC_MSGS[msgIdx]}</motion.p>
                          </AnimatePresence>
                          <div className="flex gap-1 mt-3">
                            {[0,1,2].map(i => <motion.div key={i} className="w-1.5 h-1.5 rounded-full bg-coral" animate={{ scale: [1, 1.8, 1] }} transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.2 }} />)}
                          </div>
                        </motion.div>
                      ) : resultImage ? (
                        <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="h-full w-full relative">
                          <img src={resultImage} className="w-full h-full object-contain p-3" alt="Coloring Art" loading="lazy" />
                          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, type: "spring" }}
                            className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 bg-charcoal/90 text-white py-2.5 rounded-xl backdrop-blur-sm">
                            <Sparkles size={14} />
                            <span className="text-xs font-body font-bold">Magic Complete!</span>
                          </motion.div>
                        </motion.div>
                      ) : (
                        <div className="text-center text-[var(--text-muted)] p-8">
                          <ImageIcon size={56} className="mx-auto mb-4 opacity-30" />
                          <p className="font-display font-bold text-lg">Art will appear here</p>
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>

              {/* Actions */}
              <div className="pt-8 border-t border-[var(--border)] flex flex-col items-center gap-8">
                {!resultImage ? (
                  <div className="flex flex-col items-center gap-3">
                    <motion.button onClick={processImage} disabled={isProcessing} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="btn-primary text-lg px-10 py-4">
                      {isProcessing ? <RefreshCw className="animate-spin" size={20} /> : <Sparkles size={20} />}
                      <span>{isProcessing ? 'Creating Magic…' : 'See Sample Art'}</span>
                    </motion.button>
                    {error && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-coral font-body font-semibold text-sm bg-coral/10 px-4 py-2 rounded-xl">{error}</motion.p>}
                  </div>
                ) : (
                  <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="flex flex-col items-center gap-6 w-full max-w-md">
                    <div className="grid grid-cols-2 gap-4 w-full">
                      <button onClick={() => window.print()} className="btn-outline"><Download size={18} /> Print</button>
                      <button onClick={reset} className="btn-outline"><RefreshCw size={18} /> Try Another</button>
                    </div>
                  </motion.div>
                )}

                {/* Upsell */}
                <div className="soft-card p-6 flex flex-col sm:flex-row items-center justify-between gap-5 w-full max-w-2xl bg-gradient-to-r from-coral/5 to-honey/5">
                  <p className="font-display font-bold text-lg text-[var(--text)]">Want a full book like this?</p>
                  <div className="flex gap-3">
                    <button onClick={() => navigate('/checkout', { state: { image: resultImage } })} className="btn-primary text-sm py-2.5 px-5"><ShoppingBag size={16} /> Order</button>
                    <a href="https://wa.me/923000000000" target="_blank" rel="noreferrer" className="btn-wa text-sm py-2.5 px-5"><MessageCircle size={16} fill="currentColor" /> Chat</a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default CreatePage;
