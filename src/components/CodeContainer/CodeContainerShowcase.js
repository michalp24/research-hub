import React from 'react';
import styled from 'styled-components';
import CodeContainer from './CodeContainer';
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

const CodeContainerShowcase = () => {
  const exampleCode = `// Example code for scene generation\nfunction generateScene(description) {\n  // Initialize scene\n  const scene = new Scene();\n\n  // Process text description\n  const objects = processDescription(description);\n\n  // Add objects to scene\n  objects.forEach(obj => {\n    scene.add(obj);\n  });\n\n  return scene;\n}`;

  const sectionCode = `<!-- ===== Code Container Section: Example code block with NVIDIA styling ===== -->
<!-- This section displays a code example with proper syntax highlighting and styling -->
<div class="nv-section">
  <!-- Container to center and limit the width of the content -->
  <div class="nv-container">
    
    <!-- ===== SECTION TITLE ===== -->
    <!-- The main heading for this code example section -->
    <div class="nv-h--medium mb-3">
      Code Example
    </div>
    <!-- ===== END SECTION TITLE ===== -->
    
    <!-- ===== SECTION DESCRIPTION ===== -->
    <!-- The descriptive text that explains what this code example shows -->
    <p class="nv-text-large mb-5">
      Here's an example of how to use our scene generation function.
    </p>
    <!-- ===== END SECTION DESCRIPTION ===== -->
    
    <!-- ===== CODE CONTAINER ===== -->
    <!-- The wrapper for the code block with NVIDIA styling -->
    <div class="nv-code-container">
      
      <!-- ===== CODE BLOCK ===== -->
      <!-- The pre element that contains the formatted code -->
      <pre class="nv-code-block">
        <!-- ===== CODE ELEMENT ===== -->
        <!-- The code element with the actual code content -->
        <code>// Example code for scene generation\nfunction generateScene(description) {\n  // Initialize scene\n  const scene = new Scene();\n\n  // Process text description\n  const objects = processDescription(description);\n\n  // Add objects to scene\n  objects.forEach(obj => {\n    scene.add(obj);\n  });\n\n  return scene;\n}</code>
        <!-- ===== END CODE ELEMENT ===== -->
      </pre>
      <!-- ===== END CODE BLOCK ===== -->
      
    </div>
    <!-- ===== END CODE CONTAINER ===== -->
    
  </div>
</div>
<!-- ===== End Code Container Section ===== -->`;

  return (
    <ShowcaseContainer>
      <ShowcaseTitle>Code Container</ShowcaseTitle>
      <p>A component for displaying code examples with NVIDIA styling.</p>

      {/* ===== Code Container Section: Example code block with NVIDIA styling ===== */}
      <ExampleContainer>
        <CodeContainer
          title="Code Example"
          description="Here's an example of how to use our scene generation function."
          code={exampleCode}
          language="javascript"
        />
      </ExampleContainer>
      {/* ===== End Code Container Section ===== */}

      <CodeBlockWithExpand code={sectionCode} />
    </ShowcaseContainer>
  );
};

export default CodeContainerShowcase; 