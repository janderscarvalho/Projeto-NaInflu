import { MainContainer, Title, Image, Service, DescriptionBox, DescriptionOverlay, ServicesGrid, ServiceDescription, DescriptionTitle, DescriptionText, ImageFoot  } from './styles';
import { useState } from 'react';
import styled from "styled-components";
import acom from '../../assets/services/acom.svg';
import prospec from '../../assets/services/prospec.svg';
import produ from '../../assets/services/produ.svg';
import brif from '../../assets/services/brif.svg';
import gest from '../../assets/services/gest.svg';
import bud from '../../assets/services/bud.svg';
import foot from '../../assets/main.svg';



const services = [    
  { id: 1, image: prospec, description: "Prospecção de influenciadores digitais" },
  { id: 2, image: produ, description: "Produção de conteúdo" },
  { id: 3, image: brif, description: "Briefing" },
  { id: 4, image: gest, description: "Gestão de campanhas" },
  { id: 5, image: bud, description: "Budget" },
  { id: 6, image: acom, description: "Acompanhamento de resultados" }
];

export function Section3() {
  const [showProspec, setShowProspec] = useState(false);
  const [showProdu, setShowProdu] = useState(false);
  const [showBrif, setShowBrif] = useState(false);
  const [showGest, setShowGest] = useState(false);
  const [showBud, setShowBud] = useState(false);
  const [showAcom, setShowAcom] = useState(false);

  
    return (
      <>
      <MainContainer  id="serviços" >
        <Title>Nossos Serviços</Title>
        <ServicesGrid>

          <Service onClick={() => setShowProspec(true)}>
            <Image src={prospec} alt="Prospecção de influenciadores" />
            <ServiceDescription>Prospecção de influenciadores</ServiceDescription>
          </Service>

          <Service onClick={() => setShowProdu(true)}>
            <Image src={produ} alt="Produção de Conteúdo" />
            <ServiceDescription>Produção de Conteúdo</ServiceDescription>
          </Service>

          <Service onClick={() => setShowBrif(true)}>
            <Image src={brif} alt="Briefing Criativo" />
            <ServiceDescription>Briefing Criativo</ServiceDescription>
          </Service>

          <Service onClick={() => setShowGest(true)}>
            <Image src={gest} alt="Planejamento" />
            <ServiceDescription>Planejamento</ServiceDescription>
          </Service>

          <Service onClick={() => setShowAcom(true)}>
            <Image src={acom} alt="Algoritmo" />
            <ServiceDescription>Algoritmo</ServiceDescription>
          </Service>

          <Service onClick={() => setShowBud(true)}>
            <Image src={bud} alt="Assessoria" />
            <ServiceDescription>Assessoria</ServiceDescription>
          </Service>



        </ServicesGrid>
        <DescriptionOverlay showDescription={showProspec || showProdu || showBrif || showGest || showBud || showAcom} onClick={() => { setShowProspec(false); setShowProdu(false); setShowBrif(false); setShowGest(false); setShowBud(false); setShowAcom(false); }} />

        
        {showProspec && (
          <DescriptionBox>
            <Image src={prospec} alt="Prospecção" />
            <DescriptionTitle>Prospecção de influenciadores </DescriptionTitle>
            <DescriptionText>Nosso serviço de mapeamento de influenciadores oferece a você uma seleção cuidadosa de parceiros que estejam alinhados com sua marca e sua audiência. Nossa equipe especializada realiza pesquisas detalhadas para identificar influenciadores relevantes em seu nicho de mercado. Consideramos seus valores, qualidade de conteúdo e engajamento para garantir uma parceria autêntica.</DescriptionText>
          </DescriptionBox>
        )}

        {showProdu && (
          <DescriptionBox>
            <Image src={produ} alt="Produção de Conteúdo" />
            <DescriptionTitle>Produção de Conteúdo</DescriptionTitle>
            <DescriptionText>Nossa equipe de produção de conteúdo oferece soluções criativas para impulsionar sua campanha de marketing como influenciador digital. Desenvolvemos conteúdo autêntico e impactante para diversas plataformas digitais, alinhado aos seus valores e público-alvo. Com pesquisa de mercado, roteiros e produção de alta qualidade.</DescriptionText>
          </DescriptionBox>
        )}

        {showBrif && (
          <DescriptionBox>
            <Image src={brif} alt="Briefing" />
            <DescriptionTitle>Briefing Criativo</DescriptionTitle>
            <DescriptionText>Nosso serviço de Briefing Criativo é projetado para fornecer uma base sólida para a criação de conteúdo impactante. Trabalharemos em colaboração estreita, entendendo sua visão, objetivos e público-alvo. Com base nisso, nossa equipe criativa desenvolverá ideias inovadoras e estratégias que se destacarão no mercado.</DescriptionText>
          </DescriptionBox>
        )}

           {showGest && (
          <DescriptionBox>
            <Image src={gest} alt="Gestão" />
            <DescriptionTitle>Planejamento</DescriptionTitle>
            <DescriptionText>Nosso serviço de Planejamento de Campanha oferece estratégias personalizadas para maximizar o sucesso das suas campanhas de marketing de influência. Trabalhamos em conjunto, analisando seu público-alvo e definindo metas claras.
            </DescriptionText>
          </DescriptionBox>
        )}

          {showBud && (
          <DescriptionBox>
            <Image src={bud} alt="Assessoria" />
            <DescriptionTitle>Assessoria</DescriptionTitle>
            <DescriptionText> Oferecemos uma assessoria estratégica personalizada. Acompanhamos suas campanhas, além de oferecer consultoria especializada para otimizar sua estratégia. </DescriptionText>
          </DescriptionBox>
        )}

          {showAcom && (
          <DescriptionBox>
            <Image src={acom} alt="Algoritmo " />
            <DescriptionTitle>Algoritmo</DescriptionTitle>
            <DescriptionText> oferecemos uma assessoria estratégica personalizada. Acompanhamos suas campanhas, além de oferecer consultoria especializada para otimizar sua estratégia. </DescriptionText>
          </DescriptionBox>
        )}


</MainContainer>
      
<ImageFoot src={foot} alt="Prospec" />

</>
);
};