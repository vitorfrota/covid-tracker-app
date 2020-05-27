import React from 'react';

import Chart from './Chart';
import { Container } from './styles';

export default function Card({ data }) {
    const { title, amount, percent=0 } = data;

  return (
    <Container>
      <div>
        <h2>{title}</h2>
        <p>{amount}</p>
        <span>Total de casos de<strong> {title}</strong></span>
      </div>
      <div>
        <Chart amount={percent} />  
      </div>
    </Container>
  );
}
