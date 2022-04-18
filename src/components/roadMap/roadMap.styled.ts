import styled from 'styled-components'

export const Main = styled.div`
   padding-top:237px;
   width:100%;
   height: 1195px;

   @media (max-width: 1120px) {
      height: 779px;
      padding-top:130px;
   }

   @media (max-width: 620px) {
      min-height: 815px;
   }

   @media (max-width:440px) {
      min-height: 915px;
   }

   @media (max-width:345px) {
      min-height: 970px;
   }
`

export const Title = styled.div`
   font-family: 'a_DomIno';
   font-style: normal;
   font-weight: 700;
   font-size: 80px;
   line-height: 70px;
   text-align: center;
   color: #413A59;
   margin-bottom:91px;

   @media (max-width:1120px) {
      font-size: 60px;
      line-height: 60px;
      margin-bottom:40px;
   }
`

export const BodyList = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

   @media (max-width:620px) {
      padding: 0 20px;
   }
`

export const ListItems = styled.li`
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 600;
   font-size: 34px;
   line-height: 52px;
   color: #413A59;
   padding-left: 58px;
   margin-bottom:33px;

   @media (max-width:1120px) {
      font-size: 25px;
      line-height: 33px;
      padding-left: 43px;
      margin-bottom:30px;
   }

   @media (max-width:620px) {
      font-size: 19px;
      margin-bottom:20px;
   }

   @media (max-width:520px) {
      font-size: 17px;
      margin-bottom:15px;
   }
`


