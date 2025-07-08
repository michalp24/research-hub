import React from 'react';

const ColorSection = () => {
  return (
    <>
      {/* ===== COLOR SECTION STARTS ===== */}
      {/* This section demonstrates how to use alternate background colors with NVIDIA's design system */}
      {/* The .surface-alt-2 class changes the background color of this entire section */}
      <div className="nv-section surface-alt-2">
        {/* Container to center and limit the width of the content */}
        <div className="nv-container">
          
          {/* ===== SECTION TITLE ===== */}
          {/* The main heading for the color section example */}
          <div className="nv-h--medium mb-3">
            Color Section Example
          </div>
          {/* ===== END SECTION TITLE ===== */}
          
          {/* ===== SECTION DESCRIPTION ===== */}
          {/* The descriptive text that explains how to use the surface-alt-2 class */}
          <p className="nv-text-large mb-5">
            This section demonstrates how to change the background color by adding the <code>.surface-alt-2</code> class to the section container.
          </p>
          {/* ===== END SECTION DESCRIPTION ===== */}
          
          {/* ===== CONTENT AREA ===== */}
          {/* This is a styled content box that demonstrates the contrast between backgrounds */}
          <div style={{ padding: '2rem', backgroundColor: 'var(--color-gray-0)', borderRadius: '8px', border: '1px solid var(--color-gray-200)' }}>
            
            {/* ===== MAIN CONTENT TEXT ===== */}
            {/* This paragraph explains the purpose and effect of the surface-alt-2 class */}
            <p className="nv-text-medium">
              This content area shows how the <code>.surface-alt-2</code> class creates an alternate background color for the section, 
              while maintaining proper contrast and readability for the content inside.
            </p>
            {/* ===== END MAIN CONTENT TEXT ===== */}
            
            {/* ===== ADDITIONAL EXPLANATION ===== */}
            {/* This paragraph provides additional context about when to use this class */}
            <p className="nv-text-medium mt-3">
              The <code>.surface-alt-2</code> class is useful for creating visual separation between sections or highlighting specific content areas.
            </p>
            {/* ===== END ADDITIONAL EXPLANATION ===== */}

            {/* ===== USAGE INSTRUCTIONS ===== */}
            {/* This highlighted box contains specific usage instructions */}
            <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#e8f4fd', borderRadius: '4px', border: '1px solid #b3d9ff' }}>
              <p className="nv-text-medium" style={{ margin: 0 }}>
                <strong>Usage:</strong> Add <code>.surface-alt-2</code> class to your <code>.nv-section</code> element to change the section-level background color.
              </p>
            </div>
            {/* ===== END USAGE INSTRUCTIONS ===== */}
            
          </div>
          {/* ===== END CONTENT AREA ===== */}
          
        </div>
      </div>
      {/* ===== COLOR SECTION ENDS ===== */}
    </>
  );
};

export default ColorSection; 