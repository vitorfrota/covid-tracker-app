import React from 'react';

import { Container } from './styles';

export default function MainCard({ data }) {
    const { title, updateDate, amount, flag } = data;

  return (
    <Container>
      <div>  
        <h2>{title}</h2>
        <p>{amount}</p>
        <span>Última atualização:<strong>{updateDate}</strong></span>
      </div>
      <img src={`https://www.countryflags.io/${flag}/flat/64.png`} />
    </Container>
  );
}
