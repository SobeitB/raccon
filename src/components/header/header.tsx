import { useMoralis } from "react-moralis";

import {
   Container
} from '../../styles/global.styled'

import {
   HeaderComp,
   HeaderContainer,
   Pagination,
   PaginationSoc,
   ContainerRight,
   Connect,
   MenuMobile,
   MenuItemMobile,
   ConnectMob
} from './header.styled'

import { useEffect, useState, useCallback } from "react";
import {getContract} from '../../params/contract'

import disc from '../../img/DISC.svg';
import ig from '../../img/IG.svg';
import tg from '../../img/TG.svg';
import twi from '../../img/TWI.svg';
import Menu from '../menu/Menu';

declare global {
   interface Window {
      ethereum?: any;
   }
}

interface propsI {
   setContract:(contract: any) => void;
   setComponent:(name: string) => void;
}

const Headaer = ({setContract, setComponent}: propsI) => {
   const { 
      authenticate, 
      logout,
      account, 
   } = useMoralis();
   const [menu, setMenu] = useState<boolean>(false);

   const onContract = async () => {
      const contract = await getContract() 
      setContract(contract)
   }

   useEffect(() => {
      if(typeof account === "string") {
         onContract()
      }
   }, [account, setContract])

   const onComponent = useCallback((name:string) => () => {
      setComponent(name)
   }, [setComponent])

   const connectWallet = () => {
      if(!account) {
         if(!window.ethereum) {
            authenticate({
               provider: "walletconnect",
               chainId: 1,
               mobileLinks: [
                  "metamask",
                  "trust",
                  "rainbow",
                  "coinbase",
                  "blockchain"
               ],
               signingMessage: "Welcome!",
            })
         } else {
            authenticate({signingMessage: "Welcome!"});
         }
      } else {
         logout()
      }
   }

   return (
      <>
         <HeaderComp>
            <Container>
               <HeaderContainer>
                  <Pagination>
                     <p onClick={onComponent('about')} >ABOUT US</p>
                     <p onClick={onComponent('roadmap')} >ROADMAP</p>
                     <p onClick={onComponent('marketplace')} >MARKETPLACE</p>
                     <p onClick={onComponent('faq')} >FAQ</p>
                  </Pagination>

                  <ConnectMob onClick={connectWallet}>
                     {!account ? 'Connect' : 'Logout'}
                  </ConnectMob>

                  <MenuMobile onClick={() => setMenu(!menu)} >
                     <MenuItemMobile />
                     <MenuItemMobile />
                     <MenuItemMobile />
                  </MenuMobile>

                  <ContainerRight>
                     <PaginationSoc>
                        <a href="https://discord.gg/JX9dYpHzDJ">
                           <img 
                              src={disc}
                              width="27.5px"
                              height="22px"
                              alt=""
                           />
                        </a>

                        <a href="https://www.instagram.com/raccoontown_nft/">
                           <img 
                              src={ig}
                              width="29.27px"
                              height="22px"
                              alt=""
                           />
                        </a>

                        <a href="https://t.me/+1bd348RGzus2Njcy">
                           <img 
                              src={tg}
                              width="24.84px"
                              height="22px"
                              alt=""
                           />
                        </a>

                        <a href="https://twitter.com/raccoontown_nft" >
                           <img 
                              src={twi}
                              width="22.18px"
                              height="22px"
                              alt=""
                           />
                        </a>
                     </PaginationSoc>

                     <Connect
                        onClick={connectWallet}
                     >{!account ? 'Connect' : 'Logout'}</Connect>
                  </ContainerRight>
               </HeaderContainer>
            </Container>
         </HeaderComp>

         {menu &&
            <Menu 
               menu={menu}
               changeMenu={setMenu} 
               changeComponent={setComponent}
            />
         }
      </>
   )
}

export default Headaer;
