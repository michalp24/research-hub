import React from 'react';
import styled from 'styled-components';
import Section from './Section';
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

const sectionCode = `<!-- ===== Intro Section: Full-width hero section ===== -->
<!-- This is a hero section that appears at the top of a page with main content -->
<div class="nv-section">
  <!-- Container to center and limit the width of the content -->
  <div class="nv-container">
    
    <!-- ===== PROJECT NAME ===== -->
    <!-- The project name or subtitle that appears above the main title -->
    <div class="nv-h--small mb-4">
      SceneThesis
    </div>
    <!-- ===== END PROJECT NAME ===== -->
    
    <!-- ===== MAIN TITLE ===== -->
    <!-- The main heading for the page - this is the primary title -->
    <div class="nv-h--large mb-4">
      A Language and Vision Agentic Framework for 3D Scene Generation
    </div>
    <!-- ===== END MAIN TITLE ===== -->
    
    <!-- ===== AUTHOR LIST ===== -->
    <!-- The list of authors or contributors for this project -->
    <p class="nv-text-large mb-5">
      Lu Ling, Chen-Hsuan Lin, Tsung-Yi Lin, Yifan Ding, Yu Zeng, Yichen Sheng, Yunhao Ge, Ming-Yu Liu, Aniket Bera, Zhaoshuo Li
    </p>
    <!-- ===== END AUTHOR LIST ===== -->
    
    <!-- ===== CALL-TO-ACTION BUTTONS ===== -->
    <!-- A row of buttons for different actions (Learn More, Download, etc.) -->
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <!-- ===== PRIMARY CTA BUTTON ===== -->
      <!-- The main call-to-action button (usually the most important action) -->
      <button class="nv-cta-primary">Main CTA</button>
      <!-- ===== END PRIMARY CTA BUTTON ===== -->
      
      <!-- ===== SECONDARY CTA BUTTON ===== -->
      <!-- A secondary action button -->
      <button class="nv-cta-primary-alt">Secondary CTA</button>
      <!-- ===== END SECONDARY CTA BUTTON ===== -->
      
      <!-- ===== TERTIARY CTA BUTTON ===== -->
      <!-- A tertiary action button -->
      <button class="nv-cta-primary-alt">Tertiary CTA</button>
      <!-- ===== END TERTIARY CTA BUTTON ===== -->
    </div>
    <!-- ===== END CALL-TO-ACTION BUTTONS ===== -->
    
  </div>
</div>
<!-- ===== End Intro Section ===== -->`;

const SectionShowcase = () => {
  return (
    <ShowcaseContainer>
      <ShowcaseTitle>Intro Section</ShowcaseTitle>
      <p>A full-width section component following NVIDIA's design system.</p>
      
      {/* ===== Intro Section: Full-width hero section ===== */}
      <ExampleContainer>
        <Section />
      </ExampleContainer>
      {/* ===== End Intro Section ===== */}

      <CodeBlockWithExpand code={sectionCode} />
    </ShowcaseContainer>
  );
};

export default SectionShowcase; 