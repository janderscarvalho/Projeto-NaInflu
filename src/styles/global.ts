import {createGlobalStyle} from 'styled-components'



export const GlobalStyle = createGlobalStyle`
:root {
    --background: #f0f2f5;
    --red: #E52E4D;
    --blue: #5429CC;  
    --green: #33CC95;
    --blue-light: #6933ff;

    --text-title: #363F5F;
    --text-body: #969cb3;

    --background: #F0F2F5;
    --shape: #FFFFFF;

    
}



a {
    text-decoration: none;
    color: inherit;
  }

  
h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}

 button {
    cursor: pointer;
 }


* {
    margin: 0;  
    padding: 0; 
    box-sizing: border-box;
}

.react-modal-overlay {
 background: rgba(0, 0 ,0 ,0.5);

 position: fixed;
 top: 0;
 bottom: 0;
 right: 0;
 left: 0;

 display: flex;
 align-items: center;
 justify-content: center;
}

.react-modal-content{
 

 width: 100%;
 max-width: 576px;
 background: var(--background);
 padding: 3rem;
 position: relative;
 border-radius: 0.24rem;

}



`