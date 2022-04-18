import s from './footer.module.css'

import {
   Container
} from '../../styles/global.styled'

import {
   FooterComp,
   Center,
   LeftPagination,
   Text,
   PaginationSoc,
   TwiImg,
   DsImg,
   TgImg,
   IgImg,
   ContCenter,
} from './footer.styled'

const Footer = () => {
   return (
     <FooterComp className={s.footer}>
        <div className={s.footer_paw}>
            <Container>
               <ContCenter>
                  <Center>
                     <LeftPagination>
                        <Text>Join us</Text>
                     </LeftPagination>

                     <PaginationSoc>
                        <a href="https://twitter.com/raccoontown_nft" >
                           <TwiImg className={s.tw} />
                        </a>

                        <a href="https://discord.gg/JX9dYpHzDJ">
                           <DsImg className={s.disc} /> 
                        </a>
                           
                        <a href="https://t.me/+1bd348RGzus2Njcy">
                           <TgImg className={s.tg} />
                        </a>

                        <a href="https://www.instagram.com/raccoontown_nft/">
                           <IgImg className={s.ig} />
                        </a>
                     </PaginationSoc>
                  </Center>
               </ContCenter>
            </Container>
        </div>
     </FooterComp> 
   )
}

export default Footer;
