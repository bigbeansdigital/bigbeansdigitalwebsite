"use client";

export default function CinematicBackgroundPage() {
  return (
    <main className="page">
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          background: #000000;
        }

        body {
          min-height: 100vh;
        }

        .page {
          width: 100%;
          min-height: 100vh;
          background: #000000;
        }
      `}</style>
    </main>
  );
}