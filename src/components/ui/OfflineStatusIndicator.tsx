"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WifiOff, CheckCircle2 } from "lucide-react";

export function OfflineStatusIndicator() {
  const [isOffline, setIsOffline] = useState(false);
  const [showReconnected, setShowReconnected] = useState(false);

  useEffect(() => {
    // Initial check
    if (typeof window !== "undefined") {
      setIsOffline(!navigator.onLine);
    }

    const handleOffline = () => {
      setIsOffline(true);
      setShowReconnected(false);
    };

    const handleOnline = () => {
      setIsOffline(false);
      setShowReconnected(true);
      const timer = setTimeout(() => {
        setShowReconnected(false);
      }, 4000);
      return () => clearTimeout(timer);
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-[99990] max-w-sm">
      <AnimatePresence>
        {isOffline && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="flex items-start gap-2.5 rounded-2xl border border-amber-300 bg-amber-50/95 p-3.5 shadow-card backdrop-blur-md dark:border-amber-700/60 dark:bg-amber-950/90"
          >
            <WifiOff className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
            <div className="text-xs text-amber-900 dark:text-amber-200">
              <p className="font-bold">Offline Mode</p>
              <p className="mt-0.5 leading-relaxed text-[11px] text-amber-800 dark:text-amber-300">
                You&apos;re offline, showing cached data. Will sync when you&apos;re back online.
              </p>
            </div>
          </motion.div>
        )}

        {!isOffline && showReconnected && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="flex items-center gap-2.5 rounded-2xl border border-green-300 bg-green-50/95 px-4 py-3 shadow-card backdrop-blur-md dark:border-green-700/60 dark:bg-green-950/90"
          >
            <CheckCircle2 className="h-4 w-4 shrink-0 text-green-600 dark:text-green-400" />
            <span className="text-xs font-semibold text-green-900 dark:text-green-200">
              Back Online — Connection restored.
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
