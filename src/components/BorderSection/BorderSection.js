import React from 'react';

const BorderSection = () => {
  return (
    <>
      {/* ===== BORDER SECTION STARTS ===== */}
      {/* This section creates a horizontal line separator using NVIDIA's design system */}
      <div className="nv-section">
        {/* Container without padding to allow the border to extend to the edges */}
        <div className="nv-container-no-padding">
          
          {/* ===== HORIZONTAL BORDER LINE ===== */}
          {/* This creates a thin horizontal line that spans the full width */}
          {/* The line is 1px tall, gray colored (#CCCCCC), and spans 100% width */}
          <div style={{ height: '1px', background: '#CCCCCC', width: '100%' }} />
          {/* ===== END HORIZONTAL BORDER LINE ===== */}
          
        </div>
      </div>
      {/* ===== BORDER SECTION ENDS ===== */}
    </>
  );
};

export default BorderSection; 