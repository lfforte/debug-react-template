import styled from 'styled-components'


export const DivisorDaTela = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;

`

export const Header = styled.header`
    grid-column: 1/2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid gainsboro;
    background-color: #45525B;
    height: 100vh;
    width: 35%;
    position: fixed;
    margin-right: 30px; 
    color: white;
    font-size: 1.2rem;

    img{
        width: 30%;
    }
    
  

`

export const ContainerDosInputs = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    color: white;
    label{
        margin-top: 20px;
    }
    
    textarea{
        border: 1px solid gainsboro;
        border-radius: 10px;
        font-size: 1rem;
        padding: 10px;
        resize: none;
    }
    input{
        border: 1px solid gainsboro;
        border-radius: 10px;
        font-size: 1rem;
        padding: 10px;
    }
`
export const ContainerDePostagem = styled.main`
    grid-column: 2/3;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 10px;
`

export const BotaoAdicionar = styled.button`
    width: 50%;
    align-self: center;
    margin: 30px;
    padding: 10px;
    border-radius: 8px;
    border: none;
    color: white;
    background-color: #F9B24E;
    font-size: 1rem;
    &:hover{
        background-color: #FE7E02;
    }

`
