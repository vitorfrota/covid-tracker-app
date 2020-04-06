import styled from 'styled-components';


export const Container = styled.div`
    max-width: 1110px;
    height: 100vh;
    margin: 0 auto;
    background: none;
    padding:10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    header{
        margin-bottom: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        width: 100%;

        img{
            max-width: 64px;
        }

        h1{
            font-size: 20px;
        }
    }

    .list-cards{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        div:first-child{
            margin-left: 0;
        }
        div:last-child{
            margin-right: 0;
        }

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
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 150ms linear 0s;

        &:hover{
            background: RGBA(0, 184, 218, 0.05);
        }
    }

    p{
        font-size: 20px;
        color: #fff;
    }
`;