import React from 'react';

const TripleMediaSection = () => {
  return (
    <div className="nv-section">
      <div className="nv-container">
        <div className="nv-h--medium mb-3">
          Results
        </div>
        <p className="nv-text-large mb-5">
          Our method generates high-quality 3D scenes from text descriptions, demonstrating robust performance across various scenarios.
        </p>
        <div className="nv-grid--3-cols-custom">
          <div>
            <video style={{ width: '100%' }} controls loop autoPlay muted src="https://research.nvidia.com/labs/dir/scenethesis/assets/results-billiard.mp4"></video>
            <p className="nv-text-medium mt-3">
              Billiard Table Scene Generation
            </p>
          </div>
          <div>
            <video style={{ width: '100%' }} controls loop autoPlay muted src="https://research.nvidia.com/labs/dir/scenethesis/assets/results-billiard.mp4"></video>
            <p className="nv-text-medium mt-3">
              Billiard Table Scene Generation
            </p>
          </div>
          <div>
            <video style={{ width: '100%' }} controls loop autoPlay muted src="https://research.nvidia.com/labs/dir/scenethesis/assets/results-billiard.mp4"></video>
            <p className="nv-text-medium mt-3">
              Billiard Table Scene Generation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripleMediaSection; 