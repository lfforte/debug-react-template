import React, { useState } from 'react'
import { BotaoComentar, ContainerDeComentarios, InputDoComentario, SessaoDeComentario } from './comentarioStyle'

 function Comentario(props) {
    const [comentario, setComentario] = useState("")

    const onChangeComentario = (e) => {
        setComentario(e.target.valeu)
    }

    const enviarComentario = () => {

        props.adicionaComentario(props.postId, comentario)
        setComentario("")

    }
    const listaDeComentarios = props.comentarios.map((comentario, index) => {
        return <p>{comentario}</p>
    })

    return (
        <SessaoDeComentario>
            <ContainerDeComentarios>
                {listaDeComentarios}
            </ContainerDeComentarios>
            <InputDoComentario
                placeholder="Adicionar comentario"
                onChange={onChangeComentario}
                value={comentario}
            />

            <BotaoComentar onclick={enviarComentario}>Comentar Post</BotaoComentar>


        </SessaoDeComentario>
    )
}

export default Comentario