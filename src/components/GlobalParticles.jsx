import React, { useEffect, useState } from 'react';

const GlobalParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const colors = ['#a8d87c', '#c8e6a0', '#7ab83c', '#e6f5c9', '#f5e6c0'];
    const emojis = ['🍃', '🌿', '✦', '·'];
    const newParticles = [];

    for (let i = 0; i < 25; i++) {
      const size = Math.random() * 12 + 6;
      const isCircle = Math.random() > 0.5;
      newParticles.push({
        id: i,
        left: `${Math.random() * 100}%`,
        width: isCircle ? `${Math.random() * 4 + 2}px` : `${size}px`,
        height: isCircle ? `${Math.random() * 4 + 2}px` : `${size}px`,
        fontSize: `${size}px`,
        background: isCircle ? colors[Math.floor(Math.random() * colors.length)] : 'transparent',
        borderRadius: isCircle ? '50%' : 'none',
        duration: `${Math.random() * 15 + 10}s`,
        delay: `${Math.random() * 15}s`,
        content: isCircle ? '' : emojis[Math.floor(Math.random() * emojis.length)],
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="global-particle"
          style={{
            left: p.left,
            width: p.width,
            height: p.height,
            fontSize: p.fontSize,
            background: p.background,
            borderRadius: p.borderRadius,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        >
          {p.content}
        </div>
      ))}
    </div>
  );
};

export default GlobalParticles;
