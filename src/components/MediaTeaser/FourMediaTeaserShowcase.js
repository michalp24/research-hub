import React from 'react';
import FourMediaTeaser from './FourMediaTeaser';
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

const sectionCode = `<!-- ===== 4 Media Teaser Section: Four media teaser cards ===== -->
<!-- This section displays four media teaser cards in a 4-column grid -->
<div class="nv-section">
  <!-- Container to center and limit the width of the content -->
  <div class="nv-container">
    
    <!-- ===== SECTION HEADER ===== -->
    <!-- Contains the title and CTA button in a flex container -->
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
      <!-- ===== SECTION TITLE ===== -->
      <!-- The main heading for the "Projects and Publications" section -->
      <h2 class="nv-h--medium">Projects and Publications</h2>
      <!-- ===== END SECTION TITLE ===== -->
      
      <!-- ===== CTA BUTTON ===== -->
      <!-- Right-aligned call-to-action button -->
      <a class="nv-cta-secondary nv-cta-primary--small">View All Projects</a>
      <!-- ===== END CTA BUTTON ===== -->
    </div>
    <!-- ===== END SECTION HEADER ===== -->
    
    <!-- ===== MEDIA TEASERS GRID ===== -->
    <!-- This creates a 4-column grid layout for the media teaser cards -->
    <div class="nv-feature-teasers-grid" style="grid-template-columns: repeat(4, 1fr);">
      
      <!-- ===== MEDIA TEASER CARD 1 ===== -->
      <!-- Each card contains: image, title, and multiple call-to-action buttons -->
      <div class="nv-teaser nv-teaser-card">
        
        <!-- ===== TEASER IMAGE ===== -->
        <!-- The image container for the teaser's featured image -->
        <div class="nv-teaser-media">
          <img alt="Media" src="https://s3.amazonaws.com/cms.ipressroom.com/219/files/20252/nvidia-cosmos.jpg" />
        </div>
        <!-- ===== END TEASER IMAGE ===== -->
        
        <!-- ===== TEASER CONTENT ===== -->
        <!-- Contains the title and call-to-action buttons -->
        <div class="nv-teaser-content no-gap">
          
          <!-- ===== TEASER HEADER ===== -->
          <!-- Contains the title/headline for this teaser -->
          <div class="nv-teaser-header">
            <h2 class="nv-h--smallest">Feature Title Style as Desktop Heading Smaller</h2>
          </div>
          <!-- ===== END TEASER HEADER ===== -->
          
          <!-- ===== TEASER FOOTER ===== -->
          <!-- Contains the call-to-action buttons (Project, Paper, Code, etc.) -->
          <div class="nv-teaser-footer" style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <!-- ===== CALL-TO-ACTION BUTTONS ===== -->
            <!-- Each button links to a different resource (Project, Paper, Code, etc.) -->
            <button class="nv-cta-secondary--small">Project</button>
            <button class="nv-cta-secondary--small">Paper</button>
            <button class="nv-cta-secondary--small">Code</button>
            <!-- ===== END CALL-TO-ACTION BUTTONS ===== -->
          </div>
          <!-- ===== END TEASER FOOTER ===== -->
          
        </div>
        <!-- ===== END TEASER CONTENT ===== -->
        
      </div>
      <!-- ===== END MEDIA TEASER CARD 1 ===== -->
      
      <!-- ===== MEDIA TEASER CARD 2 ===== -->
      <div class="nv-teaser nv-teaser-card">
        <div class="nv-teaser-media">
          <img alt="Media" src="https://s3.amazonaws.com/cms.ipressroom.com/219/files/20252/nvidia-cosmos.jpg" />
        </div>
        <div class="nv-teaser-content no-gap">
          <div class="nv-teaser-header">
            <h2 class="nv-h--smallest">Feature Title Style as Desktop Heading Smaller</h2>
          </div>
          <div class="nv-teaser-footer" style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <button class="nv-cta-secondary--small" style="margin-right: 1rem;">Project</button>
            <button class="nv-cta-secondary--small">Paper</button>
          </div>
        </div>
      </div>
      <!-- ===== END MEDIA TEASER CARD 2 ===== -->
      
      <!-- ===== MEDIA TEASER CARD 3 ===== -->
      <div class="nv-teaser nv-teaser-card">
        <div class="nv-teaser-media">
          <img alt="Media" src="https://s3.amazonaws.com/cms.ipressroom.com/219/files/20252/nvidia-cosmos.jpg" />
        </div>
        <div class="nv-teaser-content no-gap">
          <div class="nv-teaser-header">
            <h2 class="nv-h--smallest">Feature Title Style as Desktop Heading Smaller</h2>
          </div>
          <div class="nv-teaser-footer" style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <button class="nv-cta-secondary--small">Project</button>
            <button class="nv-cta-secondary--small">Paper</button>
            <button class="nv-cta-secondary--small">Code</button>
          </div>
        </div>
      </div>
      <!-- ===== END MEDIA TEASER CARD 3 ===== -->
      
      <!-- ===== MEDIA TEASER CARD 4 ===== -->
      <div class="nv-teaser nv-teaser-card">
        <div class="nv-teaser-media">
          <img alt="Media" src="https://s3.amazonaws.com/cms.ipressroom.com/219/files/20252/nvidia-cosmos.jpg" />
        </div>
        <div class="nv-teaser-content no-gap">
          <div class="nv-teaser-header">
            <h2 class="nv-h--smallest">Feature Title Style as Desktop Heading Smaller</h2>
          </div>
          <div class="nv-teaser-footer" style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <button class="nv-cta-secondary--small">Project</button>
            <button class="nv-cta-secondary--small">Paper</button>
            <button class="nv-cta-secondary--small">Code</button>
            <button class="nv-cta-secondary--small">Demo</button>
          </div>
        </div>
      </div>
      <!-- ===== END MEDIA TEASER CARD 4 ===== -->
      
    </div>
    <!-- ===== END MEDIA TEASERS GRID ===== -->
    
  </div>
</div>
<!-- ===== End 4 Media Teaser Section ===== -->`;

const FourMediaTeaserShowcase = () => {
  return (
    <ShowcaseContainer>
      <ShowcaseTitle>4 Media Teaser</ShowcaseTitle>
      <p>A responsive grid of 4 NVIDIA-styled media teaser cards with nv-list.</p>
      {/* ===== 4 Media Teaser Section: Four media teaser cards with nv-list ===== */}
      <ExampleContainer>
        <FourMediaTeaser />
      </ExampleContainer>
      {/* ===== End 4 Media Teaser Section ===== */}
      <CodeBlockWithExpand code={sectionCode} />
    </ShowcaseContainer>
  );
};

export default FourMediaTeaserShowcase; 