import React from 'react';

import { Container } from './styles';

export default function MainCard({ data, flag }) {
    const { title, amount, color="#ddd" } = data;

  return (
    <Container color={color}>
      <div>
        <h2>{title}</h2>
        <p>{amount}</p>
        <span>Total de casos de<strong> {title}</strong></span>
      </div>
      <div>
        <img src={`https://www.countryflags.io/${flag}/flat/64.png`} />
      </div>
    </Container>
  );
}
