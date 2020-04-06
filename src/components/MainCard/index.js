import React from 'react';

import { Container } from './styles';

export default function MainCard({ data }) {
    const { title, updateDate, amount, flag, color="#ddd" } = data;

  return (
    <Container color={color}>
      <div>
        <h2>{title}</h2>
        <p>{amount}</p>
        <span>Última atualização:<strong> {updateDate}</strong></span>
      </div>
      <div>
        <img src={`https://www.countryflags.io/${flag}/flat/48.png`} />
      </div>
    </Container>
  );
}
