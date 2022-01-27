import React, { useState, useContext, useEffect} from 'react';
const AppContext = React.createContext();


const AppProvider = ({ children }) => {
  
    const  getLocalStorage =() =>{
        let list = localStorage.getItem('list');
        if(list){
          return JSON.parse(localStorage.getItem('list'));
        } else {
          return [];
        }
    }

    const [list, setList] = useState(getLocalStorage());
    const [isAdded, setIsAdded]  = useState(false);
    const [productsQuantity, setProductsQuantity] = useState(0);
    const [totalPrice, settotalPrice] = useState(0);


    const productQuantityCalculator = () =>{
      return list.reduce((sum, {quantity})=>{
            return sum + quantity;
        }, 0)
    }


    const totalPriceCalculator =() =>{
      return list.reduce((sum, {price, quantity})=>{
          return sum + price * quantity;
      }, 0)
    } 

    const addQuantity = (name) =>{
      setList(list.map(item =>{
        if(item.name === name){
            item.quantity = item.quantity + 1;
            return {...item, quantity: item.quantity}
        }
        return item;
      }))
    }

    const extractQuantity = (name) =>{
      setList(list.map(item =>{
        if(item.name === name && item.quantity > 1){
            item.quantity = item.quantity - 1;
            return {...item, quantity: item.quantity}
        }
        return item;
      }))
    }

    const addBucketList = () => {
      if(!isAdded) {
          setIsAdded(!isAdded);
          const timeout =  setTimeout(()=>{
              setIsAdded(isAdded);
          }, 2000);
          return ()=> clearTimeout(timeout)
      }
      setIsAdded(!isAdded);
    };

    
  const addProductToBucket = ({...products})=>{
      const addedProduct = list.find(item => item.name === products.name);

      if(addedProduct) {
        addQuantity(products.name)
      } else {
          const addedProduct = {...products, quantity: 1}
          addBucketList();
          setList([...list, addedProduct])
      }
  }

  const removeProductFromBucket = ({...products}) => {
    setList(list.filter(item =>item.name !== products.name))
  }

  useEffect(()=>{
    localStorage.setItem('list', JSON.stringify(list));  
    setProductsQuantity(productQuantityCalculator());
    settotalPrice(totalPriceCalculator())
  }, [list])

  return (
    <AppContext.Provider
      value={{
        isAdded,
        addBucketList,
        productsQuantity,
        addProductToBucket,
        removeProductFromBucket,
        list,
        totalPrice,
        addQuantity,
        extractQuantity
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };