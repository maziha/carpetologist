import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

export const WhatsAppFloater = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');

    const handleSend = () => {
        const textToEncode = message || "Hello KMS Traders - Carpetologist, I'm interested in your collections.";
        const whatsappUrl = `https://wa.me/917558077632?text=${encodeURIComponent(textToEncode)}`;
        window.open(whatsappUrl, '_blank');
        setMessage('');
        setIsOpen(false);
    };

    return (
        <div className="fixed bottom-8 left-8 z-50 flex flex-col items-start gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: "bottom left" }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="w-[320px] bg-white rounded-2xl shadow-2xl border border-stone-100 overflow-hidden mb-2"
                    >
                        {/* Header */}
                        <div className="bg-[#128C7E] p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                {/* Brand Logo Placeholder - Using Simple C for now if image not available, or replacing with icon */}
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                    <span className="text-[#128C7E] font-serif font-bold text-lg">C</span>
                                </div>
                                <div className="text-white">
                                    <h3 className="font-medium text-sm">KMS Traders — Carpetologist</h3>
                                    <p className="text-[10px] opacity-90">Muvattupuzha, Ernakulam</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white/80 hover:text-white transition-colors"
                                aria-label="Close WhatsApp Window"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="bg-[#E5DDD5] p-6 min-h-[150px] relative">
                            {/* Chat bubble background pattern opacity layer could go here */}
                            <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] text-sm text-neutral-800 leading-relaxed relative">
                                <p>Hello! Welcome to KMS Traders — Carpetologist. How can we help you create your dream space today?</p>
                                <span className="text-[9px] text-neutral-400 absolute bottom-1 right-2">
                                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </div>
                        </div>

                        {/* Footer / Input */}
                        <div className="bg-white p-3 flex items-center gap-2 border-t border-stone-100">
                            <input
                                type="text"
                                placeholder="Type a message..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                className="flex-1 bg-stone-100 rounded-full px-4 py-2 text-sm text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#128C7E]"
                            />
                            <button
                                onClick={handleSend}
                                className="w-10 h-10 bg-[#128C7E] rounded-full flex items-center justify-center text-white hover:bg-[#075E54] transition-colors shadow-sm"
                                aria-label="Send WhatsApp Message"
                            >
                                <Send size={16} className="ml-0.5" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="group relative"
                aria-label="Chat on WhatsApp"
            >
                <div className="relative">
                    {/* Pulsing effect */}
                    <div className={`absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 duration-1000 ${isOpen ? 'hidden' : 'block'}`} />

                    <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-green-500/30 transition-all duration-300 hover:scale-110">
                        {isOpen ? (
                            <X className="w-7 h-7 text-white" />
                        ) : (
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="white" className="w-7 h-7">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        )}
                    </div>
                </div>
            </button>
        </div>
    );
};
