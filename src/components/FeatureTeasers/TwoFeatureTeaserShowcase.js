import React from 'react';
import TwoFeatureTeaser from './TwoFeatureTeaser';
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
`;

const twoFeatureTeaserCode = `<!-- ===== 2 Feature Teaser Section: NVIDIA-styled teaser cards ===== -->
<!-- This section displays two feature teaser cards side by side -->
<div class="nv-section">
  <!-- Container to center and limit the width of the content -->
  <div class="nv-container">
    
    <!-- ===== SECTION TITLE ===== -->
    <!-- The main heading for the "Relevant Lab News" section -->
    <h2 class="nv-h--medium" style="margin-bottom: 2rem;">Relevant Lab News</h2>
    <!-- ===== END SECTION TITLE ===== -->
    
    <!-- ===== FEATURE TEASERS GRID ===== -->
    <!-- This creates a 2-column grid layout for the feature teaser cards -->
    <div class="nv-feature-teasers-grid nv-feature-teasers-grid--2">
      
      <!-- ===== FEATURE TEASER CARD 1 ===== -->
      <!-- Each card contains: image, date, title, body text, and call-to-action button -->
      <div class="nv-teaser">
        
        <!-- ===== TEASER IMAGE ===== -->
        <!-- The image container for the teaser's featured image -->
        <div class="nv-teaser-media">
          <img alt="Placeholder Image" src="https://research.nvidia.com/labs/dir/cosmos-predict2/images/video/sec4_img2.jpg" />
        </div>
        <!-- ===== END TEASER IMAGE ===== -->
        
        <!-- ===== TEASER CONTENT ===== -->
        <!-- Contains all the text content: date, title, body, and button -->
        <div class="nv-teaser-content">
          
          <!-- ===== TEASER HEADER ===== -->
          <!-- Contains the date and title -->
          <div class="nv-teaser-header">
            <!-- ===== TEASER DATE ===== -->
            <!-- The publication date for this teaser -->
            <div class="nv-text nv-text-bold" style="margin-bottom: 4px;">April 14, 2022</div>
            <!-- ===== END TEASER DATE ===== -->
            
            <!-- ===== TEASER TITLE ===== -->
            <!-- The main title/headline for this teaser -->
            <h2 class="nv-h--small" style="margin-bottom: 8px;">Feature Title Style as Desktop Heading Smaller</h2>
            <!-- ===== END TEASER TITLE ===== -->
          </div>
          <!-- ===== END TEASER HEADER ===== -->
          
          <!-- ===== TEASER BODY ===== -->
          <!-- The descriptive text that explains what this teaser is about -->
          <div class="nv-teaser-body">
            <p>Create immersive, real-time, physically accurate visualizations with photorealistic rendering. NVIDIA RTX let's design teams iterate quickly to explore ideas and bring amazing products to life precisely as envisioned.</p>
          </div>
          <!-- ===== END TEASER BODY ===== -->
          
          <!-- ===== TEASER FOOTER ===== -->
          <!-- Contains the call-to-action button -->
          <div class="nv-teaser-footer">
            <a class="nv-cta-secondary--small" href="#">CTA Button</a>
          </div>
          <!-- ===== END TEASER FOOTER ===== -->
          
        </div>
        <!-- ===== END TEASER CONTENT ===== -->
        
      </div>
      <!-- ===== END FEATURE TEASER CARD 1 ===== -->
      
      <!-- ===== FEATURE TEASER CARD 2 ===== -->
      <div class="nv-teaser">
        <div class="nv-teaser-media">
          <img alt="Placeholder Image" src="https://research.nvidia.com/labs/dir/cosmos-predict2/images/video/sec4_img2.jpg" />
        </div>
        <div class="nv-teaser-content">
          <div class="nv-teaser-header">
            <div class="nv-text nv-text-bold" style="margin-bottom: 4px;">April 14, 2022</div>
            <h2 class="nv-h--small" style="margin-bottom: 8px;">Feature Title Style as Desktop Heading Smaller</h2>
          </div>
          <div class="nv-teaser-body">
            <p>Create immersive, real-time, physically accurate visualizations with photorealistic rendering. NVIDIA RTX let's design teams iterate quickly to explore ideas and bring amazing products to life precisely as envisioned.</p>
          </div>
          <div class="nv-teaser-footer">
            <a class="nv-cta-secondary--small" href="#">CTA Button</a>
          </div>
        </div>
      </div>
      <!-- ===== END FEATURE TEASER CARD 2 ===== -->
      
    </div>
    <!-- ===== END FEATURE TEASERS GRID ===== -->
    
  </div>
</div>
<!-- ===== End 2 Feature Teaser Section ===== -->`;

const TwoFeatureTeaserShowcase = () => {
  return (
    <ShowcaseContainer>
      <ShowcaseTitle>2 Feature Teaser</ShowcaseTitle>
      <p>A responsive grid of 2 NVIDIA-styled teaser cards.</p>
      {/* ===== 2 Feature Teaser Section: NVIDIA-styled teaser cards ===== */}
      <ExampleContainer>
        <TwoFeatureTeaser />
      </ExampleContainer>
      {/* ===== End 2 Feature Teaser Section ===== */}
      <CodeBlockWithExpand code={twoFeatureTeaserCode} />
    </ShowcaseContainer>
  );
};

export default TwoFeatureTeaserShowcase; 