export const pronounceWord = async (word) => {
  if (!word) return;

  try {
    const cacheKey = `pronounce-${word}`;
    let audioSrc = localStorage.getItem(cacheKey);

    if (!audioSrc) {
      // Call ElevenLabs API directly
      const res = await fetch(
        `https://api.elevenlabs.io/v1/text-to-speech/RexqLjNzkCjWogguKyff?optimize_streaming_latency=1&output_format=mp3_22050_32`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "xi-api-key": "sk_35050a7ddcf99196360bb6bca043557d19d230cd30760da6",
          },
          body: JSON.stringify({
            text: word,
            model_id: "eleven_monolingual_v1",
            voice_settings: { stability: 0.5, similarity_boost: 0.5 },
          }),
        }
      );

      if (!res.ok) {
        const errText = await res.text();
        console.error("ElevenLabs TTS error:", errText);
        return;
      }

      const arrayBuffer = await res.arrayBuffer();

      // Convert ArrayBuffer to Base64 (browser-friendly)
      const base64Audio = arrayBufferToBase64(arrayBuffer);
      audioSrc = `data:audio/mpeg;base64,${base64Audio}`;

      // Cache in localStorage
      localStorage.setItem(cacheKey, audioSrc);
    }

    const audio = new Audio(audioSrc);
    audio.play();
  } catch (err) {
    console.error("Pronunciation error:", err);
  }
};

// Helper function: ArrayBuffer → Base64
function arrayBufferToBase64(buffer) {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}
