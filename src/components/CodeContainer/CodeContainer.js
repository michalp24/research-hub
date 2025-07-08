import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components';

// ===== STYLED COMPONENTS =====
// These are custom styled components that define the appearance of the code container

// ===== CODE WRAPPER =====
// This styled div wraps the entire code display area
const CodeWrapper = styled.div`
  position: relative;
`;
// ===== END CODE WRAPPER =====

// ===== COPY BUTTON =====
// This styled button allows users to copy the code to their clipboard
const CopyButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.5rem 1rem;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 0.875rem;
  color: #666;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 1;

  &:hover {
    background: #f0f0f0;
    color: #333;
  }

  &.copied {
    background: #76b900;
    color: #fff;
    border-color: #76b900;
  }
`;
// ===== END COPY BUTTON =====
// ===== END STYLED COMPONENTS =====

const CodeContainer = ({ title, description, code, language = 'javascript' }) => {
  // ===== STATE MANAGEMENT =====
  // This tracks whether the code has been copied to show feedback to the user
  const [copied, setCopied] = useState(false);
  // ===== END STATE MANAGEMENT =====

  // ===== COPY FUNCTION =====
  // This function handles copying the code to the user's clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  // ===== END COPY FUNCTION =====

  return (
    <>
      {/* ===== CODE CONTAINER SECTION STARTS ===== */}
      {/* This section displays code with syntax highlighting and a copy button */}
      <div className="nv-section">
        {/* Container to center and limit the width of the content */}
        <div className="nv-container">
          
          {/* ===== SECTION TITLE ===== */}
          {/* The main heading for the code example */}
          <div className="nv-h--medium mb-3">
            {title}
          </div>
          {/* ===== END SECTION TITLE ===== */}
          
          {/* ===== SECTION DESCRIPTION ===== */}
          {/* The descriptive text that explains what this code example demonstrates */}
          <p className="nv-text-large mb-5">
            {description}
          </p>
          {/* ===== END SECTION DESCRIPTION ===== */}
          
          {/* ===== CODE DISPLAY AREA ===== */}
          {/* This is the main container for displaying the code */}
          <div className="nv-code-container">
            
            {/* ===== CODE WRAPPER ===== */}
            {/* This styled wrapper contains the copy button and syntax highlighter */}
            <CodeWrapper>
              
              {/* ===== COPY BUTTON ===== */}
              {/* This button allows users to copy the code to their clipboard */}
              <CopyButton 
                className={copied ? 'copied' : ''}
                onClick={handleCopy}
              >
                {copied ? 'Copied!' : 'Copy Code'}
              </CopyButton>
              {/* ===== END COPY BUTTON ===== */}
              
              {/* ===== SYNTAX HIGHLIGHTER ===== */}
              {/* This component displays the code with syntax highlighting */}
              <SyntaxHighlighter 
                language={language}
                style={tomorrow}
                customStyle={{
                  background: '#f5f5f5',
                  margin: 0,
                  padding: '1.5rem',
                  borderRadius: '4px',
                  color: '#333'
                }}
                codeTagProps={{
                  style: {
                    color: '#333'
                  }
                }}
              >
                {code}
              </SyntaxHighlighter>
              {/* ===== END SYNTAX HIGHLIGHTER ===== */}
              
            </CodeWrapper>
            {/* ===== END CODE WRAPPER ===== */}
            
          </div>
          {/* ===== END CODE DISPLAY AREA ===== */}
          
        </div>
      </div>
      {/* ===== CODE CONTAINER SECTION ENDS ===== */}
    </>
  );
};

export default CodeContainer; 