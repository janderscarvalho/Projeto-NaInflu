import styled from "styled-components";
import  pat1  from "../../assets/patrocinios/pat1.svg"
import  pat2  from "../../assets/patrocinios/pat2.svg"
import  pat3  from "../../assets/patrocinios/pat3.svg"
import  pat4  from "../../assets/patrocinios/pat4.svg"
import  pat5  from "../../assets/patrocinios/pat5.svg"
import  pat6  from "../../assets/patrocinios/pat6.svg"
import  pat7  from "../../assets/patrocinios/pat7.svg"
import  pat8  from "../../assets/patrocinios/pat8.svg"
import  pat9 from "../../assets/patrocinios/pat9.svg"
import  pat10  from "../../assets/patrocinios/pat10.svg"
import  pat11 from "../../assets/patrocinios/pat11.svg"
import  pat12 from "../../assets/patrocinios/pat12.svg"
import  pat13 from "../../assets/patrocinios/pat13.svg"
import  pat14 from "../../assets/patrocinios/pat14.svg"
import  pat15 from "../../assets/patrocinios/pat15.svg"
import { ImageContainer, MainContainer, Image, ParceriasContainer ,Titulo } from './styles';


export function Section2 () {  

  

  const items = [    
      { id: 1, imageUrl: pat1 },
      { id: 2, imageUrl: pat2 }, 
      { id: 3, imageUrl: pat3 },
      { id: 4, imageUrl: pat4 },
      { id: 5, imageUrl: pat5 },
      { id: 6, imageUrl: pat6 },
      { id: 7, imageUrl: pat7 },
      { id: 8, imageUrl: pat8 },
      { id: 9, imageUrl: pat9 },
      { id: 10, imageUrl: pat10},
      { id: 11, imageUrl: pat11},
      { id: 12, imageUrl: pat12},
      { id: 13, imageUrl: pat13},
      { id: 14, imageUrl: pat14},
      { id: 15, imageUrl: pat15},
      
    ]
            // adicione mais itens aqui  ];

         return (
          <div id="parcerias" >
          
          <Titulo >Nossas Parcerias</Titulo>
          
              <ParceriasContainer>
                
              

              <MainContainer>
                {items.map((item) => (
                  <ImageContainer key={item.id}>
                    <Image src={item.imageUrl} alt="patrocinador" />
                  </ImageContainer>

                ))}
              </MainContainer>
              </ParceriasContainer>
              </div>
            );
          }