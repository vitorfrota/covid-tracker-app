import styled from 'styled-components';


export const Container = styled.div`
    background:none;
    border-radius: 5px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: #ccc;

    h2{
        font-size: 12px;
        color: #8a8a8a;
        text-transform: uppercase;
    }

    p{
        font-size: 26px;
        color: #ccc;
        margin-top: 7px;
        font-weight: bold;
    }

    span{
        margin-top: 7px;
        font-size: 11px;
    }

    @media (max-width: 540px){
        margin-bottom: 5px;
    }
`;