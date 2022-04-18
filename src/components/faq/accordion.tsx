import { useState } from 'react';

import {
   Faq,
   BodyTitle,
   FaqTitle,
   OpenIcon,
   FaqText
} from './faq.styled'

import openIcon from './img/openIcon.svg'

interface props {
   title: string;
   text: string;
}

function Accordion({ title, text}:props ) {
   const [open, setOpen] = useState<boolean>(false) 

   const onOpen = () => {
      setOpen(!open)
   }

   return (
      <Faq
         onClick={onOpen}
         open={open}
      >
         <BodyTitle open={open}> 
            <FaqTitle>{title}</FaqTitle>
            <OpenIcon open={open}>
               <img
                  src={openIcon} 
                  alt=""
               />
            </OpenIcon>
         </BodyTitle>

         <FaqText open={open}>{text}</FaqText>
      </Faq>
   );
}

export default Accordion;