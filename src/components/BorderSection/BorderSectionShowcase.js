import React from 'react';
import styled from 'styled-components';

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

const sectionCode = `<!-- ===== Separator Section: 1px #CCCCCC horizontal line ===== -->
<!-- This section creates a simple horizontal separator line to divide content -->
<div class="nv-section">
  <!-- Container to center and limit the width of the content -->
  <div class="nv-container">
    
    <!-- ===== SEPARATOR LINE ===== -->
    <!-- A thin horizontal line that acts as a visual divider -->
    <!-- Height: 1px creates a thin line -->
    <!-- Background: #CCCCCC sets the color to a light gray -->
    <!-- Width: 100% makes the line span the full width of the container -->
    <div style="height: 1px; background: #CCCCCC; width: 100%;"></div>
    <!-- ===== END SEPARATOR LINE ===== -->
    
  </div>
</div>
<!-- ===== End Separator Section ===== -->`;

const BorderSectionShowcase = () => {
  return (
    <ShowcaseContainer>
      {/* ===== Separator Section: 1px #CCCCCC horizontal line ===== */}
      <ShowcaseTitle>Border Section</ShowcaseTitle>
      <p>A section for displaying a 1px #CCCCCC separator, with a copyable code example.</p>

      <ExampleContainer>
        <div className="nv-section">
          <div className="nv-container">
            <div style={{ height: '1px', background: '#CCCCCC', width: '100%' }} />
          </div>
        </div>
      </ExampleContainer>
      {/* ===== End Separator Section ===== */}
      <CodeBlockWithExpand code={sectionCode} />
    </ShowcaseContainer>
  );
};

export default BorderSectionShowcase; 