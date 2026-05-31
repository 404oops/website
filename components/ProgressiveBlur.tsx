"use client"

export default function ProgressiveBlur() {
  const layers = [
    { blur: 0.5, mask: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1) 8%, rgba(0,0,0,1) 28%, rgba(0,0,0,0) 42%)' },
    { blur: 1, mask: 'linear-gradient(rgba(0,0,0,0) 8%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 38%, rgba(0,0,0,0) 52%)' },
    { blur: 2, mask: 'linear-gradient(rgba(0,0,0,0) 12%, rgba(0,0,0,1) 26%, rgba(0,0,0,1) 46%, rgba(0,0,0,0) 62%)' },
    { blur: 4, mask: 'linear-gradient(rgba(0,0,0,0) 18%, rgba(0,0,0,1) 36%, rgba(0,0,0,1) 58%, rgba(0,0,0,0) 74%)' },
    { blur: 8, mask: 'linear-gradient(rgba(0,0,0,0) 30%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 72%, rgba(0,0,0,0) 86%)' },
    { blur: 16, mask: 'linear-gradient(rgba(0,0,0,0) 48%, rgba(0,0,0,1) 68%, rgba(0,0,0,1) 88%, rgba(0,0,0,0) 96%)' },
    { blur: 32, mask: 'linear-gradient(rgba(0,0,0,0) 62%, rgba(0,0,0,1) 86%)' },
  ];

  return (
    <div className="pointer-events-none fixed left-0 right-0 bottom-0 w-full h-32 z-10">
      {layers.map((l, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            backdropFilter: `blur(${l.blur}px)`,
            WebkitBackdropFilter: `blur(${l.blur}px)`,
            maskImage: l.mask,
            WebkitMaskImage: l.mask,
          }}
        />
      ))}

      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(transparent, rgba(0,0,0,0))" }}
      />
    </div>
  );
}
