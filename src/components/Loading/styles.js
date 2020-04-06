import styled, { keyframes } from 'styled-components';


export const Loading = keyframes`
  0%{
    transform: translateY(0);
  }
  50%{
    transform: translateY(-10px);
  }
  100%{
    transform: translateY(0);
  } 
`;

export const Container = styled.div`
    width: 100%;
    height: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 5px 15px;
    margin: 0 5px;

    .dot{
        border-radius: 50%;
        padding: 10px;
        background: #fff;
        margin: 0 5px;
    }

    .dot-1{
        animation: ${Loading} 1.5s cubic-bezier(0.075, 0.62, 0.165, 2) infinite;      
    }
    .dot-2{
        animation: ${Loading} 1.6s cubic-bezier(0.050, 0.32, 0.165, 4) infinite;
        background: #00b8da;   
    }
    .dot-3{
        animation: ${Loading} 1.7s cubic-bezier(0.075, 0.62, 0.165, 3) infinite;
        background: #37b37f;
    }
    .dot-4{
        animation: ${Loading} 1.8s cubic-bezier(0.025, 0.12, 0.165, 2) infinite;
        background: #ff562f;
    }
`;