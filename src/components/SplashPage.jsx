import React, { useEffect, useState } from 'react';
import './SplashPage.css';

const SplashPage = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const colors = ['#a8d87c', '#c8e6a0', '#7ab83c', '#e6f5c9', '#f5e6c0'];
    const emojis = ['🍃', '🌿', '✦', '·'];
    const newParticles = [];

    for (let i = 0; i < 18; i++) {
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
        duration: `${Math.random() * 12 + 8}s`,
        delay: `${Math.random() * 10}s`,
        content: isCircle ? '' : emojis[Math.floor(Math.random() * emojis.length)],
        opacity: isCircle ? '0' : '1'
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="splash-container">
      <div className="splash-bg-layer"></div>

      {/* Decorative corner SVGs */}
      <svg className="corner-deco tl" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 190 Q10 10 190 10" stroke="#a8d87c" strokeWidth="1.5" fill="none"/>
        <path d="M30 190 Q30 30 190 30" stroke="#a8d87c" strokeWidth="1" fill="none"/>
        <circle cx="60" cy="60" r="4" fill="#a8d87c"/>
        <circle cx="90" cy="40" r="3" fill="#a8d87c"/>
        <circle cx="40" cy="90" r="3" fill="#a8d87c"/>
        <path d="M80 10 C70 50, 10 70, 10 120" stroke="#c8e6a0" strokeWidth="0.5" fill="none" strokeDasharray="4,6"/>
      </svg>
      <svg className="corner-deco br" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 190 Q10 10 190 10" stroke="#a8d87c" strokeWidth="1.5" fill="none"/>
        <path d="M30 190 Q30 30 190 30" stroke="#a8d87c" strokeWidth="1" fill="none"/>
        <circle cx="60" cy="60" r="4" fill="#a8d87c"/>
        <circle cx="90" cy="40" r="3" fill="#a8d87c"/>
        <circle cx="40" cy="90" r="3" fill="#a8d87c"/>
      </svg>
      
      {particles.map((p) => (
        <div
          key={p.id}
          className="splash-particle"
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

      <div className="splash-wrapper">
        <div className="splash-logo-container">
          <div className="splash-logo-badge">
            <div className="splash-logo-inner">
              <span className="splash-logo-house">🏡</span>
              <span className="splash-logo-leaf">🌿</span>
            </div>
          </div>
        </div>

        <div className="splash-brand-am">AM's</div>
        <div className="splash-brand-sub">HomeHarvest</div>

        <div className="splash-divider">
          <div className="splash-divider-line"></div>
          <span className="splash-divider-icon">✦</span>
          <div className="splash-divider-line"></div>
        </div>

        <div className="splash-tagline-1">Home Made With Love & Care</div>

        <div className="splash-features">
          <div className="splash-pill"><span className="splash-pill-icon">🌱</span> Fresh & Natural</div>
          <div className="splash-pill"><span className="splash-pill-icon">🏠</span> Home Grown</div>
          <div className="splash-pill"><span className="splash-pill-icon">❤️</span> Made with Love</div>
        </div>

        <div className="splash-tagline-2" style={{ marginTop: '1.4rem' }}>Stay Healthy With Us</div>

        <div className="splash-bottom-text">Pure · Natural · Homemade</div>
      </div>
    </div>
  );
};

export default SplashPage;
