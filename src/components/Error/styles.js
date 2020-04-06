import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 5px;
    padding:  20px 15px;
    margin: 0 5px;

    img{
      margin-bottom: 30px;
      color: #ff562f;
      width: 350px;
      background: RGBA(255, 86, 47, 0.01);
      border-radius: 50%;
      padding: 10px;

      @media (max-width: 540px){
        width: 220px;
      }
    }

   p{
      text-align: center;
      color: #fff;
      font-size: 24px;
    }


    button{
      padding: 16px 24px;
      margin-top: 40px;
      width: 250px;
      border-radius: 5px;
      background: #00b8da;
      border: none;
      color: #fff;
      font-weight: bold;
    }
`;