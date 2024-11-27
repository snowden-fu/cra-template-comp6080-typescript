import React from 'react';
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  background-color: #2c3e50;
  color: white;
  padding: 1rem;
  text-align: center;
`;

const Copyright = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Copyright>
        © {new Date().getFullYear()} COMP6080 React Template. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
