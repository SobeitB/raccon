import {
   Container
} from '../../styles/global.styled'

import {
   MainComp,
   ContainerInline,
   BodyTitle,
   Title,
   OpenSea,
   ContCard,
   Card,
   CardImgBody,
   CardInfo,
   CardTitle,
   CardText,
   CardBtn,
   BodyBack,
   BodyBackMob,
   OpenSeaLink
} from './main.styled'

import one from './img/one.png'
import two from './img/two.png'
import three from './img/three.png'
import bg from './img/bg.png'

import s from './main.module.css'

interface propsI {
   setComponent:(name: string) => void;
}

const Main = ({setComponent}: propsI) => {

   const onComponent = (name:string) =>  () =>{
      setComponent(name)
   }

   return (
      <MainComp>
        <BodyBack>
           <img src={bg} alt="" />
        </BodyBack>

         <BodyBackMob className={s.mobBg} />

        <Container>
           <ContainerInline>
               <BodyTitle>
                 <Title>RACCOON<br/> TOWN</Title>
                  <OpenSea onClick={() => {
                     window.location.href='https://opensea.io/collection/raccoontown'
                  }}>
                     OPENSEA
                  </OpenSea>
               </BodyTitle>

            <ContCard>
               <Card>
                  <CardImgBody color="#EF972D">
                     <img 
                        width="185px"
                        height="185px"
                        src={two}
                        alt=""
                     />
                  </CardImgBody>

                  <CardInfo>
                     <CardTitle>About us</CardTitle>
                     <CardText>
                        Raccoon town is inhabited by funny raccoons who live exciting lives.  Each day the town is full of wonderful events.
                     </CardText>

                     <CardBtn 
                        onClick={onComponent('about')}
                        color="#EF972D">more</CardBtn>
                  </CardInfo>
               </Card>

               <Card>
                  <CardImgBody color="#A2E5F5">
                     <img 
                        width="185px"
                        height="185px"
                        src={one}
                        alt=""
                     />
                  </CardImgBody>

                  <CardInfo>
                     <CardTitle>Roadmap</CardTitle>
                     <CardText>
                     - Mint 1000 unique NFT raccoon collection - Create the biggest community
                     </CardText>

                     <CardBtn 
                        color="#A2E5F5"
                        onClick={onComponent('roadmap')}
                     >more</CardBtn>
                  </CardInfo>
               </Card>

               <Card>
                  <CardImgBody color="#E4E4A8">
                     <img 
                        width="185px"
                        height="185px"
                        src={three}
                        alt=""
                     />
                  </CardImgBody>

                  <CardInfo>
                     <CardTitle last>Marketplace</CardTitle>

                     <CardBtn 
                        color="#E4E4A8"
                        onClick={onComponent('marketplace')}
                     >Go!</CardBtn>
                  </CardInfo>
               </Card>
            </ContCard>
           </ContainerInline>
         </Container>
      </MainComp> 
   )
}

export default Main;
