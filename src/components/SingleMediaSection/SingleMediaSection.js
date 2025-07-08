import React from 'react';

const SingleMediaSection = () => {
  return (
    <div className="nv-section">
      <div className="nv-container">
        <div className="nv-h--medium mb-3">
          Pipeline Overview
        </div>
        <p className="nv-text-large mb-5">
          The following diagram illustrates the pipeline of our 3D scene generation method.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img 
            src="https://research.nvidia.com/labs/dir/scenethesis/assets/pipeline.png"
            alt="Pipeline Overview"
            style={{ width: '100%', maxWidth: '700px', borderRadius: '4px' }}
          />
          <p className="nv-text-medium mt-3">
            SceneThesis pipeline for text-to-3D scene generation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleMediaSection; 