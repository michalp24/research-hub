import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import CodeBlockWithExpand from '../Shared/CodeBlockWithExpand';

const ShowcaseContainer = styled.div`
  margin-bottom: 2rem;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 1rem;
`;

const CardShowcase = () => {
  const cardCode = `<!-- ===== Card Component: NVIDIA-styled card with image and content ===== -->
<!-- This is a reusable card component that displays content in a structured format -->
<Card 
  <!-- ===== PRETITLE ===== -->
  <!-- A small label or category that appears above the main title -->
  pretitle="Gaming"
  <!-- ===== END PRETITLE ===== -->
  
  <!-- ===== TITLE ===== -->
  <!-- The main heading for the card content -->
  title="NVIDIA RTX 4090"
  <!-- ===== END TITLE ===== -->
  
  <!-- ===== DESCRIPTION ===== -->
  <!-- The descriptive text that explains what this card is about -->
  description="Experience the ultimate in gaming performance with the NVIDIA GeForce RTX 4090. The most powerful GPU ever created for gamers and creators."
  <!-- ===== END DESCRIPTION ===== -->
  
  <!-- ===== IMAGE URL ===== -->
  <!-- The URL for the featured image that appears in the card -->
  imageUrl="https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/01-nvidia-logo-vert-500x200-2c50-d@2x.png"
  <!-- ===== END IMAGE URL ===== -->
  
  <!-- ===== CALL-TO-ACTION LINKS ===== -->
  <!-- An array of buttons/links for different actions -->
  ctaLinks={[
    <!-- ===== FIRST CTA LINK ===== -->
    <!-- The primary call-to-action button -->
    { text: "Learn More", href: "#" },
    <!-- ===== END FIRST CTA LINK ===== -->
    
    <!-- ===== SECOND CTA LINK ===== -->
    <!-- A secondary call-to-action button -->
    { text: "Buy Now", href: "#" }
    <!-- ===== END SECOND CTA LINK ===== -->
  ]}
  <!-- ===== END CALL-TO-ACTION LINKS ===== -->
/>`;

  return (
    <ShowcaseContainer>
      <h2>Card Component</h2>
      <p>A versatile card component following NVIDIA's design system.</p>
      
      <CardContainer>
        <Card 
          pretitle="Gaming"
          title="NVIDIA RTX 4090"
          description="Experience the ultimate in gaming performance with the NVIDIA GeForce RTX 4090. The most powerful GPU ever created for gamers and creators."
          imageUrl="https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/01-nvidia-logo-vert-500x200-2c50-d@2x.png"
          ctaLinks={[
            { text: "Learn More", href: "#" },
            { text: "Buy Now", href: "#" }
          ]}
        />
        <Card 
          pretitle="Technology"
          title="NVIDIA DLSS"
          description="Deep Learning Super Sampling (DLSS) is NVIDIA's revolutionary AI rendering technology that boosts frame rates while maintaining visual quality."
          imageUrl="https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/01-nvidia-logo-vert-500x200-2c50-d@2x.png"
          ctaLinks={[
            { text: "Learn More", href: "#" },
            { text: "Watch Demo", href: "#" }
          ]}
        />
      </CardContainer>

      <CodeBlockWithExpand code={cardCode} language="jsx" />
    </ShowcaseContainer>
  );
};

export default CardShowcase; 