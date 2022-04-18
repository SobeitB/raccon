import styled from 'styled-components'

export const MainComp = styled.div`
   position: relative;
   width:100%;
   height:901.3px;
   overflow: hidden;
   background:#FEF7E2;

   @media (max-width:1200px) {
      height:1260px;
   }

   @media (max-width:900px) {
      height:1117px;
   }

   @media (max-width:732px) {
      height:1977.5px;
   }
`

export const BodyBack = styled.div`
   position: absolute;
   right: -45px;
   z-index: 0;
   width: 837px;
   height:100%;
   background: #DEDEDE;

   @media (max-width:1200px) {
      display:none;
   }
`

export const BodyBackMob = styled.div`
   position: absolute;
   display:none;
   z-index: 0;
   bottom:0;

   @media (max-width:1200px) {
      display:block;
   }
`

export const BodyBackImg = styled.img`
   position: relative;
   right: 0;
   z-index: 1;
   width: 837px;
   height:100%;
`

export const ContainerInline = styled.div`
   width:100%;
   height:100%;
   display: flex;
   justify-content: space-between;
   align-items:center;

   @media (max-width:1440px) {
      padding: 0 20px;
   }

   @media (max-width:1200px) {
      flex-direction: column;
      align-items:flex-start;
      justify-content: space-around;
   }

   @media (max-width:732px) {
      justify-content: flex-start;
   }
`

export const BodyTitle = styled.div`
   display: flex;
   flex-direction: column;

   @media (max-width:1200px) {
      margin-left:100px;
   }

   @media (max-width:732px) {
      margin-top:90px;
   }

   @media (max-width:535px) {
      width:100%;
      margin-left:52px;
   }

   @media (max-width:380px) {
      margin-left:38px;
   }

   @media (max-width:355px) {
      margin-left:28px;
   }
`

export const Title = styled.h2`
   font-family: 'a_DomIno';
   font-style: normal;
   font-weight: 700;
   font-size: 78px;
   line-height: 82px;
   color: #413A59;

   margin-bottom:37px;

   @media (max-width:1200px) {
      font-size: 66px;
      line-height: 72px;
   }

   @media (max-width:355px) {
      font-size: 60px;
      margin-bottom:26px;
   }
`

export const OpenSeaLink = styled.a``

export const OpenSea = styled.button`
   width: 163px;
   height: 59px;
   background: #FF542C;
   border-radius: 30px;
   border:none;

   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 700;
   font-size: 20px;
   line-height: 22px;
   color: #FEF7E2;
   cursor: pointer;

   @media (max-width:355px) {
      width: 153px;
      height: 53px;
      font-size: 17px;
   }
`

export const ContCard = styled.div`
   width: 788px;
   position: relative;
   z-index: 0;
   display: flex;
   justify-content:space-between;
   align-items:center;

   @media (max-width:1200px) {
      margin:0 auto;
   }

   @media (max-width:830px) {
      width: 690px;
   }

   @media (max-width:732px) {
      width: 100%;
      margin-top:150px;
      flex-direction: column;
   }
`

export const Card = styled.div`
   width: 242px;
   height: 450px;
   background: #FEF3ED;
   box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25);
   border-radius: 25px;

   @media (max-width:1200px) {
      width: 203px;
      height: 405px;
   }

   @media (max-width:732px) {
      margin-bottom:30px;
      width: 280px;
      height: 450px;
   }

   @media (max-width:530px) {
      margin-bottom:30px;
      width: 242px;
      height: 450px;
   }
`

export const CardImgBody = styled.div.attrs((props:{color: string}) => props)`
   width: 100%;
   height: 245px;
   background: ${(props) => props.color};
   border-radius: 25px 25px 0 0;

   display:flex;
   align-items: center;
   justify-content: center;

   @media (max-width:1200px) {
      height: 206px;
   }

   @media (max-width:732px) {
      height: 235px;
   }

   @media (max-width:530px) {
      height: 245px;
   }
`

export const CardInfo = styled.div`
   width: 100%;
   padding: 0 14px 0 23px;
   display:flex;
   flex-direction: column;
   justify-content: center;
`

export const CardTitle = styled.h4.attrs((props:{last: boolean}) => props)`
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 700;
   font-size: 20px;
   line-height: 22px;
   color: #413A59;
   margin:${(props) => props.last ? "65px auto 10px auto " : "20px 0 9px 0"};

   @media (max-width:1200px) {
      font-size: 19px;
   }

   @media (max-width:732px) {
      font-size: 21px;
   }

   @media (max-width:530px) {
      font-size: 20px;
   }
`

export const CardText = styled.p`
   height:102px;
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
   color: #413A59;

   @media (max-width:1200px) {
      font-size: 12px;
   }

   @media (max-width:732px) {
      font-size: 15px;
   }

   @media (max-width:530px) {
      font-size: 14px;
   }
`

interface propsBtn {
   color: string
}

export const CardBtn = styled.button.attrs((props:propsBtn) => props)`
   width: ${(props) => props.color === "#E4E4A8" ? "66px" : "88px"};
   height: 39px;
   background: ${(props) => props.color};
   border-radius: 30px;
   border:none;

   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 700;
   font-size: 18px;
   line-height: 22px;
   text-align: center;
   color: #413A59;
   cursor: pointer;
   
   margin: ${(props) => props.color === "#E4E4A8" ? "10px auto 0 auto" : "auto 0 0 auto"};

   @media (max-width:1200px) {
      width: ${(props) => props.color === "#E4E4A8" ? "55.45px" : "73.93px"};
      height: 32.76px;
      font-size: 17px;
   }

   @media (max-width:732px) {
      width: ${(props) => props.color === "#E4E4A8" ? "60px" : "80px"};
      height: 39px;
   }

   @media (max-width:530px) {
      width: ${(props) => props.color === "#E4E4A8" ? "66px" : "88px"};
   }
`


