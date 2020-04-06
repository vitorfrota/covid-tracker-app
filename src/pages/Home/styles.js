import styled from 'styled-components';


export const Container = styled.div`
    max-width: 1110px;
    height: 100vh;
    margin: 0 auto;
    background: none;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    header{
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .list-cards{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        @media (max-width: 540px){
            width: 100%;
            flex-direction: column;
        }
    }

    @media (max-width: 540px){
        width: 100%;
    }
`;


export const Select = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;

    button{
        background: none;
        border: none;
    }

    p{
        font-size: 22px;
        color: #fff;
    }
`;