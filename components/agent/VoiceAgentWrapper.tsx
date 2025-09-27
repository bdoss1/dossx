"use client";

import dynamic from "next/dynamic";

const VoiceAgentModal = dynamic(() => import("./VoiceAgentModal"), {
  ssr: false,
});

export default function VoiceAgentWrapper({ label }: { label?: string }) {
  return <VoiceAgentModal label={label || "Talk Now"} />;
}