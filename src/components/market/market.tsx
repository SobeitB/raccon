
import {
   Container
} from '../../styles/global.styled'

import s from './market.module.css'
import {
   Main,
   Title,
   MarketBody,
   FlyTopLeft,
   FlyTopBottom,
   FlyTopRight,
   FlyBottomRight,
   Circle,
   Center,
   Cards,
   CardsMob,
   CardMint,
   BtnMint,
   BodyInfo,
   NameInfo,
   NameIndex,
   BodyPriceMint,
   BodyPrice,
   Price,
   DeleateNftBody,
   DeleateNftHint,
   DeleateNft,
   TotalSupply,
   BodyInfoNft,
   Counter,
   CounterBody,
   CounterText
} from './market.styled'

import raccon from './img/raccon.png'
import racconFly from './img/racconFly.png'
import flyTwo from './img/flyTwo.png'
import flyThree from './img/flyThree.png'
import flyFour from './img/flyFour.png'
import CardsRaccon from './img/Cards.png'
import CardsRacconMob from './img/cardsMob.png'
import eth from './img/eth.svg'

import { useEffect, useRef, useState, useCallback } from "react";
import { useWeb3ExecuteFunction, useMoralis, useChain } from "react-moralis";
import abi from '../../json/abi.json';
import {CONTRACT_ADDRESS} from '../../params/contract'
import {onIdNft} from './meta'

interface propsI {
   component:string;
   contract:any;
   setComponent:(name: string) => void;
   setErrors:(nameError: string) => void;
}

const Market = ({component, setComponent, contract, setErrors}: propsI) => {
   let mainref = useRef<HTMLDivElement>(null);
   const [mintItem, setMintItem] = useState<false | any>(false);
   const [supply, setSupply] = useState<string>('');
   const [price, setPrice] = useState<string>('');
   const [counter, setCounter] = useState<number>(1);

   const {Moralis, chainId, account, authenticate } = useMoralis();
   const {switchNetwork} = useChain();
   const { fetch } = useWeb3ExecuteFunction();

   const onCounter = (name: string) => () => {
      if(name === "inc") {
         // setCounter(counter + 1)
         counter < 5 && setCounter(counter + 1)
      } else {
         counter > 1 && setCounter(counter - 1)
      }
   }

   useEffect(() => {
      const nftBody = async (id: number) => {
         onIdNft(id, setMintItem)
      }

      const onEvent = async () => {
         const contractAwait = await contract;
         const newPrice = await sumPrice();
         setPrice(String(newPrice))
         contractAwait.on('returnNewId', nftBody)
      }

      const offEvent = async () => {
         const contractAwait = await contract;
         contractAwait.off('returnNewId', nftBody)
      }

      if(contract) {
         onEvent()
      }

      return () => {
         if(contract) {
            offEvent()
         }
      }
   }, [contract, chainId])

   const sumPrice = useCallback(async () => {
      let result;
      let totalSupply = {
         contractAddress: CONTRACT_ADDRESS,
         functionName: "totalSupply",
         abi: abi,
         params: {},
      };

      if(account) {
         await fetch({
            params: totalSupply,
            onSuccess: (tx:any) => {
               const idToken:number = Number(tx)
               setSupply(String(1000 - Math.floor(idToken)))
               
               if(idToken < 200) {
                  result = 0.03;
               } else if(idToken < 500) {
                  result = 0.04;
               } else if(idToken < 1000) {
                  result = 0.05;
               }
            },
            onError: (error:any) => {
               console.log(error);
            }
         })
         
         return result;
      }
   }, [account, chainId])

   useEffect(() => {
      if(component === 'marketplace') {
         if(mainref.current !== null) {
            mainref.current.scrollIntoView({
               block:"center",
               inline:"nearest",
               behavior:"smooth"
            })

            setComponent('');
         }
      }

   }, [component])

   const mintNft = async () => {
      // проверяем, подключена сеть майннет или нет
      if (account) { 
         if(chainId === '0x1') {
            const sum:number = Number(await sumPrice());
            let options = {
               contractAddress: CONTRACT_ADDRESS,
               functionName: "mint",
               abi: abi,
               params: {
                  _count: [counter]
               },
               msgValue: Moralis.Units.ETH(sum * counter),
            };

            await fetch({
               params: options,
               onSuccess: (tx:any) => tx.wait().then((newTx:any) => {
                  // console.log(newTx)
               }),
               onError: (error:any) => {
                  console.log(error)
                  setErrors('Please check your balance.')
               },
            })
         } else {
            setErrors('Connect with one of available wallet.')
            switchNetwork('0x1')
         }
      } else {
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
      } 
   }

   return (
      <div
         ref={mainref} 
         className={s.market}
      >
         <div
            ref={mainref} 
            className={s.marketImg}
         >
            <Main >
               <Container>
                  <Title>Marketplace</Title>
                  <Center>
                     <MarketBody>
                        <FlyTopLeft>
                           <img src={racconFly} alt="" />
                        </FlyTopLeft>

                        <FlyTopBottom>
                           <img src={flyTwo} alt="" />
                        </FlyTopBottom>

                        <FlyTopRight>
                           <img src={flyThree} alt="" />
                        </FlyTopRight>

                        <FlyBottomRight>
                           <img src={flyFour} alt="" />
                        </FlyBottomRight>

                        <Circle>
                           <Cards>
                              <img src={CardsRaccon} alt="" />
                           </Cards>

                           <CardsMob>
                              <img src={CardsRacconMob} alt="" />
                           </CardsMob>

                           {!mintItem &&
                              <CardMint>
                                 <img src={raccon} alt="" />

                                 <BodyInfoNft>
                                    {price && price !== 'undefined' && 
                                       <BodyPrice>
                                          <img src={eth} alt="" />
                                 
                                          <Price>{price}</Price>
                                       </BodyPrice>
                                    }
                                    
                                    {supply && 
                                       <TotalSupply> Available {supply}/1000</TotalSupply>
                                    }
                                 </BodyInfoNft>

                                 <BtnMint onClick={mintNft}>Random mint</BtnMint>
                                 <CounterBody>
                                    <Counter onClick={onCounter('dec')}>-</Counter>
                                    <CounterText>{counter}</CounterText>
                                    <Counter onClick={onCounter('inc')}>+</Counter>
                                 </CounterBody>
                              </CardMint>
                           }

                           {mintItem &&
                              <CardMint>
                                 <img 
                                    src={mintItem.image} alt="" 
                                 />

                                 <DeleateNftBody>
                                    <DeleateNft 
                                       onClick={() => {
                                          setMintItem(false)
                                       }}
                                       className={s.deleate} 
                                    />
                                    <DeleateNftHint >do you want to remove this nft from viewing in order to buy another one?</DeleateNftHint>
                                 </DeleateNftBody>

                                 <BodyInfo>
                                    <NameInfo>
                                       RACCOON
                                       <NameIndex>{mintItem.name.replace(/[^0-9]/g,"")}</NameIndex>
                                    </NameInfo>
                                 
                                    <BodyPriceMint>
                                       <BodyPrice>
                                          <img src={eth} alt="" />
                           
                                          <Price>{price}</Price>
                                       </BodyPrice>
                                    </BodyPriceMint>
                                 </BodyInfo>

                              </CardMint>
                           }
                        </Circle>
                     </MarketBody>
                  </Center>
               </Container>
            </Main>
         </div>
      </div>
   )
}

export default Market;