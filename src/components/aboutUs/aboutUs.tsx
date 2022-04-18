import {
   Container
} from '../../styles/global.styled'

import s from './bg.module.css'
import {
   Main,
   InlineCont,
   BodyItem,
   Cloud,
   CloudContent,
   CloudTitle,
   CloudTextOne,
   TextInfo,
   TitleRoad,
   RoadTextOne,
   Bodytext,
   BodyHands,
   BodyInfo,
   TextInfoWhite,
   TextPrice,
   RoadBrWeb,
   RoadBrTable,
   RoadBrMob,
} from './aboutUs.styled'
import hands from './img/Hands.png'

import { useEffect, useRef, memo } from "react";

interface propsI {
   component:string;
   setComponent:(name: string) => void;
}

const AboutUs = ({component, setComponent}: propsI) => {
   let mainref = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if(component === 'about') {
         if(mainref.current !== null) {
            mainref.current.scrollIntoView({
               block:"start",
               inline:"nearest",
               behavior:"smooth"
            })

            setComponent('');
         }
      }
   }, [component])

   return (
      <Main 
         ref={mainref} 
         className={s.main}
      >
         <Container>
            <InlineCont>
               <BodyItem>
                  <Cloud className={s.cloud}>
                     <CloudTitle>About us</CloudTitle>
                     <CloudContent>
                        <CloudTextOne>
                           Raccoon town citizens represent DAO consisting of cryptotrading enthusiasts<br /> and creative people. 
                           We encourage you to<br /> contribute to the unique ecosystem of<br /> Raccoon town in the Sandbox. 
                           Our<br /> community will give you the opportunity<br /> to influence this process directly.
                        </CloudTextOne>
                     </CloudContent>
                  </Cloud>

                  <BodyInfo>
                     <TextInfo>
                        The collection includes 1000 NFTs,<RoadBrMob /> each of <RoadBrWeb /> 
                        them<RoadBrTable /><RoadBrMob /> constitutes a unique<RoadBrMob /> raccoon image. In <RoadBrWeb /> 
                        future,<RoadBrMob /> we<RoadBrTable />  expect that Raccoon<RoadBrMob /> town citizens <RoadBrWeb /> 
                        will<RoadBrMob /> maintain<RoadBrTable />  leadership due<RoadBrMob /> to our DAO <RoadBrWeb />
                        structure.<RoadBrMob /> Each token of<RoadBrTable />  those 1000<RoadBrMob /> serves as <RoadBrWeb /> 
                        a governance<RoadBrMob /> token, it can be<RoadBrTable />  used for<RoadBrMob /> voting <RoadBrWeb /> 
                        and approval of<RoadBrMob /> decisions which impact<RoadBrTable />  the <RoadBrWeb /> 
                        ecosystem. All<RoadBrMob /> Raccoon town token<RoadBrMob /> holders <RoadBrWeb /> 
                        are<RoadBrTable />  entitled to<RoadBrMob /> receive 3D-tokens from<RoadBrMob /> <RoadBrWeb />
                        Raccoon city in the<RoadBrTable /> <RoadBrMob /> Sandbox on a priority<RoadBrMob /> <RoadBrWeb />
                        basis.
                     </TextInfo>

                     <TextInfoWhite>
                        <li>
                           Get the first 1 - 199 Raccoon NFTs for 0.03 ETH<br />
                        </li>

                        <li>
                           The second release including 200 - 499 Raccoon
                           NFTs will be available for 0.04 ETH<br />
                        </li>

                        <li>
                           Finally the last 500 - 1000  Raccoon NFTs will be<br /> 
                           sold for 0.05 ETH each
                        </li>
                     </TextInfoWhite>
                  </BodyInfo>
               </BodyItem>
            </InlineCont>

            <Bodytext>
               <TitleRoad>Sustainable<br /> Growth</TitleRoad>

               <RoadTextOne>
                  We believe that sustainable<RoadBrTable /> growth is the key to a solid,<RoadBrTable /> value-<RoadBrWeb />
                  focused community.<RoadBrTable /> Since we strongly believe in<RoadBrTable /> sustainable<RoadBrWeb />
                  growth and want<RoadBrTable /> to give credits to all of you,<RoadBrTable /> we offer free NFT<RoadBrWeb />
                  tokens for<RoadBrTable /> our community. On each<RoadBrTable /> event we are going to give<RoadBrTable /> away<RoadBrWeb />
                  free NFTs to our most<RoadBrTable /> active community members.
               </RoadTextOne>

               <BodyHands>
                  <img 
                     src={hands}
                     alt=""
                  />
               </BodyHands>

               <RoadTextOne>
                  Our NFT holders also gain<RoadBrMob /> access to the whitelist<RoadBrMob /> Raccoon<RoadBrTable /> <RoadBrWeb />
                  city NFT<RoadBrMob /> collection. Our exclusive<RoadBrMob /> members get access to<RoadBrMob /><RoadBrWeb />
                  the<RoadBrTable /> community which<RoadBrMob /> encourages productive<RoadBrMob /> and<RoadBrWeb />
                  interactive<RoadBrTable /> learning,<RoadBrMob /> art creation, networking,<RoadBrMob /> community<RoadBrWeb />
                  events and<RoadBrMob /><RoadBrTable /> exhibitions.
               </RoadTextOne>
               <TextPrice>
                  <li>
                  Get the first 1 - 199 Raccoon NFTs for 0.03 ETH. 
                  </li><RoadBrWeb />
                  <li>
                     The second release including 200 - 499 Raccoon. NFTs will be available for 0.04 ETH.
                  </li><RoadBrWeb />
                  <li>
                     Finally the last 500 - 1000 Raccoon NFTs will be sold for 0.05 ETH each.
                  </li><RoadBrWeb />
               </TextPrice>
            </Bodytext>
         </Container>
      </Main> 
   )
}

export default memo(AboutUs);
