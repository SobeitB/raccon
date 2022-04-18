import styled from 'styled-components'

export const FooterComp = styled.footer`
   width:100%;
   height: 400px;
   position: relative;
   @media (max-width:1170px) {
      height: 355px;
   }
`

export const ContCenter = styled.div`
   height:100%;
   display: flex;
   align-items: center;
`

export const Center = styled.div`
   width:100%;
   height: 45%;
   display: flex;
   justify-content: space-between;
   align-items: center;

   @media (max-width:1450px) {
      padding:0 40px;
   }
   padding:0 20px;
   flex-direction:column;
   justify-content: center;
   align-items: flex-start;
`

export const LeftPagination = styled.div`
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;

   @media (max-width:1080px) {
      order:2;
      height: 20%;
   }
`

export const Text = styled.h2`
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 700;
   font-size: 47px;
   color: #FFFFFF;

   &:nth-last-child(1){
      margin-top:18px;
   }

   @media (max-width:1480px) {
      font-size: 40px;
   }

   @media (max-width:450px) {
      &:nth-last-child(1){
         margin-top:10px;
      }
      font-size: 30px;
   }
`

export const PaginationSoc = styled.div`
   width:335.41px;
   height: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;

   @media (max-width:1480px) {
      width:300.41px;
   }

   @media (max-width:1080px) {
      order:1;
      height: 20%;
      margin-bottom:31px;
   }

   @media (max-width:450px) {
      margin-bottom:10px;
      width:270px;
   }
`

export const TwiImg = styled.div`
   width: 58.74px;
   height: 47px;

   @media (max-width:1480px) {
      width: 36.57px;
      height: 29.49px;
   }
`

export const DsImg = styled.div`
   width: 62.53px;
   height: 47px;

   @media (max-width:1480px) {
      width: 41px;
      height: 29.49px;
   }
`

export const TgImg = styled.div`
   width: 53.06px;
   height: 47px;

   @media (max-width:1480px) {
      width: 35.03px;
      height: 29.49px;
   }
`

export const IgImg = styled.div`
   width: 50.37px;
   height: 48px;

   @media (max-width:1480px) {
      width: 33px;
      height: 31px;
   }
`

