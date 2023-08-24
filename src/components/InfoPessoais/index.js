import React from 'react';
import jean from './jean2.jpeg'

import {
  FaGuitar, FaWhatsapp, FaMapMarkerAlt,
  FaRegEnvelope
} from 'react-icons/fa';

import {
  Container, Informacoes, DadosPerfil, Funcao, RedeSociais,
  Detalhes, DadosEndereco
} from './styles';

export default function InfoPessoais() {


  function openWhatsAppChat() {
    const phoneNumber = '+5535999450991';
    const message = 'Olá, gostaria de agendar uma aula!';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`, '_blank');
  }

  return (
    <Container>
      <Informacoes>
        <DadosPerfil>
          <img src={jean} alt="Imagem perfil" />
          <h1>Jean Rosa</h1>
        </DadosPerfil>
        <Funcao>
          <FaGuitar size={20} />
          <span>Músico</span>
        </Funcao >
        <RedeSociais>
          <div id='whatsApp'>
      
            <button onClick={openWhatsAppChat} className='whatsApp'>
              < FaWhatsapp size={25} />
              <span>Agendar Aula</span>
            </button>

          </div>
        </RedeSociais>
        <DadosEndereco>
          <Detalhes>
            <FaMapMarkerAlt size={20} />
            <span>Brazópolis - MG, Brasil</span>
          </Detalhes>
          <Detalhes>
            <FaRegEnvelope size={20} />
            <span>jeancarlosrosa22@gmail.com</span>
          </Detalhes>
        </DadosEndereco>
      </Informacoes>
    </Container>
  );
}
