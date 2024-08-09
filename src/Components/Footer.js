import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #333;
  padding: 20px;
  color: #fff;
  text-align: center;
  font-family: 'Poppins', sans-serif;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2023 Christian Movies. All rights reserved.</p>
  </FooterContainer>
);

export default Footer;
