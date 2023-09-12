import { useState } from "react";
import {Post} from "../Post/Post";
import { BotaoAdicionar, ContainerDePostagem, ContainerDosInputs, DivisorDaTela, Header } from "./telaDePostagemStyle";

const TelaDePostagem = () => {
    const [textoNovoPost, setTextoNovoPost] = useState("")
    const [nomeDoUsuario, setNomeDoUsuario] = useState("")
    const [posts, setPost] = useState([])

    const onChangeUsuario = (event) => {
        setNomeDoUsuario(event.value)
    }
    const onChangeTextoNovoPost = (event) => {
        setTextoNovoPost(event.target.value);
    }
    const limparInputs = () => {
        setTextoNovoPost("");
        setNomeDoUsuario("")
    }
    const adicionarPost = () => {
        if (textoNovoPost && nomeDoUsuario) {
            const novoPost = {
                id: Date.now(),
                usuario: nomeDoUsuario,
                imageDoUsuario: "https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/625028e87950e1fe639924ba_fire.svg",
                texto: textoNovoPost,
                curtido: false,
                comentarios: []
            }

            setPost(novoPost)
            limparInputs()

        } else {
            alert("Adicione o nome do usuário")
        }
    }

    const apagarPost = (id) => {
        const novaListaDePosts = posts.filter(post => {
            return posts.id === id
        })

        setPost(novaListaDePosts)

    }

    const alterarCurtida = (id) => {
        const novaListaDePosts = posts.map(post => {
            if (post.id === id) {
                const curtidaAlterada = {
                    ...post,
                    curtido: post.curtido
                }
                return curtidaAlterada
            } else {
                return post
            }
        })
        setPost(novaListaDePosts)
    }

    function adicionaComentario(id, comentario) {
        const novaListaDePosts = posts.map(post => {
            if (post.id === id && comentario !== "") {
                const novaListaDeComentarios = [comentario, ...post.comentarios]
                const postComComentario = { ...post, comentarios: novaListaDeComentarios }

                return postComComentario

            } else {
                return post
            }
        })

        setPost(novaListaDePosts)

    }



    const listaDePosts = posts.map((post) => {
        return <Post
            key={post.id}
            alterarCurtida={alterarCurtida}
            apagarPost={apagarPost}
            adicionaComentario={adicionaComentario}
            post={post}
        />
    })

    return (
        <DivisorDaTela>
            <Header>
                <img src="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/625028e87950e1fe639924ba_fire.svg" alt="logo da labenu" />
                <h1>LabePost</h1>
                <ContainerDosInputs>

                    <label htmlFor="usuario">Nome: </label>
                    <input
                        id="usuario"
                        type="text"
                        value={nomeDoUsuario}
                        onChange={onChangeUsuario}
                        placeholder="nome do usuário"
                    />

                    <label htmlFor="postagem"> Postagem: </label>
                    <textarea
                        id="postagem"
                        type="text"
                        onchange={onChangeTextoNovoPost}
                        value={textoNovoPost}
                        placeholder="texto da postagem"
                    />

                    <BotaoAdicionar onClick={() => adicionarPost}>Adicionar</BotaoAdicionar >
                </ContainerDosInputs>
            </Header>

            <ContainerDePostagem >
                {listaDePosts}
            </ContainerDePostagem >
        </DivisorDaTela>
    );
}

export default TelaDePostagem