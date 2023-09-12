import styled from 'styled-components'

export const SessaoDeComentario = styled.section`
color: darkgray;

`
export const ContainerDeComentarios = styled.div`
   overflow-y: auto;
   max-height: 60px;
   border-radius: 10px;
   margin: 10px;
   padding: 10px;
`

export const InputDoComentario = styled.input`
    margin: 10px;
    border: 1px solid gainsboro;
    border-radius: 5px;
    padding: 8px;

`
export const BotaoComentar = styled.button`
    border: none;
    background-color: #F6AF56;
    color: white;
    padding: 8px;
    border-radius: 10px;
    &:hover{
        background-color: #FE7E02;
    }
`