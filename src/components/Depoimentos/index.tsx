import { MainContainer, Title, StyledImage, Service, DescriptionBox, DescriptionOverlay, ServicesGrid, ServiceDescription, DescriptionTitle, DescriptionText, ImageTop } from './styles';
import { useState } from 'react';
import styled from "styled-components";
import acom from '../../assets/services/acom.svg';
import prospec from '../../assets/services/prospec.svg';
import produ from '../../assets/services/produ.svg';
import brif from '../../assets/services/brif.svg';
import gest from '../../assets/services/gest.svg';
import bud from '../../assets/services/bud.svg';

const services = [    
  { id: 1, image: prospec, description: "Prospecção de influenciadores digitais" },
  { id: 2, image: produ, description: "Produção de conteúdo" },
  { id: 3, image: brif, description: "Briefing" },
  { id: 4, image: gest, description: "Gestão de campanhas" },
  { id: 5, image: bud, description: "Budget" },
  { id: 6, image: acom, description: "Acompanhamento de resultados" }
];

export function Depoimentos() {
  const [showProspec, setShowProspec] = useState(false);
  const [showProdu, setShowProdu] = useState(false);
  const [showBrif, setShowBrif] = useState(false);
  const [showGest, setShowGest] = useState(false);
  const [showBud, setShowBud] = useState(false);
  const [showAcom, setShowAcom] = useState(false);

  
    return (
      <>
      <ImageTop></ImageTop>
      <MainContainer>
        <Title>Depoimentos de Parceiros</Title>
        <ServicesGrid>

          <Service onClick={() => setShowProspec(true)}>
            <StyledImage src={prospec} alt="Prospec" />
            <ServiceDescription>Prospecção de influenciadores digitais</ServiceDescription>
          </Service>

          <Service onClick={() => setShowProdu(true)}>
            <StyledImage src={produ} alt="Produção de Conteúdo" />
            <ServiceDescription>Produção de Conteúdo</ServiceDescription>
          </Service>

          <Service onClick={() => setShowBrif(true)}>
            <StyledImage src={brif} alt="Briefing" />
            <ServiceDescription>Briefing Criativo</ServiceDescription>
          </Service>

          <Service onClick={() => setShowGest(true)}>
            <StyledImage src={gest} alt="Gestão de Redes Sociais" />
            <ServiceDescription>Gestão de Campanhas</ServiceDescription>
          </Service>

          <Service onClick={() => setShowBud(true)}>
            <StyledImage src={bud} alt="Gestão de Anúncios" />
            <ServiceDescription>Budget </ServiceDescription>
          </Service>

          <Service onClick={() => setShowAcom(true)}>
            <StyledImage src={acom} alt="Inclusão Digital" />
            <ServiceDescription>Acompanhamento de resultados</ServiceDescription>
          </Service>

        </ServicesGrid>
        <DescriptionOverlay showDescription={showProspec || showProdu || showBrif || showGest || showBud || showAcom} onClick={() => { setShowProspec(false); setShowProdu(false); setShowBrif(false); setShowGest(false); setShowBud(false); setShowAcom(false); }} />

        
        {showProspec && (
          <DescriptionBox>
            <StyledImage src={prospec} alt="Prospecção" />
            <DescriptionTitle>Prospecção de influenciadores digitais</DescriptionTitle>
            <DescriptionText>Identificação de influenciadores relevantes para a marca e sua audiência;</DescriptionText>
          </DescriptionBox>
        )}

        {showProdu && (
          <DescriptionBox>
            <StyledImage src={produ} alt="Produção de Conteúdo" />
            <DescriptionTitle>Produção de Conteúdo</DescriptionTitle>
            <DescriptionText>Criação de conteúdo criativo para a campanha de marketing;</DescriptionText>
          </DescriptionBox>
        )}

        {showBrif && (
          <DescriptionBox>
            <StyledImage src={brif} alt="Briefing" />
            <DescriptionTitle>Briefing Criativo</DescriptionTitle>
            <DescriptionText>Estratégia de campanha em conjunto com o cliente;</DescriptionText>
          </DescriptionBox>
        )}

           {showGest && (
          <DescriptionBox>
            <StyledImage src={gest} alt="Gestão" />
            <DescriptionTitle>Gestão de Campanhas</DescriptionTitle>
            <DescriptionText>Monitoramento e análise dos resultados da campanha;
            </DescriptionText>
          </DescriptionBox>
        )}

          {showBud && (
          <DescriptionBox>
            <StyledImage src={bud} alt="Budget" />
            <DescriptionTitle>Briefing Criativo</DescriptionTitle>
            <DescriptionText>Negociação e gestão de contratos com os influenciadores;</DescriptionText>
          </DescriptionBox>
        )}

          {showAcom && (
          <DescriptionBox>
            <StyledImage src={acom} alt="Acompanhamento de resultados " />
            <DescriptionTitle>Acompanhamento de resultados </DescriptionTitle>
            <DescriptionText>Relatórios e feedback para o cliente.</DescriptionText>
          </DescriptionBox>
        )}


</MainContainer>
</>
);
};