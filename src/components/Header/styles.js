import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    background: #121212;
    .content{
        max-width: 1110px;
        display: flex;
        margin: 0 auto;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        img{
        max-width: 64px;
        }

        h1{
            font-size: 16px;
        }

    }
`;

