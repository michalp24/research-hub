import React, { useRef, useState } from 'react';
import './BeforeAfterSlider.css';

/**
 * BeforeAfterSlider Component
 * Shows two images (before/after) with a draggable slider to reveal more or less of each image.
 *
 * Props:
 * - beforeImg: URL of the 'before' image
 * - afterImg: URL of the 'after' image
 * - beforeLabel: Label for the before image (optional)
 * - afterLabel: Label for the after image (optional)
 */
const BeforeAfterSlider = ({ beforeImg, afterImg, beforeLabel = 'Before', afterLabel = 'After' }) => {
  const containerRef = useRef(null);
  const [sliderPos, setSliderPos] = useState(50); // percent
  const [dragging, setDragging] = useState(false);

  // Handle drag events
  const onDrag = (e) => {
    if (!dragging) return;
    const rect = containerRef.current.getBoundingClientRect();
    let x = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
    let percent = ((x - rect.left) / rect.width) * 100;
    percent = Math.max(0, Math.min(100, percent));
    setSliderPos(percent);
  };

  return (
    <div
      className="nv-before-after-slider"
      ref={containerRef}
      onMouseMove={onDrag}
      onMouseUp={() => setDragging(false)}
      onMouseLeave={() => setDragging(false)}
      onTouchMove={onDrag}
      onTouchEnd={() => setDragging(false)}
    >
      {/* ===== BEFORE IMAGE ===== */}
      {/* The image shown on the right side (revealed as you drag left) */}
      <img src={beforeImg} alt={beforeLabel} className="nv-slider-img nv-slider-img--before" />
      
      {/* ===== AFTER IMAGE (clipped) ===== */}
      {/* The image shown on the left side (revealed as you drag right) */}
      <img 
        src={afterImg} 
        alt={afterLabel} 
        className="nv-slider-img nv-slider-img--after"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      />
      
      {/* ===== SLIDER HANDLE ===== */}
      {/* The draggable handle that lets you control the comparison */}
      <div
        className="nv-slider-handle"
        style={{ left: `calc(${sliderPos}% - 16px)` }}
        onMouseDown={() => setDragging(true)}
        onTouchStart={() => setDragging(true)}
        role="slider"
        aria-valuenow={sliderPos}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
      >
        <div className="nv-slider-handle-bar" />
      </div>
      
      {/* ===== LABELS ===== */}
      {/* Labels for before and after images */}
      <div className="nv-slider-label nv-slider-label--before">{beforeLabel}</div>
      <div className="nv-slider-label nv-slider-label--after">{afterLabel}</div>
    </div>
  );
};

export default BeforeAfterSlider; 