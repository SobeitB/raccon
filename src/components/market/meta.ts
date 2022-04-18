export const onIdNft = async (id: number, setMintItem: (idNft: number) => void) => {
   let idNft:any = await fetch(`https://gateway.pinata.cloud/ipfs/QmZjDjVpkFXyUEPPwZcE1KTuSzbgna86sQ24DR71uDSSeT/${String(id)}.json`)
   idNft = await idNft.json()
   setMintItem(idNft)
}