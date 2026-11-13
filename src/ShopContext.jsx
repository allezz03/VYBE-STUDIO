import{createContext,useContext,useEffect,useState}from'react';
const C=createContext(null);
export function ShopProvider({children}){
 const[cart,setCart]=useState([]);
 const[toast,setToast]=useState('');
 useEffect(()=>{if(!toast)return;const t=setTimeout(()=>setToast(''),2200);return()=>clearTimeout(t)},[toast]);
 const add=(p,size,color)=>{
  setCart(c=>{const i=c.findIndex(x=>x.id===p.id&&x.size===size&&x.color===color);
   if(i<0)return[...c,{id:p.id,name:p.name,price:p.price,img:p.img,size,color,qty:1}];
   return c.map((x,n)=>n===i?{...x,qty:x.qty+1}:x)});
  setToast('Aggiunto al carrello');
 };
 const change=(id,size,color,d)=>setCart(c=>c.map(x=>x.id===id&&x.size===size&&x.color===color?{...x,qty:Math.max(1,x.qty+d)}:x));
 const remove=(id,size,color)=>setCart(c=>c.filter(x=>!(x.id===id&&x.size===size&&x.color===color)));
 const total=cart.reduce((s,x)=>s+x.price*x.qty,0),count=cart.reduce((s,x)=>s+x.qty,0);
 return <C.Provider value={{cart,add,change,remove,total,count,toast,clear:()=>setCart([])}}>{children}</C.Provider>;
}
export const useShop=()=>useContext(C);
