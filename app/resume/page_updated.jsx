
"use client";
import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

const Resume = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  const handleIframeLoad = () => setIframeLoaded(true);
  const retryIframe = () => {
    setIframeLoaded(false);
    setReloadKey(prev => prev + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        {/* Example content */}
        <h1 className="text-4xl font-bold mb-8 text-center">My Resume</h1>
      </div>

      {/* Floating Chat Button */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-emerald-600"
      >
        {chatOpen ? "Close Chat" : "Chat with Me"}
      </button>

      {/* Chatbot iframe popup */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            key="chatbot"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-[360px] h-[600px] bg-white rounded-xl shadow-2xl z-40 border border-gray-300 overflow-hidden flex flex-col"
          >
            {!iframeLoaded && (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-emerald-500 mx-auto mb-2"></div>
                  Loading Chatbot...
                  <button
                    onClick={retryIframe}
                    className="mt-2 text-xs underline text-blue-600"
                  >
                    Retry
                  </button>
                </div>
              </div>
            )}
            <iframe
              key={reloadKey}
              src="https://cv-chatbot-pmmw.onrender.com/"
              title="Alaa Chatbot"
              className={`w-full h-full border-none ${iframeLoaded ? "block" : "hidden"}`}
              allow="microphone; camera"
              onLoad={handleIframeLoad}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Resume;
