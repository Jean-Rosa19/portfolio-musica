import React from 'react';
import {
  FaDev, FaLinkedin, FaGithub, FaMapMarkerAlt,
  FaRegEnvelope
} from 'react-icons/fa';

import {
  Container, Informacoes, DadosPerfil, Funcao ,RedeSociais,
  Detalhes,DadosEndereco
} from './styles';

export default function InfoPessoais() {
  return (
    <Container>
      <Informacoes>
        <DadosPerfil>
          <img src="https://github.com/Jean-Rosa19.png" alt="Imagem perfil" />
          <h1>Jean Rosa</h1>
        </DadosPerfil>
        <Funcao>
          <FaDev size={20} />
          <span>Web Developer</span>
        </Funcao >
        <RedeSociais>
          <div>
            {/* <a href='https://www.youtube.com/channel/UC83GEXrk084TeDcHayLkN-A' target={'_blank'}><FaYoutube size={25} /></a> */}
            <a href='https://www.linkedin.com/in/dev-jeanrosa/' target={'_blank'}><FaLinkedin size={25} /></a>
            <a href='https://github.com/Jean-Rosa19' target={'_blank'}><FaGithub size={25} /></a>
          </div>
        </RedeSociais>
        <DadosEndereco>
          <Detalhes>
            <FaMapMarkerAlt size={20} />
            <span>Brazópolis - MG, Brasil</span>
          </Detalhes>
          <Detalhes>
            <FaRegEnvelope size={20}/>
            <span>jeancarlosrosa22@gmail.com</span>
          </Detalhes>
        </DadosEndereco>
      </Informacoes>
    </Container>
  );
}
