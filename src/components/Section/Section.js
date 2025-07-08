import React from 'react';

const Section = () => {
  return (
    <div className="nv-section">
      <div className="nv-container">
        <div className="nv-h--small mb-4">
          SceneThesis
        </div>
        <div className="nv-h--large mb-4">
          A Language and Vision Agentic Framework for 3D Scene Generation
        </div>
        <p className="nv-text-large mb-5">
          Lu Ling, Chen-Hsuan Lin, Tsung-Yi Lin, Yifan Ding, Yu Zeng, Yichen Sheng, Yunhao Ge, Ming-Yu Liu, Aniket Bera, Zhaoshuo Li
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button className="nv-cta-primary">Main CTA</button>
          <button className="nv-cta-primary-alt">Secondary CTA</button>
          <button className="nv-cta-primary-alt">Tertiary CTA</button>
        </div>
      </div>
    </div>
  );
};

export default Section; 