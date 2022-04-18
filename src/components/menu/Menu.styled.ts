import styled from 'styled-components'

export const MenuContainer = styled.div`
   position: fixed;
   top:0;
   z-index:1900;
   width: 100%;
   height: 100%;
   overflow: hidden;
`

export const MenuComp = styled.div`
   position:fixed;
   z-index:2000;
   top:0;
   right: 0;
   box-sizing: border-box;
   width: 306px;
   height: 100%;
   padding-top:30px;
   padding-bottom:44px;
   padding-left:32px;
   background: #413A59;
   box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25);

   display: flex;
   flex-direction: column;
   justify-content:space-between;
`

export const MenuLinkBody = styled.div`
   display: flex;
   flex-direction: column;

   & *{
      cursor: pointer;
   }
`

export const MenuLink = styled.p`
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: bold;
   font-size: 22px;
   line-height: 64px;
   color: #FFFFFF;
   margin-bottom:5px
   cursor: pointer;
   display:block;
   text-decoration: none;
`

export const BodyLinkImg = styled.div`
   display: flex;
   &:nth-child(1) {
      margin-bottom:27px;
   }

   & *{
      cursor: pointer;
   }
`








