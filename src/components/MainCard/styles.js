import styled from 'styled-components';


export const Container = styled.div`
    background: #1d1e20;
    border-radius: 1px;
    padding: 25px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: #ccc;

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

  
`;