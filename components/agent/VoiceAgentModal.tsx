'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

// Lazy-load the ElevenLabs voice widget wrapper (your existing component)
const VoiceAgent = dynamic(() => import('./VoiceAgent'), { ssr: false });

export default function VoiceAgentModal({
  label = 'Talk Now',
  className = 'rv-button rv-button-primary inline-flex items-center justify-center px-6 py-3 text-sm font-semibold'
}: { label?: string; className?: string }) {
  const [open, setOpen] = useState(false);
  const firstFocusable = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  // ESC to close
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  // Simple focus trap + autofocus close button
  useEffect(() => {
    if (!open) return;
    firstFocusable.current?.focus();
    function trap(e: KeyboardEvent) {
      if (e.key !== 'Tab') return;
      const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        (last as HTMLElement).focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        (first as HTMLElement).focus();
      }
    }
    document.addEventListener('keydown', trap);
    return () => document.removeEventListener('keydown', trap);
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={className}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="tiffany-modal"
      >
        <div className="rv-button-top"><span>{label}</span></div>
        <div className="rv-button-bottom"><span className="text-nowrap">{label}</span></div>
      </button>

      {open && (
        <div
          id="tiffany-modal"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Modal */}
          <div
            ref={dialogRef}
            className="relative z-[101] w-full max-w-xl rounded-2xl border border-white/10 bg-neutral-900 p-4 shadow-2xl"
          >
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Talk to Tiffany — 24/7 DossX Voice Rep</h3>
              <button
                ref={firstFocusable}
                onClick={() => setOpen(false)}
                className="rounded-md border border-white/10 px-2 py-1 text-sm text-white/70 hover:text-white"
                aria-label="Close"
              >
                Close
              </button>
            </div>

            {/* Live voice widget */}
            <div className="rounded-xl border border-white/10 bg-black/30 p-3">
              <VoiceAgent />
            </div>

            <p className="mt-3 text-xs text-white/60">
              Tip: Ask about pricing, integrations, or how to connect your calendar and knowledge base.
            </p>
          </div>
        </div>
      )}
    </>
  );
}