import React from 'react';
import styled from '@emotion/styled';

const HomeContainer = styled.div`
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
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Title>Welcome to COMP6080 React Template</Title>
      <Description>
        This is a React TypeScript template customized for COMP6080 course.
        It comes with common configurations and tools to help you get started quickly.
      </Description>
    </HomeContainer>
  );
};

export default Home;

