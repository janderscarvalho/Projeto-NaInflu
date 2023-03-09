import styled from "styled-components";
import main1 from '../../assets/ftmain1.svg'



export const MainContainer = styled.div`
position: relative;
width: 100%;
height: 90vh;
display: flex;
align-items: center;
justify-content: center;

z-index: -1;

&:before {
content: "";
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 95%;
background-color: #282828;
background-image: url(${main1});
background-size: cover;
background-position: center;
opacity: 0.8;
z-index: -1;
}

@media (max-width: 768px) {
flex-direction: column;
height: auto;
}
`;


export const MainText = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 90%;
z-index: -1;
font-family: 'Poppins', sans-serif;
font-size: 2rem;
font-weight: medium;
  


  p {
    ///---background-color: #282828;
    color: #767676;
    font-size: 2rem;
    font-family: 'Poppins', sans-serif;
    font-style: italic;
    margin: 0;
    margin-top: 1rem;
  }

    p:first-child {
      color: #F8FFFC;
      font-size: 48px;
      font-family: 'Poppins', sans-serif;
      font-weight: bold;
      margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    text-align: center;
    width: 100%;

    p:first-child {
      font-size: 32px;
    }
  }

      button {
        background-color: #553268;
        color: #F8FFFC;
        font-size: 2rem;
        font-family: 'Poppins', sans-serif;
        font-weight: medium;
        margin-top: 30px;
        padding: 20px 40px;
        border: 0;
        border-radius: 0.25rem;

        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.9);
        }
      }
  
`;
