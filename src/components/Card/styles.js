import styled from 'styled-components';


export const Container = styled.div`
    background: #1d1e20;
    border-radius: 5px;
    padding: 15px;
    border-left: 6px solid ${props=> props.color};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: #ccc;
    margin: 0 5px;

    h2{
        font-size: 12px;
        color: #8a8a8a;
        text-transform: uppercase;
    }

    p{
        font-size: 26px;
        color: ${props=> props.color};
        margin-top: 7px;
        font-weight: bold;
    }

    span{
        margin-top: 7px;
        font-size: 13px;
    }

    @media (max-width: 540px){
        margin: 5px 0;
    }
  
`;