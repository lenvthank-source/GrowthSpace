"use client";

import React, { useEffect, useState } from "react";

export default function ShaderHeroBackground() {
  const [ShaderComponents, setShaderComponents] = useState<any>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    import("shaders/react")
      .then((mod) => {
        if (isMounted) {
          setShaderComponents(mod);
        }
      })
      .catch((err) => {
        console.warn("WebGL Shader loading fallback:", err);
        if (isMounted) setHasError(true);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (hasError || !ShaderComponents) {
    return (
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden bg-gradient-to-b from-[#EFEFEF] via-[#F4F4F4] to-[#EFEFEF]">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#ff5f03_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>
    );
  }

  const { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } = ShaderComponents;

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden bg-[#EFEFEF]">
      {Shader ? (
        <Shader className="w-full h-full">
          <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
          <ChromaFlow
            baseColor="#ffffff"
            downColor="#ff5f03"
            leftColor="#ff5f03"
            rightColor="#ff5f03"
            upColor="#ff5f03"
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
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#ff5f03_1px,transparent_1px)] [background-size:32px_32px]" />
      )}
    </div>
  );
}
