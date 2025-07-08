import React from 'react';

// ===== MEDIA TEASERS DATA =====
// This array contains all the media teaser information
// Each teaser has: title, image, and an array of call-to-action buttons
// You can add, remove, or modify teasers by editing this array
const mediaTeasers = [
  {
    title: 'Feature Title Style as Desktop Heading Smaller',
    image: 'https://s3.amazonaws.com/cms.ipressroom.com/219/files/20252/nvidia-cosmos.jpg',
    ctas: [
      { text: 'Project', href: '#' },
      { text: 'Paper', href: '#' },
      { text: 'Code', href: '#' },
    ],
  },
  {
    title: 'Feature Title Style as Desktop Heading Smaller',
    image: 'https://s3.amazonaws.com/cms.ipressroom.com/219/files/20252/nvidia-cosmos.jpg',
    ctas: [
      { text: 'Project', href: '#' },
      { text: 'Paper', href: '#' },
    ],
  },
  {
    title: 'Feature Title Style as Desktop Heading Smaller',
    image: 'https://s3.amazonaws.com/cms.ipressroom.com/219/files/20252/nvidia-cosmos.jpg',
    ctas: [
      { text: 'Project', href: '#' },
      { text: 'Paper', href: '#' },
      { text: 'Code', href: '#' },
    ],
  },
  {
    title: 'Feature Title Style as Desktop Heading Smaller',
    image: 'https://s3.amazonaws.com/cms.ipressroom.com/219/files/20252/nvidia-cosmos.jpg',
    ctas: [
      { text: 'Project', href: '#' },
      { text: 'Paper', href: '#' },
      { text: 'Code', href: '#' },
      { text: 'Demo', href: '#' },
    ],
  },
];
// ===== END MEDIA TEASERS DATA =====

const FourMediaTeaser = () => (
  <>
    {/* ===== FOUR MEDIA TEASERS SECTION STARTS ===== */}
    {/* This section displays four media teaser cards in a 4-column grid */}
    <div className="nv-section">
      {/* Container to center and limit the width of the content */}
      <div className="nv-container">
        
        {/* ===== SECTION HEADER ===== */}
        {/* Contains the title and CTA button in a flex container */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          {/* ===== SECTION TITLE ===== */}
          {/* The main heading for the "Projects and Publications" section */}
          <h2 className="nv-h--medium">
            Projects and Publications
          </h2>
          {/* ===== END SECTION TITLE ===== */}
          
          {/* ===== CTA BUTTON ===== */}
          {/* Right-aligned call-to-action button */}
          <a href="/projects" className="nv-cta-secondary nv-cta-primary--small">
            View All Projects
          </a>
          {/* ===== END CTA BUTTON ===== */}
        </div>
        {/* ===== END SECTION HEADER ===== */}
        
        {/* ===== MEDIA TEASERS GRID ===== */}
        {/* This creates a 4-column grid layout for the media teaser cards */}
        <div className="nv-feature-teasers-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          
          {/* ===== MEDIA TEASER CARDS LOOP ===== */}
          {/* This loop creates a card for each teaser in the mediaTeasers array */}
          {mediaTeasers.map((teaser, idx) => (
            /* ===== INDIVIDUAL MEDIA TEASER CARD ===== */
            /* Each card contains: image, title, and multiple call-to-action buttons */
            <div className="nv-teaser nv-teaser-card" key={idx}>
              
              {/* ===== TEASER IMAGE ===== */}
              {/* The image container for the teaser's featured image */}
              <div className="nv-teaser-media">
                <img alt="Media" src={teaser.image} />
              </div>
              {/* ===== END TEASER IMAGE ===== */}
              
              {/* ===== TEASER CONTENT ===== */}
              {/* Contains the title and call-to-action buttons */}
              <div className="nv-teaser-content no-gap">
                
                {/* ===== TEASER HEADER ===== */}
                {/* Contains the title/headline for this teaser */}
                <div className="nv-teaser-header">
                  <h2 className="nv-h--smallest">{teaser.title}</h2>
                </div>
                {/* ===== END TEASER HEADER ===== */}
                
                {/* ===== TEASER FOOTER ===== */}
                {/* Contains the call-to-action buttons (Project, Paper, Code, Demo, etc.) */}
                <div className="nv-teaser-footer" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                  {/* ===== CALL-TO-ACTION BUTTONS LOOP ===== */}
                  {/* This loop creates a button for each CTA in the ctas array */}
                  {teaser.ctas.map((cta, i) => (
                    /* ===== INDIVIDUAL CTA BUTTON ===== */
                    /* Each button links to a different resource (Project, Paper, Code, Demo, etc.) */
                    <button key={i} className="nv-cta-secondary--small">
                      {cta.text}
                    </button>
                    /* ===== END INDIVIDUAL CTA BUTTON ===== */
                  ))}
                  {/* ===== END CALL-TO-ACTION BUTTONS LOOP ===== */}
                </div>
                {/* ===== END TEASER FOOTER ===== */}
                
              </div>
              {/* ===== END TEASER CONTENT ===== */}
              
            </div>
            /* ===== END INDIVIDUAL MEDIA TEASER CARD ===== */
          ))}
          {/* ===== END MEDIA TEASER CARDS LOOP ===== */}
          
        </div>
        {/* ===== END MEDIA TEASERS GRID ===== */}
        
      </div>
    </div>
    {/* ===== FOUR MEDIA TEASERS SECTION ENDS ===== */}
  </>
);

export default FourMediaTeaser; 