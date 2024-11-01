
const getStoreReadList = () =>{
  //readlist
  const storedListStr = localStorage.getItem('read-list');
  if(storedListStr){
      const storedList = JSON.parse(storedListStr);
      return storedList;
  }
  else{
      return [];
  }

}

const getStoreWishList = () =>{
  //readlist
  const storedWishListStr = localStorage.getItem('wish-list');
  if(storedWishListStr){
      const storedWishList = JSON.parse(storedWishListStr);
      return storedWishList;
  }
  else{
      return [];
  }

}

const addToStoreReadList = (id) =>{
  const storedList = getStoreReadList();
  if(storedList.includes(id)){
    //already exits
    console.log(id,'already exits in the read list!')
  }
  else{
    storedList.push(id)
    const storedListStr = JSON.stringify(storedList)
    localStorage.setItem('read-list', storedListStr)
  }

}
const addToStoreWishList = (id) =>{
  const storedWishList = getStoreWishList();
  if(storedWishList.includes(id)){
    //already exits
    console.log(id,'already exits in the wish list!')
  }
  else{
    storedWishList.push(id)
    const storedWishListStr = JSON.stringify(storedWishList)
    localStorage.setItem('wish-list', storedWishListStr)
  }

}

export {addToStoreReadList,addToStoreWishList,getStoreReadList}