import React from 'react';

// ===== TEAM MEMBERS DATA =====
// This array contains all the team member information
// You can add, remove, or modify team members by editing this array
const teamMembers = [
  { name: 'Marco Pavone', title: 'Speaker Title' },
  { name: 'Yulong Cao', title: 'Speaker Title' },
  { name: 'Gerry Che', title: 'Speaker Title' },
  { name: 'Yuxiao Chen', title: 'Speaker Title' },
  { name: 'Kashyap Chitta', title: 'Speaker Title' },
  { name: 'Wenhao Ding', title: 'Speaker Title' },
  { name: 'Marco Pavone', title: 'Speaker Title' },
  { name: 'Yulong Cao', title: 'Speaker Title' },
  { name: 'Gerry Che', title: 'Speaker Title' },
  { name: 'Yuxiao Chen', title: 'Speaker Title' },
];
// ===== END TEAM MEMBERS DATA =====

// ===== PLACEHOLDER IMAGE =====
// This is a placeholder image URL. Replace with actual team member photos
const placeholderImg = 'https://place-hold.it/300x400/666';
// ===== END PLACEHOLDER IMAGE =====

const MeetTheTeam = () => (
  <>
    {/* ===== MEET THE TEAM SECTION STARTS ===== */}
    {/* This section displays team member cards in a grid layout */}
    <div className="nv-section">
      {/* Container to center and limit the width of the content */}
      <div className="nv-container">
        
        {/* ===== SECTION TITLE ===== */}
        {/* The main heading for the "Meet the Team" section */}
        <h2 className="nv-h--medium" style={{ marginBottom: '2rem' }}>Meet the Team</h2>
        {/* ===== END SECTION TITLE ===== */}
        
        {/* ===== TEAM MEMBERS GRID ===== */}
        {/* This creates a responsive grid layout for all team member cards */}
        <div className="nv-meet-team-grid">
          {/* ===== TEAM MEMBER CARDS LOOP ===== */}
          {/* This loop creates a card for each team member in the teamMembers array */}
          {teamMembers.map((member, idx) => (
            /* ===== INDIVIDUAL TEAM MEMBER CARD ===== */
            /* Each card contains: photo, name, and title */
            <div className="nv-meet-team-member" key={idx}>
              
              {/* ===== TEAM MEMBER PHOTO ===== */}
              {/* The image container for the team member's photo */}
              <div className="nv-meet-team-img-wrapper">
                <img src={placeholderImg} alt={member.name} className="nv-meet-team-img" />
              </div>
              {/* ===== END TEAM MEMBER PHOTO ===== */}
              
              {/* ===== TEAM MEMBER NAME ===== */}
              {/* The team member's name */}
              <div className="nv-meet-team-name">{member.name}</div>
              {/* ===== END TEAM MEMBER NAME ===== */}
              
              {/* ===== TEAM MEMBER TITLE ===== */}
              {/* The team member's job title or role */}
              <div className="nv-meet-team-title">{member.title}</div>
              {/* ===== END TEAM MEMBER TITLE ===== */}
              
            </div>
            /* ===== END INDIVIDUAL TEAM MEMBER CARD ===== */
          ))}
          {/* ===== END TEAM MEMBER CARDS LOOP ===== */}
          
        </div>
        {/* ===== END TEAM MEMBERS GRID ===== */}
        
      </div>
    </div>
    {/* ===== MEET THE TEAM SECTION ENDS ===== */}
  </>
);

export default MeetTheTeam; 