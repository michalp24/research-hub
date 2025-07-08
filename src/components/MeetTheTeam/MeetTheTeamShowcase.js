import React from 'react';
import MeetTheTeam from './MeetTheTeam';
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

const meetTheTeamCode = `<!-- ===== Meet the Team Section: Responsive team grid ===== -->
<!-- This section displays team member cards in a grid layout -->
<div class="nv-section">
  <!-- Container to center and limit the width of the content -->
  <div class="nv-container">
    
    <!-- ===== SECTION TITLE ===== -->
    <!-- The main heading for the "Meet the Team" section -->
    <h2 class="nv-h--medium" style="margin-bottom: 2rem;">Meet the Team</h2>
    <!-- ===== END SECTION TITLE ===== -->
    
    <!-- ===== TEAM MEMBERS GRID ===== -->
    <!-- This creates a responsive grid layout for all team member cards -->
    <div class="nv-meet-team-grid">
      
      <!-- ===== TEAM MEMBER CARD 1 ===== -->
      <!-- Each card contains: photo, name, and title -->
      <div class="nv-meet-team-member">
        <!-- ===== TEAM MEMBER PHOTO ===== -->
        <!-- The image container for the team member's photo -->
        <div class="nv-meet-team-img-wrapper">
          <img src="https://place-hold.it/300x400/666" alt="Marco Pavone" class="nv-meet-team-img" />
        </div>
        <!-- ===== END TEAM MEMBER PHOTO ===== -->
        
        <!-- ===== TEAM MEMBER NAME ===== -->
        <!-- The team member's name -->
        <div class="nv-meet-team-name">Marco Pavone</div>
        <!-- ===== END TEAM MEMBER NAME ===== -->
        
        <!-- ===== TEAM MEMBER TITLE ===== -->
        <!-- The team member's job title or role -->
        <div class="nv-meet-team-title">Speaker Title</div>
        <!-- ===== END TEAM MEMBER TITLE ===== -->
      </div>
      <!-- ===== END TEAM MEMBER CARD 1 ===== -->
      
      <!-- ===== TEAM MEMBER CARD 2 ===== -->
      <div class="nv-meet-team-member">
        <div class="nv-meet-team-img-wrapper">
          <img src="https://place-hold.it/300x400/666" alt="Yulong Cao" class="nv-meet-team-img" />
        </div>
        <div class="nv-meet-team-name">Yulong Cao</div>
        <div class="nv-meet-team-title">Speaker Title</div>
      </div>
      <!-- ===== END TEAM MEMBER CARD 2 ===== -->
      
      <!-- ===== TEAM MEMBER CARD 3 ===== -->
      <div class="nv-meet-team-member">
        <div class="nv-meet-team-img-wrapper">
          <img src="https://place-hold.it/300x400/666" alt="Gerry Che" class="nv-meet-team-img" />
        </div>
        <div class="nv-meet-team-name">Gerry Che</div>
        <div class="nv-meet-team-title">Speaker Title</div>
      </div>
      <!-- ===== END TEAM MEMBER CARD 3 ===== -->
      
      <!-- ===== TEAM MEMBER CARD 4 ===== -->
      <div class="nv-meet-team-member">
        <div class="nv-meet-team-img-wrapper">
          <img src="https://place-hold.it/300x400/666" alt="Yuxiao Chen" class="nv-meet-team-img" />
        </div>
        <div class="nv-meet-team-name">Yuxiao Chen</div>
        <div class="nv-meet-team-title">Speaker Title</div>
      </div>
      <!-- ===== END TEAM MEMBER CARD 4 ===== -->
      
      <!-- ===== TEAM MEMBER CARD 5 ===== -->
      <div class="nv-meet-team-member">
        <div class="nv-meet-team-img-wrapper">
          <img src="https://place-hold.it/300x400/666" alt="Kashyap Chitta" class="nv-meet-team-img" />
        </div>
        <div class="nv-meet-team-name">Kashyap Chitta</div>
        <div class="nv-meet-team-title">Speaker Title</div>
      </div>
      <!-- ===== END TEAM MEMBER CARD 5 ===== -->
      
      <!-- ===== TEAM MEMBER CARD 6 ===== -->
      <div class="nv-meet-team-member">
        <div class="nv-meet-team-img-wrapper">
          <img src="https://place-hold.it/300x400/666" alt="Wenhao Ding" class="nv-meet-team-img" />
        </div>
        <div class="nv-meet-team-name">Wenhao Ding</div>
        <div class="nv-meet-team-title">Speaker Title</div>
      </div>
      <!-- ===== END TEAM MEMBER CARD 6 ===== -->
      
      <!-- ===== TEAM MEMBER CARD 7 ===== -->
      <div class="nv-meet-team-member">
        <div class="nv-meet-team-img-wrapper">
          <img src="https://place-hold.it/300x400/666" alt="Marco Pavone" class="nv-meet-team-img" />
        </div>
        <div class="nv-meet-team-name">Marco Pavone</div>
        <div class="nv-meet-team-title">Speaker Title</div>
      </div>
      <!-- ===== END TEAM MEMBER CARD 7 ===== -->
      
      <!-- ===== TEAM MEMBER CARD 8 ===== -->
      <div class="nv-meet-team-member">
        <div class="nv-meet-team-img-wrapper">
          <img src="https://place-hold.it/300x400/666" alt="Yulong Cao" class="nv-meet-team-img" />
        </div>
        <div class="nv-meet-team-name">Yulong Cao</div>
        <div class="nv-meet-team-title">Speaker Title</div>
      </div>
      <!-- ===== END TEAM MEMBER CARD 8 ===== -->
      
      <!-- ===== TEAM MEMBER CARD 9 ===== -->
      <div class="nv-meet-team-member">
        <div class="nv-meet-team-img-wrapper">
          <img src="https://place-hold.it/300x400/666" alt="Gerry Che" class="nv-meet-team-img" />
        </div>
        <div class="nv-meet-team-name">Gerry Che</div>
        <div class="nv-meet-team-title">Speaker Title</div>
      </div>
      <!-- ===== END TEAM MEMBER CARD 9 ===== -->
      
      <!-- ===== TEAM MEMBER CARD 10 ===== -->
      <div class="nv-meet-team-member">
        <div class="nv-meet-team-img-wrapper">
          <img src="https://place-hold.it/300x400/666" alt="Yuxiao Chen" class="nv-meet-team-img" />
        </div>
        <div class="nv-meet-team-name">Yuxiao Chen</div>
        <div class="nv-meet-team-title">Speaker Title</div>
      </div>
      <!-- ===== END TEAM MEMBER CARD 10 ===== -->
      
    </div>
    <!-- ===== END TEAM MEMBERS GRID ===== -->
    
  </div>
</div>
<!-- ===== End Meet the Team Section ===== -->`;

const MeetTheTeamShowcase = () => {
  return (
    <ShowcaseContainer>
      <ShowcaseTitle>Meet the Team</ShowcaseTitle>
      <p>A responsive grid layout for displaying team member cards.</p>
      {/* ===== Meet the Team Section: Responsive team grid ===== */}
      <ExampleContainer>
        <MeetTheTeam />
      </ExampleContainer>
      {/* ===== End Meet the Team Section ===== */}
      <CodeBlockWithExpand code={meetTheTeamCode} />
    </ShowcaseContainer>
  );
};

export default MeetTheTeamShowcase; 