import React, { useState } from 'react';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import './styles/spacing.css';
import './styles/colors.css';
import SectionShowcase from './components/Section/SectionShowcase';
import MediaSectionShowcase from './components/MediaSection/MediaSectionShowcase';
import SingleMediaSectionShowcase from './components/SingleMediaSection/SingleMediaSectionShowcase';
import TripleMediaSectionShowcase from './components/TripleMediaSection/TripleMediaSectionShowcase';
import CodeContainerShowcase from './components/CodeContainer/CodeContainerShowcase';
import BorderSectionShowcase from './components/BorderSection/BorderSectionShowcase';
import BulletListSectionShowcase from './components/BulletListSection/BulletListSectionShowcase';
import TableSectionShowcase from './components/TableSection/TableSectionShowcase';
import HeaderBannerShowcase from './components/HeaderBanner/HeaderBannerShowcase';
import MeetTheTeamShowcase from './components/MeetTheTeam/MeetTheTeamShowcase';
import TwoFeatureTeaserShowcase from './components/FeatureTeasers/TwoFeatureTeaserShowcase';
import ThreeMediaTeaserShowcase from './components/MediaTeaser/ThreeMediaTeaserShowcase';
import FourMediaTeaserShowcase from './components/MediaTeaser/FourMediaTeaserShowcase';
import FeatureTeasersShowcase from './components/FeatureTeasers/FeatureTeasersShowcase';
import ColorSectionShowcase from './components/ColorSection/ColorSectionShowcase';
import BeforeAfterSliderShowcase from './components/BeforeAfterSlider/BeforeAfterSliderShowcase';

const showcases = [
  { id: 'header-banner', title: 'Header Banner', component: HeaderBannerShowcase },
  { id: 'intro-section', title: 'Intro Section', component: SectionShowcase },
  { id: 'meet-the-team', title: 'Meet the Team', component: MeetTheTeamShowcase },
  { id: 'bullet-list-section', title: 'Bullet List Section', component: BulletListSectionShowcase },
  { id: 'table-section', title: 'Table Section', component: TableSectionShowcase },
  { id: 'code-container', title: 'Code Container', component: CodeContainerShowcase },
  { id: 'two-feature-teaser', title: '2 Feature Teaser', component: TwoFeatureTeaserShowcase },
  { id: 'three-feature-teaser', title: '3 Feature Teaser', component: FeatureTeasersShowcase },
  { id: 'three-media-teaser', title: '3 Media Teaser', component: ThreeMediaTeaserShowcase },
  { id: 'four-media-teaser', title: '4 Media Teaser', component: FourMediaTeaserShowcase },
  { id: 'single-media-section', title: '1 Image Section', component: SingleMediaSectionShowcase },
  { id: 'media-section', title: '2 Image Section', component: MediaSectionShowcase },
  { id: 'triple-media-section', title: '3 Image Section', component: TripleMediaSectionShowcase },
  { id: 'before-after-slider', title: 'Before/After Image Slider', component: BeforeAfterSliderShowcase },
  { id: 'border-section', title: 'Border Section', component: BorderSectionShowcase },
  { id: 'color-section', title: 'Color Section', component: ColorSectionShowcase },
];

const AppLayout = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1500px;
  margin: 0 auto;
`;

const AppContainer = styled.div`
  flex: 1 1 0%;
  padding: 2rem 30px;
  max-width: 1100px;
`;

const Header = styled.header`
  margin-bottom: 3rem;
`;

const RightNav = styled.nav`
  width: 260px;
  margin-left: 2rem;
  position: sticky;
  top: 2rem;
  align-self: flex-start;
  max-height: calc(100vh - 4rem);
  overflow-y: auto;
  padding-right: 8px;
  
  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
`;

const NavTitle = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin-bottom: 0.75rem;
`;

const NavLink = styled.a`
  color: #636363;
  text-decoration: none;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

const navGroups = [
  {
    title: 'Header',
    items: [
      { id: 'header-banner', title: 'Header Banner' },
      { id: 'intro-section', title: 'Intro Section' },
      { id: 'meet-the-team', title: 'Meet the Team' },
    ],
  },
  {
    title: 'Text Section',
    items: [
      { id: 'bullet-list-section', title: 'Bullet List Section' },
      { id: 'table-section', title: 'Table Section' },
      { id: 'code-container', title: 'Code Container' },
    ],
  },
  {
    title: 'Teaser Section',
    items: [
      { id: 'two-feature-teaser', title: '2 Feature Teaser' },
      { id: 'three-feature-teaser', title: '3 Feature Teaser' },
      { id: 'three-media-teaser', title: '3 Media Teaser' },
      { id: 'four-media-teaser', title: '4 Media Teaser' },
      { id: 'single-media-section', title: '1 Image Section' },
      { id: 'media-section', title: '2 Image Section' },
      { id: 'triple-media-section', title: '3 Image Section' },
    ],
  },
  {
    title: 'Miscellaneous',
    items: [
      { id: 'before-after-slider', title: 'Before/After Image Slider' },
      { id: 'border-section', title: 'Border Section' },
      { id: 'color-section', title: 'Color Section' },
    ],
  },
  {
    title: 'Templates',
    items: [
      { id: 'getting-started', title: 'Getting Started', href: '/getting-started.html' },
      { id: 'project-template', title: 'Project Template', href: '/project-template.html' },
      { id: 'lab-template', title: 'Lab Template', href: '/lab-template.html' },
      { id: 'project-list', title: 'Project List', href: '/project-list.html' },
    ],
  },
];

function App() {
  const [openGroups, setOpenGroups] = useState([true, true, true, true, true]);

  const toggleGroup = idx => {
    setOpenGroups(openGroups =>
      openGroups.map((open, i) => (i === idx ? !open : open))
    );
  };

  return (
    <AppLayout>
      <AppContainer>
        <Header>
          <h1>NVIDIA Component Hub</h1>
          <p className="nv-text-large">A collection of reusable components and sections for NVIDIA websites.</p>
        </Header>
        {showcases.map(({ id, component: ShowcaseComponent }) => (
          <section id={id} key={id} style={{ scrollMarginTop: '2rem' }}>
            <ShowcaseComponent />
          </section>
        ))}
      </AppContainer>
      <RightNav>
        <NavTitle>On this page</NavTitle>
        <NavList>
          {navGroups.map((group, idx) => (
            <li
              key={group.title}
              style={{
                marginBottom: '1rem',
                borderBottom: idx !== navGroups.length - 1 ? '1px solid #cccccc' : 'none',
              }}
            >
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  fontWeight: 'bold',
                  fontSize: '1.05rem',
                  cursor: 'pointer',
                  padding: 0,
                  marginBottom: '1rem',
                  color: '#222',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
                onClick={() => toggleGroup(idx)}
                aria-expanded={openGroups[idx]}
                aria-controls={`nav-group-${idx}`}
              >
                {group.title}
                <span style={{ fontSize: '0.95em', marginLeft: 8 }}>
                  {openGroups[idx] ? (
                    <span style={{
                      display: 'inline-block',
                      width: '8px',
                      height: '8px',
                      borderRight: '2px solid #666',
                      borderBottom: '2px solid #666',
                      transform: 'rotate(45deg)',
                      transition: 'transform 0.2s'
                    }}></span>
                  ) : (
                    <span style={{
                      display: 'inline-block',
                      width: '8px',
                      height: '8px',
                      borderRight: '2px solid #666',
                      borderBottom: '2px solid #666',
                      transform: 'rotate(-45deg)',
                      transition: 'transform 0.2s'
                    }}></span>
                  )}
                </span>
              </button>
              {openGroups[idx] && (
                <ul id={`nav-group-${idx}`} style={{ listStyle: 'none', paddingLeft: 0, marginTop: 8 }}>
                  {group.items.map(item => (
                    <NavItem key={item.id}>
                      {group.title === 'Templates' ? (
                        <NavLink
                          href={item.href || `#${item.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.title}
                        </NavLink>
                      ) : (
                        <NavLink href={item.href || `#${item.id}`}>{item.title}</NavLink>
                      )}
                    </NavItem>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </NavList>
      </RightNav>
    </AppLayout>
  );
}

export default App; 