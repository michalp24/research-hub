import React from 'react';
import HeaderBanner from './HeaderBanner';
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

const headerBannerCode = `<!-- ===== Header Banner Section: NVIDIA-styled header banner ===== -->
<!-- This is the main header banner that appears at the top of the page -->
<div class="nv-header-banner">
  <!-- Container to center and limit the width of the content -->
  <div class="nv-container">
    <!-- Main header banner container with left and right sections -->
    <div class="nv-header-banner__container">
      
      <!-- ===== LEFT SIDE OF HEADER BANNER ===== -->
      <!-- Contains the breadcrumb navigation, main title, and description -->
      <div class="nv-header-banner__left">
        
        <!-- ===== BREADCRUMB NAVIGATION ===== -->
        <!-- Shows the current page location (like "Home > Research Labs > Deep Learning") -->
        <div class="nv-header-banner__breadcrumb nv-text-small mb-4">
          <a href="#" class="nv-header-banner__breadcrumb-link">Research Labs</a>
          <span class="nv-header-banner__breadcrumb-sep">/</span>
          <a href="#" class="nv-header-banner__breadcrumb-link">Deep Learning Imagination</a>
        </div>
        <!-- ===== END BREADCRUMB NAVIGATION ===== -->
        
        <!-- ===== MAIN TITLE ===== -->
        <!-- The main heading for the page -->
        <div class="nv-header-banner__title">NVIDIA Deep Imagination Research</div>
        <!-- ===== END MAIN TITLE ===== -->
        
        <!-- ===== DESCRIPTION TEXT ===== -->
        <!-- The descriptive text that explains what this section is about -->
        <div class="nv-header-banner__desc nv-text-large mb-0">
          NVIDIA Deep Imagination Research (DIR) pioneers large-scale foundation models for visual Generative AI. We believe imagination, powered by sophisticated simulation, is the key to breakthrough innovation and problem-solving.
        </div>
        <!-- ===== END DESCRIPTION TEXT ===== -->
        
      </div>
      <!-- ===== END LEFT SIDE OF HEADER BANNER ===== -->
      
      <!-- ===== RIGHT SIDE OF HEADER BANNER ===== -->
      <!-- Contains the projects section and topics -->
      <div class="nv-header-banner__right">
        
        <!-- ===== PROJECTS SECTION ===== -->
        <!-- Contains the "Projects and Publications" button -->
        <div class="nv-header-banner__projects">
          <div class="nv-header-banner__projects-title mb-4">Projects and Publications:</div>
          <a class="nv-cta-primary nv-cta-primary--small" href="#">Jump to Lists</a>
        </div>
        <!-- ===== END PROJECTS SECTION ===== -->
        
        <!-- ===== TOPICS LINKS SECTION ===== -->
        <!-- Contains two columns of topics -->
        <div class="nv-header-banner__quicklinks">
          <div class="nv-header-banner__quicklinks-title">Topics:</div>
          <!-- Two columns of links -->
          <div class="nv-header-banner__quicklinks-list">
            <!-- ===== FIRST COLUMN OF LINKS ===== -->
            <ul class="nv-list nv-list--white">
              <li>Training</li>
              <li>Forums</li>
              <li>Technical Blog</li>
            </ul>
            <!-- ===== END FIRST COLUMN OF LINKS ===== -->
            
            <!-- ===== SECOND COLUMN OF LINKS ===== -->
            <ul class="nv-list nv-list--white">
              <li>Training</li>
              <li>Forums</li>
              <li>Technical Blog</li>
            </ul>
            <!-- ===== END SECOND COLUMN OF LINKS ===== -->
          </div>
        </div>
        <!-- ===== END TOPICS SECTION ===== -->
        
      </div>
      <!-- ===== END RIGHT SIDE OF HEADER BANNER ===== -->
      
    </div>
  </div>
</div>
<!-- ===== End Header Banner Section ===== -->`;

const HeaderBannerShowcase = () => {
  return (
    <ShowcaseContainer>
      <ShowcaseTitle>Header Banner</ShowcaseTitle>
      <p>A full-width header banner component following NVIDIA's design system.</p>
      {/* ===== Header Banner Section: NVIDIA-styled header banner ===== */}
      <ExampleContainer>
        <HeaderBanner />
      </ExampleContainer>
      {/* ===== End Header Banner Section ===== */}
      <CodeBlockWithExpand code={headerBannerCode} />
    </ShowcaseContainer>
  );
};

export default HeaderBannerShowcase; 