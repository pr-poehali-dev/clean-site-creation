import { useState, useEffect } from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  animate?: boolean;
  variant?: 'full' | 'icon';
}

export default function Logo({ size = 'md', animate = false, variant = 'full' }: LogoProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (animate) {
      const t = setTimeout(() => setMounted(true), 50);
      return () => clearTimeout(t);
    } else {
      setMounted(true);
    }
  }, [animate]);

  const sizes = {
    sm: { icon: 32, titleText: 'text-lg', subtitleText: 'text-xs' },
    md: { icon: 42, titleText: 'text-xl', subtitleText: 'text-sm' },
    lg: { icon: 64, titleText: 'text-3xl', subtitleText: 'text-base' },
  };

  const s = sizes[size];

  return (
    <div className="flex items-center gap-3">
      <div
        className={animate ? (mounted ? 'animate-logo-draw' : 'opacity-0') : ''}
        style={{ width: s.icon, height: s.icon }}
      >
        <svg
          width={s.icon}
          height={s.icon}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background */}
          <rect width="64" height="64" rx="14" fill="#0D1B2A" />
          {/* Arrow up-right (white) */}
          <polygon
            points="12,52 36,12 52,52"
            fill="none"
          />
          {/* P letter dark triangle */}
          <polygon
            points="10,54 34,10 34,54"
            fill="#206F6C"
          />
          {/* Arrow white */}
          <polygon
            points="34,10 54,54 34,54"
            fill="#4CAF7D"
          />
          {/* Arrow tip */}
          <polygon
            points="38,10 54,10 54,28"
            fill="white"
            opacity="0.9"
          />
        </svg>
      </div>

      {variant === 'full' && (
        <div className={animate ? (mounted ? 'animate-logo-text' : 'opacity-0') : ''}>
          <div
            className={`font-montserrat font-bold leading-tight text-brand-dark ${s.titleText}`}
          >
            Progress<br />Education
          </div>
        </div>
      )}
    </div>
  );
}
