interface PixelStarProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}

export const PixelStar = ({ className = '', size = 'md', style }: PixelStarProps) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`${sizes[size]} ${className}`} style={style}>
      <svg viewBox="0 0 48 48" className="w-full h-full pixel-borders">
        {/* Pixel star shape */}
        <rect x="20" y="8" width="8" height="8" fill="currentColor" />
        <rect x="12" y="16" width="8" height="8" fill="currentColor" />
        <rect x="20" y="16" width="8" height="8" fill="currentColor" />
        <rect x="28" y="16" width="8" height="8" fill="currentColor" />
        <rect x="8" y="20" width="8" height="8" fill="currentColor" />
        <rect x="16" y="20" width="8" height="8" fill="currentColor" />
        <rect x="24" y="20" width="8" height="8" fill="currentColor" />
        <rect x="32" y="20" width="8" height="8" fill="currentColor" />
        <rect x="12" y="28" width="8" height="8" fill="currentColor" />
        <rect x="20" y="28" width="8" height="8" fill="currentColor" />
        <rect x="28" y="28" width="8" height="8" fill="currentColor" />
        <rect x="20" y="36" width="8" height="8" fill="currentColor" />
      </svg>
    </div>
  );
};
