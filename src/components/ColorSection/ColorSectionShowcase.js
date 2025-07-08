import React from 'react';
import ColorSection from './ColorSection';
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



const ColorSectionShowcase = () => {
  return (
    <ShowcaseContainer>
      <ShowcaseTitle>Color Section</ShowcaseTitle>
      <p>A section component demonstrating the use of the <code>.surface-alt-2</code> class to change section background colors.</p>
      {/* ===== Color Section: Demonstrating .surface-alt-2 class ===== */}
      <ExampleContainer>
        <ColorSection />
      </ExampleContainer>
      {/* ===== End Color Section ===== */}
    </ShowcaseContainer>
  );
};

export default ColorSectionShowcase; 