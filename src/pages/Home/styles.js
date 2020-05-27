import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    max-width: 1110px;
    margin: 70px auto;
    background: rgba(10,10,10,0.7);
    display: flex;
    padding: 20px;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;

    header{
        width: 100%;
    }

    .list-cards{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    @media (max-width: 540px){
        width: 100%;
        background: none;
        margin: 0;
        .list-cards{
            flex-direction: column;
        }
    }
`;


export const Select = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    button{
        background: none;
        border: none;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 200ms linear 0s;

        svg{
            fill: #f7b03e;
            transition: all 200ms linear 0s;
        }

        &:hover svg{
            fill: ${shade(0.2 , '#f7b03e')};
        }
    }

    p{
        font-size: 20px;
        font-weight: bold;
        color: #ddd;
        text-transform: uppercase;
    }
`;