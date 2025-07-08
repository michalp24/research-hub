import React from 'react';
import styled from 'styled-components';
import BulletListSection from './BulletListSection';
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

const sectionCode = `<!-- ===== Bullet List Section: Nested bullet list with NVIDIA styling ===== -->
<!-- This section displays a hierarchical bullet list with multiple nesting levels -->
<div class="nv-section">
  <!-- Container to center and limit the width of the content -->
  <div class="nv-container">
    
    <!-- ===== SECTION TITLE ===== -->
    <!-- The main heading for this bullet list section -->
    <div class="nv-h--medium mb-3">Bullet List Example</div>
    <!-- ===== END SECTION TITLE ===== -->
    
    <!-- ===== SECTION DESCRIPTION ===== -->
    <!-- The descriptive text that explains what this section demonstrates -->
    <p class="nv-text-large mb-5">This section demonstrates a bullet list using NVIDIA's design system classes.</p>
    <!-- ===== END SECTION DESCRIPTION ===== -->
    
    <!-- ===== MAIN BULLET LIST ===== -->
    <!-- The primary unordered list with NVIDIA styling class -->
    <ul class="nv-list">
      
      <!-- ===== FIRST LEVEL ITEM 1 ===== -->
      <!-- A top-level bullet point -->
      <li>
        Eliminate tedious set up and testing with ready-to-run, optimized AI software.
      </li>
      <!-- ===== END FIRST LEVEL ITEM 1 ===== -->
      
      <!-- ===== FIRST LEVEL ITEM 2 (WITH NESTING) ===== -->
      <!-- A top-level item that contains a nested sublist -->
      <li>
        <!-- ===== NESTED SUBLIST LEVEL 1 ===== -->
        <!-- A second-level unordered list (nested inside the first level) -->
        <ul>
          
          <!-- ===== SECOND LEVEL ITEM 1 ===== -->
          <!-- A second-level bullet point -->
          <li>
            Eliminate tedious set up and testing with ready-to-run, optimized AI software.
          </li>
          <!-- ===== END SECOND LEVEL ITEM 1 ===== -->
          
          <!-- ===== SECOND LEVEL ITEM 2 ===== -->
          <!-- Another second-level bullet point -->
          <li>
            Create better models faster with unmatched performance that enables more iterations.
          </li>
          <!-- ===== END SECOND LEVEL ITEM 2 ===== -->
          
          <!-- ===== SECOND LEVEL ITEM 3 ===== -->
          <!-- Another second-level bullet point -->
          <li>
            Avoid time lost on systems integration and software engineering.
          </li>
          <!-- ===== END SECOND LEVEL ITEM 3 ===== -->
          
          <!-- ===== SECOND LEVEL ITEM 4 (WITH DEEPER NESTING) ===== -->
          <!-- A second-level item that contains another nested sublist -->
          <li>
            <!-- ===== NESTED SUBLIST LEVEL 2 ===== -->
            <!-- A third-level unordered list (nested inside the second level) -->
            <ul>
              
              <!-- ===== THIRD LEVEL ITEM 1 ===== -->
              <!-- A third-level bullet point -->
              <li>
                Eliminate tedious set up and testing with ready-to-run, optimized AI software.
              </li>
              <!-- ===== END THIRD LEVEL ITEM 1 ===== -->
              
              <!-- ===== THIRD LEVEL ITEM 2 ===== -->
              <!-- Another third-level bullet point -->
              <li>
                Create better models faster with unmatched performance that enables more iterations.
              </li>
              <!-- ===== END THIRD LEVEL ITEM 2 ===== -->
              
              <!-- ===== THIRD LEVEL ITEM 3 ===== -->
              <!-- Another third-level bullet point -->
              <li>
                Avoid time lost on systems integration and software engineering.
              </li>
              <!-- ===== END THIRD LEVEL ITEM 3 ===== -->
              
              <!-- ===== THIRD LEVEL ITEM 4 ===== -->
              <!-- Another third-level bullet point -->
              <li>
                Experience simplified infrastructure design and capacity planning with one system for all AI workloads.
              </li>
              <!-- ===== END THIRD LEVEL ITEM 4 ===== -->
              
              <!-- ===== THIRD LEVEL ITEM 5 (WITH PARAGRAPH) ===== -->
              <!-- A third-level item that contains a paragraph element -->
              <li>
                <!-- ===== PARAGRAPH ELEMENT ===== -->
                <!-- A paragraph element nested inside a list item for additional formatting -->
                <p>
                  Achieve the highest compute density and performance in the smallest footprint.
                </p>
                <!-- ===== END PARAGRAPH ELEMENT ===== -->
              </li>
              <!-- ===== END THIRD LEVEL ITEM 5 ===== -->
              
            </ul>
            <!-- ===== END NESTED SUBLIST LEVEL 2 ===== -->
          </li>
          <!-- ===== END SECOND LEVEL ITEM 4 ===== -->
          
          <!-- ===== SECOND LEVEL ITEM 5 ===== -->
          <!-- Another second-level bullet point -->
          <li>
            Achieve the highest compute density and performance in the smallest footprint.
          </li>
          <!-- ===== END SECOND LEVEL ITEM 5 ===== -->
          
        </ul>
        <!-- ===== END NESTED SUBLIST LEVEL 1 ===== -->
      </li>
      <!-- ===== END FIRST LEVEL ITEM 2 ===== -->
      
      <!-- ===== FIRST LEVEL ITEM 3 ===== -->
      <!-- Another top-level bullet point -->
      <li>
        Avoid time lost on systems integration and software engineering.
      </li>
      <!-- ===== END FIRST LEVEL ITEM 3 ===== -->
      
      <!-- ===== FIRST LEVEL ITEM 4 ===== -->
      <!-- Another top-level bullet point -->
      <li>
        Experience simplified infrastructure design and capacity planning with one system for all AI workloads.
      </li>
      <!-- ===== END FIRST LEVEL ITEM 4 ===== -->
      
      <!-- ===== FIRST LEVEL ITEM 5 ===== -->
      <!-- Another top-level bullet point -->
      <li>
        Achieve the highest compute density and performance in the smallest footprint.
      </li>
      <!-- ===== END FIRST LEVEL ITEM 5 ===== -->
      
    </ul>
    <!-- ===== END MAIN BULLET LIST ===== -->
    
  </div>
</div>
<!-- ===== End Bullet List Section ===== -->`;

const BulletListSectionShowcase = () => {
  return (
    <ShowcaseContainer>
      <ShowcaseTitle>Bullet List Section</ShowcaseTitle>
      <p>A section with a nested bullet list using NVIDIA's design system.</p>

      {/* ===== Bullet List Section: Nested bullet list with NVIDIA styling ===== */}
      <ExampleContainer>
        <BulletListSection />
      </ExampleContainer>
      {/* ===== End Bullet List Section ===== */}

      <CodeBlockWithExpand code={sectionCode} />
    </ShowcaseContainer>
  );
};

export default BulletListSectionShowcase; 