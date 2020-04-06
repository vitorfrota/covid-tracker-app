import React from 'react';

import image from '../../assets/img/error_image.svg';
import { Container } from './styles';

export default function Error() {
  return (
    <Container>
        <img src={image} alt="error image" />
        <p>Não foi possível carregar os dados</p>
        <button onClick={()=> window.location.reload()}>Tentar novamente</button>
    </Container>
  );
}
