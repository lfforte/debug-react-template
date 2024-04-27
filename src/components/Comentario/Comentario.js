import { React, useState } from 'react'
import { BotaoComentar, ContainerDeComentarios, InputDoComentario, SessaoDeComentario } from './comentarioStyle'

function Comentario(props) {
    const [comentario, setComentario] = useState("")

    const onChangeComentario = (e) => {
        setComentario(e.target.value)
    }

    const enviarComentario = () => {

        props.adicionaComentario(props.postId, comentario)
        setComentario("")

    }
    const listaDeComentarios = props.comentarios.map((comentario, index) => {
        return <p key={index}>{comentario}</p>
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

            <BotaoComentar onClick={enviarComentario}>Comentar Post</BotaoComentar>


        </SessaoDeComentario>
    )
}

export default Comentario