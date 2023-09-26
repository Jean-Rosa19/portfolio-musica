import { createGlobalStyle } from 'styled-components';



export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;

    &::-webkit-scrollbar-thumb{
      background-color: rgba(2,0,36,1);
      border-radius: 20px;
      border: 3px solid #fff;
    }

    &::-webkit-scrollbar-track {
      background: #fff;
      border-radius: 5px;
    } 

    &::-webkit-scrollbar {
      width: 12px;
    }
  }

  *:focus{
    outline: 0;
  }

  html,body,#root{
    height: 100%;
  }
  
  body{
    background: linear-gradient(90deg, #5e5d86 0%, #f0d5ed 100%);
    -webkit-font-smoothing: antialiase;
  }

  body, input{
    font: 14px 'Roboto', sans-serif;
  }

  label, span{
    color: #120e09;
    line-height: 28px;
  }

  a{
    text-decoration:none;
  }

  ul{
    list-style: none;
  }

`;