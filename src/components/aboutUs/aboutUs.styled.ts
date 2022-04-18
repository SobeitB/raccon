import styled from 'styled-components'

export const Main = styled.div`
   margin-top: -179px;
   position: relative;
   z-index:1;
   width:100%;
   height:2400px;

   @media (max-width: 1625px) {
      height:2350px;
   }

   @media (max-width: 1550px) {
      height:2000px;
   }

   @media (max-width: 1500px) {
      height:3960px;
   }

   @media (max-width: 1390px) {
      height:3820px;
   }

   @media (max-width:1235px) {
      height:3569px;
   }

   @media (max-width:1150px) {
      height:3450px;
   }

   @media (max-width:1140px) {
      margin-top: -119px;
   }

   @media (max-width:1110px) {
      height:3200px;
   }

   @media (max-width:985px) {
      height:3050px;
   }

   @media (max-width:870px) {
      height:2900px;
   }

   @media (max-width:875px) {
      height:2870px;
   }

   @media (max-width:800px) {
      height: 4840px;
      margin-top:-63px;
   }

   @media (max-width:753px) {
      height: 4640px;
   }

   @media (max-width:732px) {
      margin-top:-13px;
   }

   @media (max-width:600px) {
      margin-top: -30px;
      height: 4640px;
   }

   @media (max-width:595px) {
      height: 4735px;
   }

   @media (max-width:570px) {
      height: 4665px;
   }

   @media (max-width: 560px) {
      height: 4865px;
   }

   @media (max-width: 400px) {
      height: 4965px;
   }

   @media (max-width: 414px) {
      height: 5000px;
   }

   @media (max-width: 380px) {
      height: 5000px;
   }

   @media (max-width: 370px) {
      height: 5200px;
   }
`

export const InlineCont = styled.div`
   display: flex;
   justify-content: space-between;
`

export const BodyItem = styled.div`
   width:50%;
   @media (max-width: 1500px) {
      width:100%;
   }
`

export const Cloud = styled.div`
   max-width: 698.73px;
   height: 490px;
   padding: 0 115px;
   margin-top:184px;

   @media (max-width: 1500px) {
      max-width: 840px;
      height: 586px;
      margin:250px auto 0 auto;
   }

   @media (max-width: 1100px) {
      max-width: 800px;
      height: 560px;
      margin:200px auto 0 auto;
   }

   @media (max-width: 870px) {
      max-width: 760px;
      height: 530px;
   }

   @media (max-width:800px) {
      max-width: 390px;
      height: 790px;  
      margin:300px auto 0 auto;
      padding: 0 3px;
   }

   @media (max-width:560px) {
      margin:200px auto 0 auto;
   }
`

export const CloudContent = styled.div`
   width: 100%;
   height: 300px;
   overflow: auto;
   &::-webkit-scrollbar {
      width: 0;
   }

   @media (max-width: 1500px) {
      height: 90%;
      padding:0 90px;
   }

   @media (max-width: 1340px) {
      height: 424px;
   }

   @media (max-width: 1100px) {
      height: 390px;
   }

   @media (max-width: 870px) {
      height: 360px;
   }

   @media (max-width: 800px) {
      height: 700px;
   }
`

export const CloudTitle = styled.h2`
   position: relative;
   top:-9px;
   font-family: 'a_DomIno';
   font-style: normal;
   font-weight: 700;
   font-size: 80px;
   line-height: 70px;
   text-align: center;
   color: #413A59;

   @media (max-width: 1500px) {
      top:5px;
   }

   @media (max-width: 1340px) {
      font-size: 65px;
      line-height: 60px;
      top:13px;
   }

   @media (max-width: 1100px) {
      font-size: 60px;
      top:11px;
   }

   @media (max-width: 870px) {
      font-size: 55px;
      top:7px;
   }

   @media (max-width: 800px) {
      font-size: 60px;
      top:0px;
   }
`

export const CloudTextOne = styled.h4`
   margin-top:35px;
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 600;
   font-size: 20px;
   line-height: 33px;
   text-align: center;
   color: rgba(65, 58, 89, 0.7);

   @media (max-width: 1500px) {
      font-size: 19px;
      line-height: 47px;
      text-align: left;
   }

   @media (max-width: 1340px) {
      font-size: 23px;
      line-height: 36px;
      margin-top:40px;
   }

   @media (max-width: 1100px) {
      font-size: 20px;
      line-height: 32px;
   }

   @media (max-width: 870px) {
      margin-top:25px;
   }
`

export const BodyInfo = styled.div`
   margin-top:0px;
   margin-left:110px;

   @media (max-width: 1500px) {
      display:flex;
      flex-direction: column;
      align-items: flex-end;
      position: relative;
   }

   @media (max-width: 1460px) {
      width:85%;
   }

   @media (max-width: 1390px) {
      width:72%;
   }

   @media (max-width: 800px) {
      width:75%;
   }

   
   @media (max-width: 560px) {
      width:78%;
   }

   @media (max-width: 560px) {
      width:70%;
   }

   @media (max-width: 425px) {
      width:65%;
   }
`

export const TextInfo = styled.p`
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 600;
   font-size: 24px;
   line-height: 40px;
   color: #413A59;

   @media (max-width: 1550px) {
      font-size: 22px;
      height: 280px; 
      overflow: auto;
   }

   @media (max-width: 1500px) {
      font-size: 26px;
      height: 297px; 
      
      position: relative;
      left:-316px;
      text-align: right;
   }

   @media (max-width: 1500px) {
      font-size: 23px;
      left:0px;
   }

   @media (max-width: 1110px) {
      font-size: 20px;
      margin-top:10px;
   }

   @media (max-width: 870px) {
      height:250px;
      &::-webkit-scrollbar {
         width: 5px;
      }
   }

   @media (max-width: 800px) {
      height: 750px;
      font-size:24px
   }

   @media (max-width: 600px) {
      margin-top:20px;
      font-size:22px
   }

   @media (max-width: 560px) {
      height:800px;
      font-size:17px
   }
`

export const TextInfoWhite = styled.p`
   margin-top:40px;
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 600;
   font-size: 24px;
   line-height: 40px;
   color: #FEF7E2;

   border-left:5px solid #FEF7E2;
   padding-left:20px;

   & li{
      list-style:none;
   }

   li:before{
      content: '';
      display: inline-block;
      height:16px;
      width: 16px;
      vertical-align: middle;
      border-radius:50%;
      background-color:#fff;
      margin-right:10px;
   }

   @media (max-width:1740px) {
      margin-top:15px;
   }

   @media (max-width:1624px) {
      margin-top:15px;
      font-size: 21px;
   }

   @media (max-width:1550px) {
      font-size: 21px;
   }

   @media (max-width: 1500px) {
      text-align: left;
      position: relative;
      right:230px;
      margin-top:40px;
      border-left:0px solid #FEF7E2;
      line-height: 43px;
      font-size: 24px;
   }

   @media (max-width: 1390px) {
      max-width:800px;
      font-size: 23px;
      right:-170px;
      margin-right:auto;
   }

   @media (max-width: 1110px) {
      right:7px;
      font-size: 18px;
      margin-top:-2px;
   }

   @media (max-width: 1100px) {
      margin-top:20px;
   }

   @media (max-width: 870px) {
      margin-top:5px; 
   }

   @media (max-width: 800px) {
      margin-top:30px; 
   }

   @media (max-width: 600px) {
      margin-top:70px; 
      right:75px;
   }

   @media (max-width: 560px) {
      font-size: 19px;
      line-height: 37px;
   }
`

export const Bodytext = styled.div`
   position: absolute;
   right: 90px;
   z-index:100;
   margin-top:90px;

   @media (max-width:1625px) {
      right: 0px;
      margin-top:-20px;
   }

   @media (max-width:1550px) {
      right: 0px;
      margin-top:30px;
   }

   @media (max-width:1500px) {
      left: 150px;
      margin-top:1260px;
   }

   @media (max-width:1390px) {
      left: 180px;
      margin-top:1100px;
   }

   @media (max-width:1235px) {
      margin-top:920px;
   }

   @media (max-width:1150px) {
      margin-top:850px;
   }

   @media (max-width:1110px) {
      margin-top:770px;
      left:120px;
   }

   @media (max-width:985px) {
      margin-top:670px;
      left:100px;
   }

   @media (max-width: 870px) {
      margin-top:590px;
      left:80px;
   }

   @media (max-width: 825px) {
      margin-top:600px;
      left:60px;
   }

   @media (max-width: 800px) {
      margin-top:690px;
      left:90px;
   }

   @media (max-width: 800px) {
      margin-top:730px;
   }

   @media (max-width: 600px) {
      margin-top:785px;
      left:100px;
   }

   @media (max-width: 600px) {
      left:70px;
      margin-top:575px;
   }

   @media (max-width: 560px) {
      left:70px;
      margin-top:590px;
   }

   @media (max-width: 560px) {
      margin-top:700px;
   }

   @media (max-width: 390px) {
      left:40px;
   }
`

export const TitleRoad = styled.h1`
   width: 393px;
   margin: auto;
   font-family: a_DomIno;
   font-style: normal;
   font-weight: 700;
   font-size: 80px;
   line-height: 70px;
   text-align: center;
   color: #413A59;

   @media (max-width: 1700px) {
      font-size: 65px;
   }

   @media (max-width: 1550px) {
      font-size: 55px;
      margin-left:200px;
   }

   @media (max-width: 1500px) {
      font-size: 80px;
      margin-left:30px;
   }

   @media (max-width:1110px) {
      font-size: 60px;
      margin-left:-50px;
   }

   @media (max-width:985px) {
      font-size: 55px;
      margin-left:-70px;
   }

   @media (max-width: 870px) {
      font-size: 50px;
      margin-left:-80px;
   }

   @media (max-width: 800px) {
      font-size: 80px;
      margin-left:-30px;
      text-align:left;
   }

   @media (max-width: 753px) {
      font-size: 65px;
   }

   @media (max-width: 450px) {
      font-size: 55px;
   }

   @media (max-width: 450px) {
      font-size: 55px;
   }

   @media (max-width: 432px) {
      width: 233px;
   }
`

export const RoadTextOne = styled.p`
   position: relative ;
   margin-top:50px;
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 600;
   font-size: 24px;
   line-height: 40px;
   color: #413A59;
   right: 26px;

   @media (max-width:1500px) {
      width: 100%; 
      font-size: 27px;
      margin-top:100px;

      &:nth-child(2) {
         width: 400px;
         margin-top:60px;
      }
   }

   @media (max-width:1390px) {
      margin-top:70px;

      &:nth-child(2) {
         margin-top:60px;
      }
   }

   @media (max-width:1235px) {
      font-size:23px;
   }

   @media (max-width:985px) {
      font-size:20px;
      margin-top:40px;
   }

   @media (max-width: 870px) {
      &:nth-child(2) {
         margin-top:30px;
      }
   }

   @media (max-width: 825px) {
      font-size:18px;
      &:nth-child(2) {
         margin-top:20px;
      }
   }

   @media (max-width: 800px) {
      font-size:22px;
      margin-top:50px;
      &:nth-child(2) {
         margin-top:50px;
      }
   }

   @media (max-width: 753px) {
      &:nth-child(2) {
         margin-top:20px;
      }
   }

   @media (max-width: 600px) {
      font-size:20px;
      margin-top:25px;
      &:nth-child(2) {
         margin-top:40px;
      }
   }

   @media (max-width: 560px) {
      &:nth-child(2) {
         width:250px;
      }
   }

   @media (max-width: 560px) {
      &:nth-child(2) {
         margin-top:10px;
      }
   }
`

export const RoadBrWeb = styled.br`
   @media (max-width:1500px) {
      display: none;
   }
`

export const RoadBrTable = styled.br`
   display: none;
   @media (max-width:1500px) {
      display: block;
   }

   @media (max-width:800px) {
      display: none;
   }
`

export const RoadBrMob = styled.br`
   display: none;
   @media (max-width:800px) {
      display: block;
   }
`

export const TextPrice = styled.p`
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 600;
   font-size: 24px;
   line-height: 40px;
   text-align: center;
   color: #70C562;
   margin-top:50px;
   position: relative;
   left: -170px;
   & li{
      list-style:none;
   }

   li:before{
      content: '';
      display: inline-block;
      height:16px;
      width: 16px;
      vertical-align: middle;
      border-radius:50%;
      background-color:#70C562;
      margin-right:10px;
   }

   @media (max-width:1550px) {
      left: -220px;
   }

   @media (max-width:1500px) {
      text-align: left;
      left: -24px;
   }

   @media (max-width:985px) {
      font-size:20px;
      margin-top:20px;
   }

   @media (max-width: 600px) {
      font-size:22px;
   }
`

export const BodyHands = styled.div`
   display:none;
   @media (max-width:800px) {
      display:block;
   }

   @media (max-width: 425px) {
      position: relative;
      left:-70px
   }

   @media (max-width: 380px) {
      left:-70px
   }

   @media (max-width: 330px) {
      left:-90px
   }
`





