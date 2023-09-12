import styled from "styled-components"

export const PostContainer = styled.section`
    border: 1px solid gainsboro;
    border-radius: 20px;
    padding: 5px;
    width: 500px;
    display: grid;
    grid-template-rows: 8vh 15vh 8vh;
   
`
export const InfosDoUsuario = styled.div`
        display: flex;
        align-items: center;
`

export const ImagemDoUsuario = styled.img`
    width: 8%;
    border: 1px solid gainsboro;
    border-radius: 50px;
    margin: 10px;
`

export const NomeDoUsuario = styled.h2`
   color: gray;
`

export const TextoDaPostagem = styled.textarea` 
    border: 1px solid gainsboro;
    margin: 10px;
    border-radius: 10px;
    font-size: 1rem;
    padding: 10px;
    resize: none;
    

`

export const ContainerDosBotões = styled.div`
display: flex;
margin: 10px;
gap: 10px;

`

export const toggleDosComentarios = styled.details`
    margin: 10px;
    color: gray;
`
export const BotaoCurtir = styled.button`
    border: none;
    width: 15%;
    background-color:${props => props.value === "Curtir" ? "#F6AF56" : "gray"};
    color: white;
    border-radius: 10px;
    &:hover{
        background-color: #FE7E02;
    }
    
`
export const BotaoApagar = styled(BotaoCurtir)`
    background-color: tomato;
    &:hover{
        background-color: red;
    }
`