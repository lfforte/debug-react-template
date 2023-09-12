import { BotaoApagar, BotaoCurtir, ContainerDosBotões, ImagemDoUsuario, InfosDoUsuario, NomeDoUsuario, PostContainer, TextoDaPostagem, toggleDosComentarios } from "./postStyle";
import  {Comentario} from "../Comentario/Comentario";


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
          value={props.post.curtida ? "Descurtir" : "Curtir"}
        >
          {props.post.curtida ? "Descurtir" : "Curtir"}
        </BotaoCurtir>
        <BotaoApagar onClick={() => props.apagarPost(props.post.id)}>Apagar</BotaoApagar>
      </ContainerDosBotões>

      <toggleDosComentarios >
        <summary>Comentários</summary>
        <Comentario
          postId={props.post.id}
          comentarios={props.post.comentarios}
          adicionaComentario={props.adicionaComentario}
          onChangeComentario={props.onChangeComentario}
        />
      </toggleDosComentarios >

    </PostContainer>
  );
};
export default Post