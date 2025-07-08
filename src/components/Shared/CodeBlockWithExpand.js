import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components';

const CodeBlockContainer = styled.div`
  position: relative;
  margin-top: 1rem;
  background-color: var(--color-gray-50);
  border-radius: 4px;
  overflow: hidden;
  max-height: ${props => props.expanded ? 'none' : '300px'};
  transition: max-height 0.3s ease;

  pre {
    margin: 0 !important;
  }
`;

const CopyButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: var(--color-brand, #76b900);
  color: var(--color-gray-0, #fff);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  z-index: 2;
  &:hover {
    background-color: var(--color-brand-hover, #5a8f00);
  }
`;

const ExpandButton = styled.button`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: var(--color-gray-600, #666);
  color: var(--color-gray-0, #fff);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  z-index: 2;
  &:hover {
    background-color: var(--color-gray-700, #555);
  }
`;

const CodeBlockWithExpand = ({ code, language = 'html' }) => {
  const [expanded, setExpanded] = useState(false);
  
  const handleCopyCode = () => {
    navigator.clipboard.writeText(code.replace(/\\n/g, '\n'));
  };

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <CodeBlockContainer expanded={expanded}>
      <CopyButton onClick={handleCopyCode}>Copy Code</CopyButton>
      <ExpandButton onClick={handleToggleExpand}>
        {expanded ? 'Show Less' : 'Show All'}
      </ExpandButton>
      <SyntaxHighlighter language={language} style={tomorrow}>
        {code.replace(/\\n/g, '\n')}
      </SyntaxHighlighter>
    </CodeBlockContainer>
  );
};

export default CodeBlockWithExpand; 