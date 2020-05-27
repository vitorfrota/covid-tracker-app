import styled from 'styled-components';


export const Container = styled.div`
    background: #1d1e20;
    border-radius: 5px;
    padding: 0 10px;
    padding-left: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: #ccc;
    margin: 0 4px;
    
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
        font-size: 13px;
    }

    @media (max-width: 540px){
        margin: 5px 0;
    }
  
`;