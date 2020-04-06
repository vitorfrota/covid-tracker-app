import React from 'react';

 import { Container } from './styles';

export default function Loading() {
  return (
    <Container>
        <div className="dot dot-1"></div>
        <div className="dot dot-2"></div>
        <div className="dot dot-3"></div>
        <div className="dot dot-4"></div>
    </Container>
  );
}
