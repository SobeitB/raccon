import {
   MenuContainer,
   MenuComp,
   MenuLink,
   MenuLinkBody,
   BodyLinkImg
} from './Menu.styled'

import disc from '../../img/DISC.svg';
import ig from '../../img/IG.svg';
import tg from '../../img/TG.svg';
import twi from '../../img/TWI.svg';

interface menuProps {   
   menu:boolean;
   changeMenu: (menu: boolean) => void;
   changeComponent: (name: string) => void;
}

let styles = {
   marginRight: '25px',
};

const Menu: React.FC<menuProps> = ({menu, changeMenu, changeComponent}) => {
  return (
   <>
      <MenuContainer onClick={() => changeMenu(!menu)} />

      <MenuComp>
         <MenuLinkBody>
            <MenuLink onClick={() => {
               changeComponent('roadmap')
               changeMenu(!menu)
            }}>ROADMAP</MenuLink>
            <MenuLink onClick={() => {
               changeComponent('marketplace')
               changeMenu(!menu)
            }}>MARKETPLACE</MenuLink>
            <MenuLink onClick={() => {
               changeComponent('faq')
               changeMenu(!menu)
            }}>FAQ</MenuLink>
         </MenuLinkBody>

         <div>
            <BodyLinkImg>
               <a href="https://t.me/+1bd348RGzus2Njcy">
                  <img 
                     src={tg}
                     alt=""
                     width="40.49px"
                     height="36.22px"
                  />
               </a>
               <div style={styles}/>

               <a href="https://twitter.com/raccoontown_nft/status/1507291904517541898?s=21&t=A35aJTYzSEPHVZ5pZrkC7g" >
                  <img 
                     src={twi}
                     alt=""
                     width="44.83px"
                     height="36.22px"
                  />
               </a>
            </BodyLinkImg>

            <BodyLinkImg>
               <a href="https://www.instagram.com/raccoontown_nft/">
                  <img 
                     src={ig}
                     alt=""
                     width="36.16px"
                     height="36.22px"
                  />
               </a>
               <div style={styles}/>

               <a href="https://discord.gg/JX9dYpHzDJ">
                  <img 
                     src={disc}
                     alt=""
                     width="47.73px"
                     height="36.22px"
                  />
               </a>
            </BodyLinkImg>
         </div>
      </MenuComp>
   </>
  );
}

export default Menu;