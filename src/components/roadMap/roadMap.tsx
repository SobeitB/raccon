import s from './roadMap.module.css'

import {
   Main,
   Title,
   BodyList,
   ListItems,
} from './roadMap.styled'

import { useEffect, useRef,memo } from "react";

interface propsI {
   component:string;
   setComponent:(name: string) => void;
}
const RoadMap = ({component, setComponent}: propsI) => {
   let mainref = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if(component === 'roadmap') {
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
      <Main 
         className={s.main}
         ref={mainref}
      >
         <Title>Roadmap</Title>

         <BodyList>
            <ul>
               <ListItems className={s.list}>Mint 1000 unique NFT raccoon collection</ListItems>
               <ListItems className={s.list}>Create the biggest community</ListItems>
               <ListItems className={s.list}>Launch Raccoon town designer-inspired<br /> merch</ListItems>
               <ListItems className={s.list}>Joint efforts with a famous designer to<br /> develop and publish 3D Raccoon town NFTs<br /> for the Sandbox</ListItems>
               <ListItems className={s.list}>We are focused on people, therefore the<br /> Raccoon town ecosystem includes a creative<br /> community</ListItems>
            </ul>
         </BodyList>
      </Main>
   )
}

export default memo(RoadMap);