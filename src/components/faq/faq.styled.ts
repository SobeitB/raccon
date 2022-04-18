import styled from 'styled-components'

export const FaqComp = styled.div`
   width:100%;
   min-height: 854px;

   @media (max-width: 700px) {
      min-height: 730px;
   }
`

export const Center = styled.div`
   width:100%;
   display: flex;
   flex-direction: column;
   align-items: center;
`

export const CloudFaq = styled.div`
   position: relative;
   top: -55px;
   width: 284px;
   height: 248px;

   display: flex;
   align-items: center;
   justify-content: center;

   @media (max-width: 700px) {
      top: -40px;
      width: 206px;
      height: 157.21px;
   }

   @media (max-width: 540px) {
      top: -45px;
      width: 190px;
      height: 145px;
   }
`

export const CloudTitle = styled.h2`
   font-family: 'a_DomIno';
   font-style: normal;
   font-weight: 700;
   font-size: 80px;
   line-height: 70px;
   text-align: center;
   color: #FEF7E2;

   @media (max-width: 700px) {
      font-size: 50px;
      line-height: 60px;
   }
`

export const ListFaq = styled.div`
   width: 893.28px;
   margin-top:54px;

   @media (max-width: 960px) {
      width: 700.28px;
   }

   @media (max-width: 744px) {
      width: 494px;
   }

   @media (max-width: 540px) {
      width: 309px;
   }
`

export const Faq = styled.div.attrs((props: {open: boolean}) => props)`
   width: 100%;
   height: ${(props) => props.open ? '210px' : '100px'};
   overflow: auto;
   display: flex;
   flex-direction: column;
   cursor: pointer;
   border-bottom: 2px solid rgba(65, 58, 89, 0.1);
   padding-right:6px;
   
   margin-bottom:30px;
   
   &::-webkit-scrollbar {
      width: 0px;
      background-color: #f9f9fd;
   }

   @media (max-width: 1100px) {
      /* height: ${(props) => props.open ? '205px' : '100px'}; */
      margin-bottom:40px;
   }
`

export const BodyTitle = styled.div.attrs((props: {open: boolean}) => props)`
   height:${(props) => props.open ? '44px' : '100%'};
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: ${(props) => props.open ? '' : 'center'};
   padding-top: ${(props) => props.open ? '34px' : '0'};
`

export const FaqTitle = styled.h3`
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 700;
   font-size: 34px;
   line-height: 44px;
   display: flex;
   align-items: center;
   color: #413A59;

   @media (max-width: 1100px) {
      font-size: 21px;
      line-height: 33px;
   }
`

export const OpenIcon = styled.div.attrs((props: {open: boolean}) => props)`
   max-width: 28.28px;
   height: 14.14px;
   transform:${(props) => props.open ? 'rotate(-180deg) ' : 'rotate(0deg)'};
`

export const FaqText = styled.h3.attrs((props: {open: boolean}) => props)`
   display: ${(props) => props.open ? 'block' : 'none'};
   max-width:709px;
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 600;
   font-size: 20px;
   line-height: 33px;
   color: #413A59;
   margin-top:35px;

   @media (max-width: 1100px) {
      font-size: 18px;
      line-height: 28px;
   }
`



