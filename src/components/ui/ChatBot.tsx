import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, ChevronRight } from 'lucide-react';

interface Option {
    label: string;
    nextStep: string;
}

interface BotStep {
    text: string;
    options?: Option[];
}

const BOT_STEPS: Record<string, BotStep> = {
    start: {
        text: "Welcome to Carpetologist. I am your digital concierge. How may I assist you today?",
        options: [
            { label: "View Collections", nextStep: "collections" },
            { label: "Visit Showroom", nextStep: "visit" },
            { label: "Contact Expert", nextStep: "contact" },
            { label: "About Us", nextStep: "about" },
        ],
    },
    collections: {
        text: "Our collections are a testament to heritage. Which style interests you?",
        options: [
            { label: "Turkish", nextStep: "turkish_info" },
            { label: "Persian", nextStep: "persian_info" },
            { label: "Indian", nextStep: "indian_info" },
            { label: "Designer", nextStep: "designer_info" },
        ],
    },
    turkish_info: {
        text: "Our Turkish collection features authentic Anatolian motifs and natural dyes, sourced directly from heritage weavers.",
        options: [
            { label: "See More", nextStep: "navigate_collections" },
            { label: "Back to Menu", nextStep: "start" },
        ],
    },
    persian_info: {
        text: "Crafted by master artisans, our Persian collection represents the pinnacle of intricate craftsmanship.",
        options: [
            { label: "See More", nextStep: "navigate_collections" },
            { label: "Back to Menu", nextStep: "start" },
        ],
    },
    indian_info: {
        text: "Vibrant and regal, our Indian collection celebrates the rich cultural tapestry of the subcontinent.",
        options: [
            { label: "See More", nextStep: "navigate_collections" },
            { label: "Back to Menu", nextStep: "start" },
        ],
    },
    designer_info: {
        text: "For the modern connoisseur, our Designer collection blends traditional quality with contemporary aesthetics.",
        options: [
            { label: "See More", nextStep: "navigate_collections" },
            { label: "Back to Menu", nextStep: "start" },
        ],
    },
    visit: {
        text: "We would be honored to host you. We are located in the Design District.",
        options: [
            { label: "Get Directions", nextStep: "navigate_contact" },
            { label: "Book Appointment", nextStep: "navigate_contact" },
            { label: "Back to Menu", nextStep: "start" },
        ]
    },
    contact: {
        text: "Our experts are ready to guide you. You can reach us via phone or email directly from our contact page.",
        options: [
            { label: "Go to Contact", nextStep: "navigate_contact" },
            { label: "Back to Menu", nextStep: "start" },
        ]
    },
    about: {
        text: "Since 1978, Carpetologist has been the bridge between Anatolian mastery and global interiors.",
        options: [
            { label: "Read Our Story", nextStep: "start" },
            { label: "View Collections", nextStep: "collections" },
        ]
    },
    navigate_collections: {
        text: "Redirecting you to our legacy gallery...",
        options: []
    },
    navigate_contact: {
        text: "Taking you to our contact concierge...",
        options: []
    }
};

export const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [history, setHistory] = useState<{ sender: 'bot' | 'user'; text: string }[]>([
        { sender: 'bot', text: BOT_STEPS['start'].text }
    ]);
    const [currentStep, setCurrentStep] = useState('start');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [history, isOpen]);

    const handleOptionClick = (option: Option) => {
        // Add user selection to history
        setHistory(prev => [...prev, { sender: 'user', text: option.label }]);

        // Process next step with a slight delay for realism
        setTimeout(() => {
            const nextStepData = BOT_STEPS[option.nextStep];
            if (nextStepData) {
                setHistory(prev => [...prev, { sender: 'bot', text: nextStepData.text }]);
                setCurrentStep(option.nextStep);

                // Handle navigation side effects
                if (option.nextStep === 'navigate_collections') {
                    setTimeout(() => window.location.href = '/collections', 1500);
                } else if (option.nextStep === 'navigate_contact') {
                    setTimeout(() => window.location.href = '/contact', 1500);
                }
            }
        }, 600);
    };

    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="w-[350px] bg-white rounded-t-xl rounded-bl-xl shadow-2xl border border-stone-100 overflow-hidden flex flex-col max-h-[500px]"
                    >
                        {/* Header */}
                        <div className="bg-neutral-900 p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                </div>
                                <div>
                                    <h3 className="text-white font-serif italic text-sm">Carpetologist</h3>
                                    <p className="text-[10px] text-neutral-400 uppercase tracking-widest">Concierge</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-neutral-400 hover:text-white transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50 min-h-[300px]">
                            {history.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-xl text-sm leading-relaxed ${msg.sender === 'user'
                                            ? 'bg-amber-600 text-white rounded-br-none'
                                            : 'bg-white border border-stone-100 text-neutral-600 rounded-bl-none shadow-sm'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Options Area */}
                        <div className="p-4 bg-white border-t border-stone-100">
                            <div className="flex flex-wrap gap-2 justify-end">
                                {BOT_STEPS[currentStep]?.options?.map((option, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleOptionClick(option)}
                                        className="text-[10px] uppercase tracking-wider px-3 py-2 border border-amber-600/30 text-amber-600 hover:bg-amber-600 hover:text-white transition-all duration-300 rounded-full"
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="group relative w-14 h-14 bg-neutral-900 rounded-full flex items-center justify-center shadow-xl hover:bg-amber-600 transition-colors duration-500"
            >
                <MessageSquare className={`w-6 h-6 text-white transition-transform duration-300 ${isOpen ? 'scale-0' : 'scale-100'}`} />
                <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'scale-100' : 'scale-0'}`}>
                    <ChevronRight className="w-6 h-6 text-white rotate-90" />
                </div>
            </button>
        </div>
    );
};
