import React from 'react';
import styled from '@emotion/styled';

const AboutContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #34495e;
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
  max-width: 600px;
  margin: 0 auto;
`;

const FeatureItem = styled.li`
  margin: 1rem 0;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <Title>About This Template</Title>
      <Description>
        This template is specially designed for COMP6080 students at UNSW,
        providing a solid foundation for React TypeScript projects.
      </Description>
      <FeatureList>
        <FeatureItem>✨ TypeScript Support</FeatureItem>
        <FeatureItem>🎨 Emotion Styled Components</FeatureItem>
        <FeatureItem>🚦 React Router Integration</FeatureItem>
        <FeatureItem>🔧 ESLint & Prettier Configuration</FeatureItem>
        <FeatureItem>🧪 Testing Setup with Jest</FeatureItem>
      </FeatureList>
    </AboutContainer>
  );
};

export default About;
