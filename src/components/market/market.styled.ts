import styled from 'styled-components'

export const Main = styled.div`
   padding-top:330px;
   width:100%;
   height: 1616px;
   overflow: hidden;

   @media(max-width: 1050px) {
      height: 1310px;
      padding-top: 270px;
   }

   @media(max-width: 730px) {
      height: 1510px;
      padding-top: 220px;
   }
`

export const Title = styled.h1`
   font-family: a_DomIno;
   font-style: normal;
   font-weight: 700;
   font-size: 80px;
   line-height: 70px;
   text-align: center;
   color: #FEF7E2;
`

export const Center = styled.div`
   max-width:873px;
   margin: 0 auto;

   @media(max-width: 1050px) {
      max-width: 610px;
   }

   @media(max-width: 730px) {
      width: 700px;
      max-width: 700px;
      position:relative;
      margin:0;
      transform: translate(-50%,-50%);
      left:50%;
      top:29%;
   }
`

export const MarketBody = styled.div`
   position: relative;
   width: 100%;
   height: 873px;
   margin-top:65px;

   @media(max-width: 1050px) {
      height: 610px;
   }

   @media(max-width: 730px) {
      height: 700px;
   }
`

export const FlyRaccon = styled.div`
   position: absolute;
   z-index:10;

   & img {
      max-width: 240px;
      height: 240px;
   }

   @media(max-width: 1340px) {
      & img {
         max-width: 200px;
         height: 200px;
      }
   }

   @media(max-width: 1050px) {
      & img {
         max-width: 143.81px;
         height: 143.81px;
      }
   }

   @media(max-width: 750px) {
      & img {
         width: 120px;
         height: 120px;
      }
   }

   @media(max-width: 730px) {
      z-index:2;
      top:0;
      transform: translate(-50%,-50%);
   } 
`

export const FlyTopLeft = styled(FlyRaccon)`
   left:-60px;
   top:153px;

   @media(max-width: 1050px) {
      left:-52px;
      top:150px;
   }

   @media(max-width: 730px) {
      z-index:3;
      top:580px;
      left:41%;
   } 
`

export const FlyTopBottom = styled(FlyRaccon)`
   left:-60px;
   bottom:185px;

   @media(max-width: 1050px) {
      left:-46px;
      bottom:150px;
   }

   @media(max-width: 730px) {
      z-index:3;
      top:642px;
      left:41%;
   } 
`

export const FlyTopRight = styled(FlyRaccon)`
   right:-60px;
   top:153px;

   @media(max-width: 1050px) {
      right:-46px;
      top:150px;
   }

   @media(max-width: 730px) {
      z-index: 3;
      top: 735px;
      right: 27.5%;
   } 
`

export const FlyBottomRight = styled(FlyRaccon)`
   right:-60px;
   bottom:153px;

   @media(max-width: 1050px) {
      right:-46px;
      bottom:154px;
   }

   @media(max-width: 730px) {
      right:195px;
      bottom:0;
      top:607px
   }
`

export const Circle = styled.div`
   position: relative;
   z-index:1;
   width:100%;
   height:100%;
   border-radius:50%;
   background: #FEF7E2;
   box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25);

   display: flex;
   flex-direction: column;
   justify-content:center;
   align-items: center;
`

export const Cards = styled.div`
   width: 200px;
   height: 200px;
   position: absolute;
   z-index:0;
   top:13px;

   & img {
      width: 100%;
      height: 100%;
   }

   @media(max-width: 1050px) {
      width: 99.74px;
      height: 99.74px;
      top:62px;
      display: none;
      & img {
         width: 100%;
         height: 100%;
      }
   }

   @media(max-width: 730px) {
      top:105px;
   }  
`

export const CardsMob = styled(Cards)`
   display: none;
   width: 99.74px;
   height: 99.74px;
   & img {
      width: 100%;
      height: 100%;
   }
   top:54px;

   @media(max-width: 1050px) {
      display: block;
   }

   @media(max-width: 730px) {
      top:105px;
   }  
`

export const CardMint = styled.div`
   position: relative;
   z-index:1;
   width: 391px;
   min-height: 570px;
   border-radius:40px;
   background: #FEF3ED;
   box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25);

   & img {
      width: 94%;
   }

   display: flex;
   flex-direction: column;
   justify-content:center;
   align-items: center;

   @media(max-width: 1050px) {
      width: 234.29px;
      min-height: 350.17px;

      & img {
         width: 100%;
      }
      padding:0 17px 0 17px;
   }

   @media(max-width: 730px) {
      z-index:10;
   } 
`

export const BtnMint = styled.button`
   width: 292px;
   height: 75px;
   background: #FF542C;
   border-radius: 50px;
   border:none;

   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 700;
   font-size: 28px;
   line-height: 22px;
   text-align: center;
   color: #FEF7E2;
   cursor:pointer;

   @media(max-width: 1050px) {
      width: 174.97px;
      height: 44.94px;

      font-size: 20px;
      line-height: 22px;
   }
`

export const BodyInfo = styled.div`
   width: 100%;
   margin-top:16.55px;
   display:flex;
   flex-direction: column;
`

export const NameInfo = styled.p`
   font-family: DM Sans;
   font-style: normal;
   font-weight: 500;
   font-size: 20px;
   line-height: 16px;
   color: #121319;
   padding-left: 27px;
`

export const NameIndex = styled.span`
   font-family: DM Sans;
   font-style: normal;
   font-weight: 500;
   font-size: 20px;
   line-height: 16px;
   color: rgba(43, 44, 49, 0.4);
   position: relative;
   top: 2px;
   left: 8px;
`

export const BodyPriceMint = styled.div`
   width: 85%;
   margin-top:13.7px;
   display:flex;
   justify-content: space-between;
   padding: 0 18px 0 27px;
`

export const BodyPrice = styled.div`
   width:35%;
   display:flex;
   justify-content: space-between;
   align-items: center;

   @media (max-width:400px) {
      margin-right:15px;
   }
`

export const Price = styled.span`
   font-family: DM Sans;
   font-style: normal;
   font-weight: normal;
   font-size: 16px;
   line-height: 16px;
   color: #121319;
   margin-left:8px;
`

export const DeleateNftHint = styled.div`
   position: absolute;
   top:5px;
   right:40px;
   width: 245px;
   height: 3.4em;
   background-color: #000;
   color: #cc0000c7;
   border-radius: 15px 0 15px 0;

   font-size:13px;
   font-weight:bold;
   font-family:DM Sans;
   padding-left:10px;

   @media (max-width:380px) {
      font-size:10px;
      width: 140px;
      height: 3.8em;
      overflow: hidden;
      padding-top:4px;
      top:-10px;
   }

   opacity:0;
   transition: opacity 0.5s;
`

export const DeleateNftBody = styled.div`
   position: absolute;
   z-index: 10000;
   top:10px;
   right:15px;

   &:hover ${DeleateNftHint}{
      opacity:1;
   }

   @media (max-width:380px) {
      top:18px;
   }
`

export const DeleateNft = styled.button`
   box-sizing: content-box;
   width: 2em;
   height: 2em;
   padding: 0.25em 0.25em;
   color: #000;
   border: 0;
   border-radius: 0.25rem;
   opacity: .8;
   cursor: pointer;
   background-color:#00000075;   
`

export const BodyInfoNft = styled.div`
   margin-top:15px;
   margin-bottom:10px;
   opacity:0.8;
   
   @media(max-width: 1050px) {
      margin-top:10px;
      margin-bottom:5px;
   }
`

export const TotalSupply = styled.p`
   font-family: DM Sans;
   font-style: normal;
   font-weight: bold;
   font-size: 17px;
   line-height: 29px;
   color: #000000;
   margin-top:5px;
   opacity: 0.8;
`

export const CounterBody = styled.div`
   width:70%;
   display:flex;
   justify-content: space-between;
   align-items: center;
`

export const Counter = styled.button`
   width: 35px;
   height: 35px;
   appearance: none;
   border: none;
   background: none;
   font-size: 32px;
   outline: none;
   border: 2px solid #FF542C;
   color:#FF542C;
   cursor: pointer;
   background-color:transparent;
   border-radius: 2px;
   transition: all 0.15s;

   display: flex;
   align-items: center;
   justify-content: center;
   margin-top:13px;
   margin-bottom:13px;
`

export const CounterText = styled.p`
   font-family: DM Sans;
   font-style: normal;
   font-weight: bold;
   font-size: 22px;
   line-height: 29px;
   color: #000000;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`