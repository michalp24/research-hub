import React from 'react';

// ===== FEATURE TEASERS DATA =====
// This array contains all the feature teaser information
// Each teaser has: date, pretitle, title, body text, image, and call-to-action button
// You can add, remove, or modify teasers by editing this array
const teasers = [
  {
    date: 'April 14, 2022',
    pretitle: 'Feature Title Style as Desktop Heading Smaller',
    title: 'Feature Title Style as Desktop Heading Smaller',
    body: `Create immersive, real-time, physically accurate visualizations with photorealistic rendering. NVIDIA RTX let's design teams iterate quickly to explore ideas and bring amazing products to life precisely as envisioned.`,
    img: 'https://research.nvidia.com/labs/dir/cosmos-predict2/images/video/sec4_img2.jpg',
    cta: { text: 'CTA Button', href: '#' },
  },
  {
    date: 'April 14, 2022',
    pretitle: 'Feature Title Style as Desktop Heading Smaller',
    title: 'Feature Title Style as Desktop Heading Smaller',
    body: `Create immersive, real-time, physically accurate visualizations with photorealistic rendering. NVIDIA RTX let's design teams iterate quickly to explore ideas and bring amazing products to life precisely as envisioned.`,
    img: 'https://research.nvidia.com/labs/dir/cosmos-predict2/images/video/sec4_img2.jpg',
    cta: { text: 'CTA Button', href: '#' },
  },
  {
    date: 'April 14, 2022',
    pretitle: 'Feature Title Style as Desktop Heading Smaller',
    title: 'Feature Title Style as Desktop Heading Smaller',
    body: `Create immersive, real-time, physically accurate visualizations with photorealistic rendering. NVIDIA RTX let's design teams iterate quickly to explore ideas and bring amazing products to life precisely as envisioned.`,
    img: 'https://research.nvidia.com/labs/dir/cosmos-predict2/images/video/sec4_img2.jpg',
    cta: { text: 'CTA Button', href: '#' },
  },
];
// ===== END FEATURE TEASERS DATA =====

const ThreeFeatureTeaser = () => (
  <>
    {/* ===== THREE FEATURE TEASERS SECTION STARTS ===== */}
    {/* This section displays three feature teaser cards in a responsive grid */}
    <div className="nv-section">
      {/* Container to center and limit the width of the content */}
      <div className="nv-container">
        
        {/* ===== SECTION TITLE ===== */}
        {/* The main heading for the "Relevant Lab News" section */}
        <h2 className="nv-h--medium" style={{ marginBottom: '2rem' }}>
          Relevant Lab News
        </h2>
        {/* ===== END SECTION TITLE ===== */}
        
        {/* ===== FEATURE TEASERS GRID ===== */}
        {/* This creates a responsive grid layout for the feature teaser cards */}
        <div className="nv-feature-teasers-grid">
          
          {/* ===== FEATURE TEASER CARDS LOOP ===== */}
          {/* This loop creates a card for each teaser in the teasers array */}
          {teasers.map((teaser, idx) => (
            /* ===== INDIVIDUAL FEATURE TEASER CARD ===== */
            /* Each card contains: image, date, title, body text, and call-to-action button */
            <div className="nv-teaser" key={idx}>
              
              {/* ===== TEASER IMAGE ===== */}
              {/* The image container for the teaser's featured image */}
              <div className="nv-teaser-media">
                <img alt="Feature teaser" src={teaser.img} />
              </div>
              {/* ===== END TEASER IMAGE ===== */}
              
              {/* ===== TEASER CONTENT ===== */}
              {/* Contains all the text content: date, title, body, and button */}
              <div className="nv-teaser-content">
                
                {/* ===== TEASER HEADER ===== */}
                {/* Contains the date and title */}
                <div className="nv-teaser-header">
                  {/* ===== TEASER DATE ===== */}
                  {/* The publication date for this teaser */}
                  <div className="nv-text nv-text-bold" style={{ marginBottom: 4 }}>{teaser.date}</div>
                  {/* ===== END TEASER DATE ===== */}
                  
                  {/* ===== TEASER TITLE ===== */}
                  {/* The main title/headline for this teaser */}
                  <h2 className="nv-h--small" style={{ marginBottom: 8 }}>{teaser.title}</h2>
                  {/* ===== END TEASER TITLE ===== */}
                </div>
                {/* ===== END TEASER HEADER ===== */}
                
                {/* ===== TEASER BODY ===== */}
                {/* The descriptive text that explains what this teaser is about */}
                <div className="nv-teaser-body">
                  <p>{teaser.body}</p>
                </div>
                {/* ===== END TEASER BODY ===== */}
                
                {/* ===== TEASER FOOTER ===== */}
                {/* Contains the call-to-action button */}
                <div className="nv-teaser-footer">
                  <a className="nv-cta-secondary--small" href={teaser.cta.href}>
                    {teaser.cta.text}
                  </a>
                </div>
                {/* ===== END TEASER FOOTER ===== */}
                
              </div>
              {/* ===== END TEASER CONTENT ===== */}
              
            </div>
            /* ===== END INDIVIDUAL FEATURE TEASER CARD ===== */
          ))}
          {/* ===== END FEATURE TEASER CARDS LOOP ===== */}
          
        </div>
        {/* ===== END FEATURE TEASERS GRID ===== */}
        
      </div>
    </div>
    {/* ===== THREE FEATURE TEASERS SECTION ENDS ===== */}
  </>
);

export default ThreeFeatureTeaser; 