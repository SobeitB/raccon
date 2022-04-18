import styled from 'styled-components'

export const HeaderComp = styled.header`
   width:100%;
   height: 83px;
   background: #413A59;

   @media (max-width:777px) {
      background: #FEF7E2;
   }
`

export const HeaderContainer = styled.div`
   width:100%;
   height: 100%;
   display: flex;
   justify-content: space-between;

   @media (max-width: 1490px) {
      padding:0 10px;
   }

   @media (max-width:777px) {
      align-items: center;
      padding:0 50px;
   }
`

export const Pagination = styled.div`
   width: 498px;
   height: 100%;
   display: flex;
   justify-content: space-between;
   align-items:center;

   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 700;
   font-size: 18px;
   line-height: 22px;
   color: #FFFFFF;

   & *{
      cursor: pointer;
   }

   @media (max-width: 980px) {
      width: 435px;
   }

   @media (max-width:777px) {
      display: none;
   }
`

export const ContainerRight = styled.div`
   display: flex;
   justify-content: space-between;
   align-items:center;

   @media (max-width:777px) {
      display: none;
   }
`

export const PaginationSoc = styled.div`
   width: 157px;
   height: 100%;
   display: flex;
   justify-content: space-between;
   align-items:center;

   & *{
      cursor: pointer;
   }

   @media (max-width: 980px) {
      width: 130px;
   }
`

export const Connect = styled.button`
   width: 128.51px;
   height: 40px;
   border: 2px solid #8F858F;
   outline: none;
   background:none;
   border-radius: 36px;
   margin-left:41px;

   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 700;
   font-size: 18px;
   line-height: 22px;
   text-align: center;
   color: #FFFFFF;
   cursor:pointer;

   @media (max-width: 980px) {
      margin-left:27px;
   }
`

export const ConnectMob = styled(Connect)`
   width: 112.95px;
   height: 36px;
   display: none;
   margin-left:0px;
   color: #FF542C;
   border: 2px solid #FF542C;

   font-size: 15px;
   line-height: 29px;

   @media (max-width:777px) {
      display: block;
   }
`

export const MenuMobile = styled.div`
   flex-direction: column;
   justify-content: space-between;
   height: 20px;
   cursor:pointer;

   display: none;
   @media (max-width:777px) {
      display: flex;
   }
`

export const MenuItemMobile = styled.div`
   width: 30px;
   height: 4px;   
   background: #FE3E08;
`









