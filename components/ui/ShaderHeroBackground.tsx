"use client";

import { useEffect, useState } from "react";

export default function ShaderHeroBackground() {
  const [SC, setSC] = useState<any>(null);
  const [err, setErr] = useState(false);

  useEffect(() => {
    let m = true;
    import("shaders/react")
      .then((mod) => { if (m) setSC(mod); })
      .catch(() => { if (m) setErr(true); });
    return () => { m = false; };
  }, []);

  if (err || !SC) {
    return (
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden bg-gradient-to-b from-[#EFEFEF] via-[#F4F4F4] to-[#EFEFEF]">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#FFBA3B_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>
    );
  }

  const { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } = SC;

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden bg-[#EFEFEF]">
      {Shader ? (
        <Shader className="w-full h-full">
          <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
          <ChromaFlow
            baseColor="#ffffff"
            downColor="#FFBA3B"
            leftColor="#FFBA3B"
            rightColor="#FFBA3B"
            upColor="#FFBA3B"
            momentum={13}
            radius={3.5}
          />
          <FlutedGlass
            aberration={0.61}
            angle={31}
            frequency={8}
            highlight={0.12}
            highlightSoftness={0}
            lightAngle={-90}
            refraction={4}
            shape="rounded"
            softness={1}
            speed={0.15}
          />
          <FilmGrain strength={0.05} />
        </Shader>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#EFEFEF] to-[#E8E8E8]" />
      )}
    </div>
  );
}
