import React from 'react';
import styled from 'styled-components';
import SingleMediaSection from './SingleMediaSection';
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

const sectionCode = `<!-- ===== 1 Image Section: Single image with caption ===== -->
<!-- This section displays a single image with descriptive text and caption -->
<div class="nv-section">
  <!-- Container to center and limit the width of the content -->
  <div class="nv-container">
    
    <!-- ===== SECTION TITLE ===== -->
    <!-- The main heading for this image section -->
    <div class="nv-h--medium mb-3">
      Pipeline Overview
    </div>
    <!-- ===== END SECTION TITLE ===== -->
    
    <!-- ===== SECTION DESCRIPTION ===== -->
    <!-- The descriptive text that explains what the image shows -->
    <p class="nv-text-large mb-5">
      The following diagram illustrates the pipeline of our 3D scene generation method.
    </p>
    <!-- ===== END SECTION DESCRIPTION ===== -->
    
    <!-- ===== IMAGE CONTAINER ===== -->
    <!-- A centered container for the image and its caption -->
    <div style="display: flex; flex-direction: column; align-items: center;">
      
      <!-- ===== IMAGE ELEMENT ===== -->
      <!-- The main image with responsive sizing and styling -->
      <!-- Width: 100% makes it responsive -->
      <!-- Max-width: 700px limits the maximum size -->
      <!-- Border-radius: 4px adds rounded corners -->
      <img 
        src="https://research.nvidia.com/labs/dir/scenethesis/assets/pipeline.png"
        alt="Pipeline Overview"
        style="width: 100%; max-width: 700px; border-radius: 4px;"
      />
      <!-- ===== END IMAGE ELEMENT ===== -->
      
      <!-- ===== IMAGE CAPTION ===== -->
      <!-- The descriptive text below the image -->
      <p class="nv-text-medium mt-3">
        SceneThesis pipeline for text-to-3D scene generation.
      </p>
      <!-- ===== END IMAGE CAPTION ===== -->
      
    </div>
    <!-- ===== END IMAGE CONTAINER ===== -->
    
  </div>
</div>
<!-- ===== End 1 Image Section ===== -->`;

const SingleMediaSectionShowcase = () => {
  return (
    <ShowcaseContainer>
      <ShowcaseTitle>1 Image Section</ShowcaseTitle>
      <p>A section component with a single image, following NVIDIA's design system.</p>

      {/* ===== 1 Image Section: Single image with caption ===== */}
      <ExampleContainer>
        <SingleMediaSection />
      </ExampleContainer>
      {/* ===== End 1 Image Section ===== */}

      <CodeBlockWithExpand code={sectionCode} />
    </ShowcaseContainer>
  );
};

export default SingleMediaSectionShowcase; 