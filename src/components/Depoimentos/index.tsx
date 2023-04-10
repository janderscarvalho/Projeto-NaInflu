import { MainContainer, Title,  ServicesGrid, ServiceDescription,  ImageTop, Service, ServiceImage, ServiceTitle } from './styles';
import { useState } from 'react';
import styled from "styled-components";
import prospec from '../../assets/services/prospec.svg';
import produ from '../../assets/services/produ.svg';
import brif from '../../assets/services/brif.svg';



export function Depoimentos() {

    return (
      <>
      <ImageTop></ImageTop>
      <MainContainer>
        <Title>Depoimentos</Title>
        <ServicesGrid>
          <Service>
            <ServiceImage src={prospec} alt="Prospecção" />
            <div>
              <ServiceTitle>@Daniel</ServiceTitle>
              <ServiceDescription>
              "Eu fiquei muito feliz em trabalhar com a marca de marketing digital de influenciadores. Eles são extremamente profissionais e sabem como construir uma relação de confiança e parceria com seus influenciadores. Eles me ajudaram a crescer minha audiência e impacto nas redes sociais e estou ansioso para trabalhar com eles novamente no futuro!"
              </ServiceDescription>
            </div>
          </Service>
          <Service>
            <ServiceImage src={produ} alt="Produção" />
            <div>
              <ServiceTitle>@Daniel</ServiceTitle>
              <ServiceDescription>
              "Trabalhar com a equipe de marketing digital de influenciadores foi uma experiência incrível! Eles sabem como ninguém como criar campanhas autênticas e impactantes que realmente ressoam com o público. Eu recomendo fortemente a todos os influenciadores que desejam alcançar novos patamares em suas carreiras!"
              </ServiceDescription>
            </div>
          </Service>
          <Service>
            <ServiceImage src={brif} alt="Briefing" />
            <div>
              <ServiceTitle>@Daniel</ServiceTitle>
              <ServiceDescription>
              "Eu fiquei muito feliz em trabalhar com a marca de marketing digital de influenciadores. Eles são extremamente profissionais e sabem como construir uma relação de confiança e parceria com seus influenciadores. Eles me ajudaram a crescer minha audiência e impacto nas redes sociais e estou ansioso para trabalhar com eles novamente no futuro!"
              </ServiceDescription>
            </div>
          </Service>

          
        </ServicesGrid>
      </MainContainer>
    </>

);
};