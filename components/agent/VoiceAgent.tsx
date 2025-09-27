// components/agent/VoiceAgent.tsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function VoiceAgent() {
  const agentId = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Guard: need an agent id
    if (!agentId) return;

    // If script already present, just render the element
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://elevenlabs.io/convai-widget/index.js"]'
    );

    const ensureElement = () => {
      if (!containerRef.current) return;

      // Remove prior element if hot-reloading
      containerRef.current.innerHTML = "";

      // Create the custom element for the widget
      const el = document.createElement("elevenlabs-convai");
      el.setAttribute("agent-id", agentId);
      containerRef.current.appendChild(el);
      setReady(true);
    };

    if (existing) {
      ensureElement();
      return;
    }

    // Inject the script once
    const s = document.createElement("script");
    s.src = "https://elevenlabs.io/convai-widget/index.js";
    s.async = true;
    s.type = "text/javascript";
    s.onload = ensureElement;
    s.onerror = () => console.error("Failed to load ElevenLabs ConvAI script");
    document.body.appendChild(s);

    return () => {
      // optional cleanup: don’t remove script, but clear the container
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
  }, [agentId]);

  return (
    <section className="py-16 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Meet Your AI Voice Agent</h2>
        <p className="text-gray-400 mb-6">
          Powered by DossX & OpenAI — answers questions, books meetings, and more.
        </p>

        {!agentId ? (
          <div className="text-red-400 font-semibold">
            Missing NEXT_PUBLIC_ELEVENLABS_AGENT_ID in your env.
          </div>
        ) : (
          <div ref={containerRef} />
        )}

        {!ready && agentId && (
          <p className="text-sm text-gray-500 mt-4">Loading voice widget…</p>
        )}
      </div>
    </section>
  );
}