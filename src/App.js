import './App.css';
import db from './firebase.config';
import React,{useState,useEffect} from 'react';

function App() {
  const [products,setproduct]=useState([]);
  const [cart,addcart]=useState({});
  const [nfs,addnfs]=useState([]);
  const fetchprod=async()=>{
    const response=db.collection('users');
    const data=await response.get();
    data.docs.forEach(item=>{
      let full = item.data();
      full["id"] = item.id;
      setproduct(products => [...products,full]);
    })
  }
  useEffect(() => {
    fetchprod();
  }, [])
  async function add_prod(item) {
    if(cart[item] === undefined){
      cart[item] = 1;
      addnfs(nfs => [...nfs,"succecfully added to cart"]);
    }else{
      let prodref = db.collection('users').doc(item);
      let doc = await prodref.get();
      if(cart[item] < doc.data().left){
        cart[item] += 1;
        addnfs(nfs => [...nfs,"another item added"]);
      }else{
        addnfs(nfs => [...nfs,"sorry you have ordred the full amount"]);
      }
    }
    console.log(cart);
  }
  return (
    <div className="App">
      <header>
        <h1>ELHADEDE STORE</h1>
      </header>
      <main>
          {
            products.map(function(name){
              return(
                <div className="item" onClick={() => add_prod(name.id)}>
                  <h4>{name.name}</h4>
                  <p>{name.left}</p>
                </div>
              );
            })
          }
      </main>
      <div class="alert">
      {
        nfs.map(function(name){
          return(
            <div>
              {name}
            </div>
          );
        })
      }
      </div>
    </div>
  );
}

export default App;