import React from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';
import CodeBlockWithExpand from '../Shared/CodeBlockWithExpand';
import styled from 'styled-components';

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
  background: #222;
`;

const SliderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const beforeImg = "https://research.nvidia.com/labs/dir/cosmos-tokenizer/images/DV-1.jpg";
const afterImg = "https://research.nvidia.com/labs/dir/cosmos-tokenizer/images/DV-1e.jpg";

const sectionCode = `<!-- ===== Before/After Image Slider: Interactive comparison slider ===== -->
<!-- This component allows users to compare two images by dragging a slider -->
<div class="nv-container">
  <!-- ===== SLIDER WRAPPER ===== -->
  <!-- Centers the slider and applies max-width -->
  <div style="display: flex; justify-content: center; width: 100%;">
    <div class="nv-before-after-slider" style="max-width: 850px; min-height: 478px;">
      <!-- ===== BEFORE IMAGE ===== -->
      <!-- The image shown on the right side (revealed as you drag left) -->
      <img src="https://research.nvidia.com/labs/dir/cosmos-tokenizer/images/DV-1.jpg" alt="Before" class="nv-slider-img nv-slider-img--before" />
      <!-- ===== AFTER IMAGE (clipped) ===== -->
      <!-- The image shown on the left side (revealed as you drag right) -->
      <img 
        src="https://research.nvidia.com/labs/dir/cosmos-tokenizer/images/DV-1e.jpg" 
        alt="After" 
        class="nv-slider-img nv-slider-img--after"
        style="clip-path: inset(0 50% 0 0);"
      />
      <!-- ===== SLIDER HANDLE ===== -->
      <!-- The draggable handle that lets you control the comparison -->
      <div class="nv-slider-handle" style="left: calc(50% - 16px);">
        <div class="nv-slider-handle-bar"></div>
      </div>
      <!-- ===== LABELS ===== -->
      <!-- Labels for before and after images -->
      <div class="nv-slider-label nv-slider-label--before">Before</div>
      <div class="nv-slider-label nv-slider-label--after">After</div>
    </div>
  </div>
  <!-- ===== END SLIDER WRAPPER ===== -->
  
  <!-- ===== CAPTION ===== -->
  <!-- Descriptive text below the slider -->
  <p class="nv-text-medium mt-3" style="text-align: center;">
    Interactive comparison showing the difference between the original and enhanced images.
  </p>
  <!-- ===== END CAPTION ===== -->
</div>
<!-- ===== End Before/After Image Slider ===== -->`;

const BeforeAfterSliderShowcase = () => (
  <ShowcaseContainer>
    <ShowcaseTitle>Before/After Image Slider</ShowcaseTitle>
    <p>An interactive slider to compare two images side by side. Drag the handle to reveal more or less of each image.</p>
    {/* ===== Before/After Image Slider: Interactive comparison slider ===== */}
    <ExampleContainer>
      <div className="nv-container">
        <SliderWrapper>
          <BeforeAfterSlider 
            beforeImg={beforeImg} 
            afterImg={afterImg} 
            beforeLabel="Before" 
            afterLabel="After" 
          />
        </SliderWrapper>
        <p className="nv-text-medium mt-3" style={{ textAlign: 'center' }}>
          Interactive comparison showing the difference between the original and enhanced images.
        </p>
      </div>
    </ExampleContainer>
    {/* ===== End Before/After Image Slider ===== */}
    <CodeBlockWithExpand code={sectionCode} />
  </ShowcaseContainer>
);

export default BeforeAfterSliderShowcase; 