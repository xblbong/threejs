"use client";
import React, { useRef, useCallback } from "react";
import { Mail } from "lucide-react";

interface ProfileCardProps {
  avatarUrl: string;
  name: string;
  title: string;
  handle: string;
  status?: string;
}

export default function PremiumProfileCard({
  avatarUrl,
  name,
  title,
  handle,
  status = "Available for Work",
}: ProfileCardProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);

  const updateCardTransform = useCallback((offsetX: number, offsetY: number) => {
    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap) return;

    const width = card.clientWidth;
    const height = card.clientHeight;

    // Hitung persentase posisi kursor (0-100)
    const percentX = (offsetX / width) * 100;
    const percentY = (offsetY / height) * 100;

    // Hitung rotasi (-12.5 sampai 12.5 derajat)
    const rotateX = (percentY - 50) / 4;
    const rotateY = -(percentX - 50) / 4;

    wrap.style.setProperty("--pointer-x", `${percentX}%`);
    wrap.style.setProperty("--pointer-y", `${percentY}%`);
    wrap.style.setProperty("--rotate-x", `${-rotateX}deg`);
    wrap.style.setProperty("--rotate-y", `${-rotateY}deg`);
  }, []);

  const handlePointerMove = (e: React.PointerEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    updateCardTransform(e.clientX - rect.left, e.clientY - rect.top);
  };

  const handlePointerEnter = () => {
    cardRef.current?.classList.add("active");
  };

  const handlePointerLeave = () => {
    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap) return;

    card.classList.remove("active");
    // Reset ke tengah dengan halus
    wrap.style.setProperty("--rotate-x", `0deg`);
    wrap.style.setProperty("--rotate-y", `0deg`);
  };

  return (
    <div ref={wrapRef} className="pc-card-wrapper relative">
      <section
        ref={cardRef}
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        // Gunakan overflow-hidden di sini dengan border radius besar
        className="pc-card relative w-[320px] h-[500px] md:w-[380px] md:h-[580px] rounded-[2.5rem] overflow-hidden border border-white/20 shadow-2xl cursor-none"
      >
        {/* Layer 1: Background Warna Dinamis (Ubah warna saat hover kursor) */}
        <div className="pc-card-bg" />

        {/* Layer 2: Full Image */}
        <div className="absolute inset-0 z-[2]">
          <img
            src={avatarUrl}
            alt={name}
            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
          />
          {/* Overlay agar teks tetap terbaca */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
        </div>

        {/* Layer 3: Efek Cahaya */}
        <div className="pc-shine" />
        <div className="pc-glare" />

        {/* Layer 4: Content (UI) */}
        <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-white/80 font-bold">
              {status}
            </span>
          </div>

          <div className="space-y-1">
            <h1 className="text-3xl font-black text-white tracking-tighter leading-none">
              {name}
            </h1>
            <p className="text-[#b06fec] font-medium tracking-wide">
              {title}
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Instagram</span>
              <button onClick={() => window.location.href = `https://www.instagram.com/${handle}`} className="text-white/90 font-mono text-sm">@{handle}</button>
            </div>
            
            <button 
              className="p-3 rounded-2xl bg-white text-black hover:bg-[#b06fec] hover:text-white transition-all duration-300 transform active:scale-90"
              onClick={() => window.location.href = 'mailto:sblhh.m@gmail.com'}
            >
              <Mail size={22} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}