import styled from 'styled-components';


export const Container = styled.div`
    background:none;
    border-radius: 5px;
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
        font-size: 12px;
    }

    @media (max-width: 540px){
        margin-bottom: 5px;
    }
`;