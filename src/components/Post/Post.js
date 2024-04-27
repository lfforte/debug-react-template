import { BotaoApagar, BotaoCurtir, ContainerDosBotões, ImagemDoUsuario, InfosDoUsuario, NomeDoUsuario, PostContainer, TextoDaPostagem, ToggleDosComentarios } from "./postStyle";
import Comentario from "../Comentario/Comentario";


const Post = (props) => {

  return (
    <PostContainer>
      <InfosDoUsuario>
        <ImagemDoUsuario src={props.post.imageDoUsuario} alt="imagem do usuario" />
        <NomeDoUsuario>{props.post.usuario}</NomeDoUsuario>
      </InfosDoUsuario>

      <TextoDaPostagem disabled value={props.post.texto} />
      <ContainerDosBotões>
        <BotaoCurtir
          onClick={() => props.alterarCurtida(props.post.id)}
          value={props.post.curtido ? "Descurtir" : "Curtir"}
        >
          {props.post.curtido ? "Descurtir" : "Curtir"}
        </BotaoCurtir>
        <BotaoApagar onClick={() => props.apagarPost(props.post.id)}>Apagar</BotaoApagar>
      </ContainerDosBotões>

      <ToggleDosComentarios >
        <summary>Comentários</summary>
        <Comentario
          postId={props.post.id}
          comentarios={props.post.comentarios}
          adicionaComentario={props.adicionaComentario}
          onChangeComentario={props.onChangeComentario}
        />
      </ToggleDosComentarios >

    </PostContainer>
  );
};

export default Post