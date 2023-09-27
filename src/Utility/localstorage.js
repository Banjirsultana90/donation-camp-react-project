const getstoreddonation=()=>{
    const storeddonation=localStorage.getItem('donateditem')
    if(storeddonation){
        return JSON.parse(storeddonation);
    }
    return []
}

const savedDonation=id=>{
    const storeddonations=getstoreddonation()


    const exist=storeddonations.find(cardid =>cardid===id)

    if(!exist){
        storeddonations.push(id)
        localStorage.setItem('donateditem',JSON.stringify(storeddonations))

    }
}
export {savedDonation,getstoreddonation}