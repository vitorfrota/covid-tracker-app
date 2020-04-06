import React from 'react';

import Chart from '../Chart';
import { Container } from './styles';

export default function Card({ data, showChart=false }) {
    const { title, amount, color="#ddd", percent=0 } = data;

  return (
    <Container color={color}>
      <div>
        <h2>{title}</h2>
        <p>{amount}</p>
        <span>Total de casos de<strong> {title}</strong></span>
      </div>
      <div>
        {showChart ? (
          <Chart amount={percent} color={color}/>
        ) : null
        }
      </div>
    </Container>
  );
}
