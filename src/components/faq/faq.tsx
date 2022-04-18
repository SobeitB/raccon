import {
   FaqComp,
   Center,
   CloudFaq,
   CloudTitle,
   ListFaq
} from './faq.styled'

import s from './faq.module.css'
import Accordion from './accordion';

import { useEffect, useRef, memo } from "react";

interface propsI {
   component:string;
   setComponent:(name: string) => void;
}

const Faq = ({component, setComponent}: propsI) => {

   let mainref = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if(component === 'faq') {
         if(mainref.current !== null) {
            mainref.current.scrollIntoView({
               block:"center",
               inline:"nearest",
               behavior:"smooth"
            })

            setComponent('');
         }
      }
   }, [component])

   return (
      <FaqComp 
         ref={mainref} 
         className={s.faq}
      >
         <Center>
            <CloudFaq className={s.cloud}>
               <CloudTitle>FAQ</CloudTitle>
            </CloudFaq>

            <ListFaq>
               <Accordion 
                  title="1) What's the minimum price?" 
                  text="- Get the first 1 - 199 Raccoon NFTs for 0.03 ETH.
                  - The second release including 200 - 499 Raccoon.
                  NFTs will be available for 0.04 ETH.
                  - Finally the last 500 - 1000  Raccoon NFTs will be
                  sold for 0.05 ETH each.
                  "
               />

               <Accordion 
                  title="2) How can one get on a whitelist?" 
                  text="Before collection release we will publish the link to our whitelist on our Twitter and Instagram accounts. Follow us to learn more about future presales "
               />

               <Accordion 
                  title="3) How many tokens are there in total?" 
                  text="The first collection contains 1000 unique tokens.
                  Mint 10 00  unique Raccoon NFTs  (only for NFT Raccoon town) - each NFT holder will become a partner of the Raccoon city project and future game development. "
               />
            </ListFaq>
         </Center>
      </FaqComp>
   )
}

export default memo(Faq);
