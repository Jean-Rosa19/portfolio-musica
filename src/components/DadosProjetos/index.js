import React, { useState } from 'react';
import { FaYoutube } from 'react-icons/fa';
import { SkillsItem } from '../../services/data/skill';
import { Videos } from '../../services/data/projetos';

import {
  Container, Menu, Cabecalho, OpcoesMenu, Dados, InfoDados,
  Skills, ItemSkill, Card, Itens,
} from './styles';


export default function DadosProjetos() {
  const ItensSkill = SkillsItem;
  const [showDados, setShowDados] = useState(true);
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  function handleClickMenu(isTrue) {
    if (isTrue) {
      setShowDados(true);
    } else {
      setShowDados(false);
    }
  }

  return (
    <Container>
      <nav>
        <Menu>
          <Cabecalho>
            <span className='sobre' onClick={() => handleClickMenu(true)}>Sobre</span>
            <div></div>
          </Cabecalho>
          <OpcoesMenu>
            <span onClick={() => handleClickMenu(false)}>Músicas</span>

          </OpcoesMenu>
        </Menu>
      </nav>
      <Dados>
        {showDados ? (
          <>
            <InfoDados initial="hidden" animate="visible" variants={variants}>
              <span>
                Saudações, sou Jean Rosa, graduado em Licenciatura em Música com Habilitação em Violão pela UNINCOR. Com experiência de mais de 12 anos como professor de violão, tive a oportunidade de aprofundar meu conhecimento em diversos segmentos do violão instrumental, e atuar de forma abrangente em suas múltiplas áreas.

                Minha jornada inclui a realização de recitais, masterclasses, colaborações em duos, trios e participação em orquestras de violão. Meu comprometimento também se estendeu para a sala de aula, onde ministrei aulas em diversos contextos. Além disso, fui aluno da prestigiada Escola Municipal de Música de São Paulo, onde solidifiquei minha formação.

                Meu trabalho atualmente se concentra em aulas particulares, permitindo-me personalizar o aprendizado de acordo com as necessidades individuais dos meus alunos. Minha abordagem é enraizada na dedicação à arte do violão e na busca constante pela excelência musical.

                <b> conheça meu trabalho <a href='https://www.youtube.com/channel/UCessnc_3DyPvS1PuM8AhOrA' target={'_blank'}> Clicando aqui!</a></b>
              </span>
            </InfoDados>
            <h1>Você Aprenderá</h1>
            <Skills>
              {ItensSkill.map((Item) =>
                <ItemSkill animate={{ x: ['-100px', '100px', '0px'] }}
                  transition={{ ease: "easeOut", duration: 1 }}>
                  {Item.icon}
                  <div>
                    <h3>{Item.titulo}</h3>

                  </div>
                </ItemSkill>
              )}
            </Skills>
          </>
        ) : (
          <>
            <Itens>
              {Videos.map((videos) =>
                <Card initial="hidden" animate="visible" variants={variants}>
                  <h3>{videos.nome}</h3>
                  <img src={videos.img} alt="" />
                  <a href={videos.youTube} target={'_blank'}>
                    <FaYoutube size={20} />
                    YouTube
                  </a>
                </Card>
              )}
            </Itens>
          </>
        )}
      </Dados>
    </Container >
  );
}