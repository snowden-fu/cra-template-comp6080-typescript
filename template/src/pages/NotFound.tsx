import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const NotFoundContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 3rem;
`;

const Description = styled.p`
  color: #34495e;
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const HomeLink = styled(Link)`
  color: #3498db;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border: 2px solid #3498db;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #3498db;
    color: white;
  }
`;

const NotFound: React.FC = () => {
  return (
    <NotFoundContainer>
      <Title>404</Title>
      <Description>
        Oops! The page you're looking for doesn't exist.
      </Description>
      <HomeLink to="/">Return to Home</HomeLink>
    </NotFoundContainer>
  );
};

export default NotFound;
