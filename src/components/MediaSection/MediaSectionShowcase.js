import React from 'react';
import styled from 'styled-components';
import MediaSection from './MediaSection';
import CodeBlockWithExpand from '../Shared/CodeBlockWithExpand';

const ShowcaseContainer = styled.div`
  margin-bottom: 2rem;
  padding: 2rem;
  background-color: var(--color-gray-0);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ShowcaseTitle = styled.h2`
  font-size: 24px;
  text-transform: uppercase;
`;

const ExampleContainer = styled.div`
  border: 1px solid var(--color-gray-200);
  border-radius: 4px;
  margin: 1rem 0;
`;

const sectionCode = `<!-- ===== 2 Image Section: Two-column video showcase ===== -->
<!-- This section displays two videos side by side in a responsive grid -->
<div class="nv-section">
  <!-- Container to center and limit the width of the content -->
  <div class="nv-container">
    
    <!-- ===== SECTION TITLE ===== -->
    <!-- The main heading for this media section -->
    <div class="nv-h--medium mb-3">
      Results
    </div>
    <!-- ===== END SECTION TITLE ===== -->
    
    <!-- ===== SECTION DESCRIPTION ===== -->
    <!-- The descriptive text that explains what this section shows -->
    <p class="nv-text-large mb-5">
      Our method generates high-quality 3D scenes from text descriptions, demonstrating robust performance across various scenarios.
    </p>
    <!-- ===== END SECTION DESCRIPTION ===== -->
    
    <!-- ===== MEDIA GRID ===== -->
    <!-- This creates a 2-column grid layout for the videos -->
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
      
      <!-- ===== FIRST VIDEO COLUMN ===== -->
      <!-- Contains the first video and its caption -->
      <div>
        <!-- ===== VIDEO ELEMENT ===== -->
        <!-- The video player with controls and autoplay -->
        <video style="width: 100%; border-radius: 4px;" controls loop autoPlay muted src="https://research.nvidia.com/labs/dir/scenethesis/assets/results-billiard.mp4"></video>
        <!-- ===== END VIDEO ELEMENT ===== -->
        
        <!-- ===== VIDEO CAPTION ===== -->
        <!-- The descriptive text below the video -->
        <p class="nv-text-medium mt-3">
          Billiard Table Scene Generation
        </p>
        <!-- ===== END VIDEO CAPTION ===== -->
      </div>
      <!-- ===== END FIRST VIDEO COLUMN ===== -->
      
      <!-- ===== SECOND VIDEO COLUMN ===== -->
      <!-- Contains the second video and its caption -->
      <div>
        <!-- ===== VIDEO ELEMENT ===== -->
        <!-- The video player with controls and autoplay -->
        <video style="width: 100%; border-radius: 4px;" controls loop autoPlay muted src="https://research.nvidia.com/labs/dir/scenethesis/assets/results-billiard.mp4"></video>
        <!-- ===== END VIDEO ELEMENT ===== -->
        
        <!-- ===== VIDEO CAPTION ===== -->
        <!-- The descriptive text below the video -->
        <p class="nv-text-medium mt-3">
          Billiard Table Scene Generation
        </p>
        <!-- ===== END VIDEO CAPTION ===== -->
      </div>
      <!-- ===== END SECOND VIDEO COLUMN ===== -->
      
    </div>
    <!-- ===== END MEDIA GRID ===== -->
    
  </div>
</div>
<!-- ===== End 2 Image Section ===== -->`;

const MediaSectionShowcase = () => {
  return (
    <ShowcaseContainer>
      <ShowcaseTitle>2 Image Section</ShowcaseTitle>
      <p>A section component with media content following NVIDIA's design system.</p>
      
      {/* ===== 2 Image Section: Two-column video showcase ===== */}
      <ExampleContainer>
        <MediaSection />
      </ExampleContainer>
      {/* ===== End 2 Image Section ===== */}

      <CodeBlockWithExpand code={sectionCode} />
    </ShowcaseContainer>
  );
};

export default MediaSectionShowcase; 