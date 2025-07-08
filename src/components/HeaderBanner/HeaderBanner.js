import React from 'react';

const HeaderBanner = () => (
  <>
    {/* ===== HEADER BANNER SECTION STARTS ===== */}
    {/* This is the main header banner that appears at the top of the page */}
    <div className="nv-header-banner">
      {/* Container to center and limit the width of the content */}
      <div className="nv-container">
        {/* Main header banner container with left and right sections */}
        <div className="nv-header-banner__container">
          
          {/* ===== LEFT SIDE OF HEADER BANNER ===== */}
          {/* Contains the breadcrumb navigation, main title, and description */}
          <div className="nv-header-banner__left">
            
            {/* ===== BREADCRUMB NAVIGATION ===== */}
            {/* Shows the current page location (like "Home > Research Labs > Deep Learning") */}
            <div className="nv-header-banner__breadcrumb nv-text-small mb-4">
              <a href="/research-labs" className="nv-header-banner__breadcrumb-link">Research Labs</a>
              <span className="nv-header-banner__breadcrumb-sep">/</span>
              <a href="/research-labs/deep-learning-imagination" className="nv-header-banner__breadcrumb-link">Deep Learning Imagination</a>
            </div>
            {/* ===== END BREADCRUMB NAVIGATION ===== */}
            
            {/* ===== MAIN TITLE ===== */}
            {/* The main heading for the page */}
            <div className="nv-header-banner__title">NVIDIA Deep Imagination Research</div>
            {/* ===== END MAIN TITLE ===== */}
            
            {/* ===== DESCRIPTION TEXT ===== */}
            {/* The descriptive text that explains what this section is about */}
            <div className="nv-header-banner__desc nv-text-large mb-0">
              NVIDIA Deep Imagination Research (DIR) pioneers large-scale foundation models for visual Generative AI. We believe imagination, powered by sophisticated simulation, is the key to breakthrough innovation and problem-solving.
            </div>
            {/* ===== END DESCRIPTION TEXT ===== */}
            
          </div>
          {/* ===== END LEFT SIDE OF HEADER BANNER ===== */}
          
          {/* ===== RIGHT SIDE OF HEADER BANNER ===== */}
          {/* Contains the projects section and topics */}
          <div className="nv-header-banner__right">
            
            {/* ===== PROJECTS SECTION ===== */}
            {/* Contains the "Projects and Publications" button */}
            <div className="nv-header-banner__projects">
              <div className="nv-header-banner__projects-title mb-4">Projects and Publications:</div>
              <a className="nv-cta-primary nv-cta-primary--small" href="/projects">Jump to Lists</a>
            </div>
            {/* ===== END PROJECTS SECTION ===== */}
            
            {/* ===== TOPICS SECTION ===== */}
            {/* Contains two columns of topics */}
            <div className="nv-header-banner__quicklinks">
              <div className="nv-header-banner__quicklinks-title">Topics:</div>
              {/* Two columns of links */}
              <div className="nv-header-banner__quicklinks-list">
                {/* ===== FIRST COLUMN OF LINKS ===== */}
                <ul className="nv-list nv-list--white">
                  <li>Training</li>
                  <li>Forums</li>
                  <li>Technical Blog</li>
                </ul>
                {/* ===== END FIRST COLUMN OF LINKS ===== */}
                
                {/* ===== SECOND COLUMN OF LINKS ===== */}
                <ul className="nv-list nv-list--white">
                  <li>Training</li>
                  <li>Forums</li>
                  <li>Technical Blog</li>
                </ul>
                {/* ===== END SECOND COLUMN OF LINKS ===== */}
              </div>
            </div>
            {/* ===== END TOPICS SECTION ===== */}
            
          </div>
          {/* ===== END RIGHT SIDE OF HEADER BANNER ===== */}
          
        </div>
      </div>
    </div>
    {/* ===== HEADER BANNER SECTION ENDS ===== */}
  </>
);

export default HeaderBanner; 