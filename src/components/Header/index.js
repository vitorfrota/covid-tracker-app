import React from 'react';


import logo from '../../assets/img/logo.svg';
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <div className="content">
        <img src={logo} alt="logo" />
        <h1>Covid Tracker</h1>
      </div>
    </Container>
  );
}
