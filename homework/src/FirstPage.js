import React,{ useEffect, useState } from "react"
import Select from "react-select";
import "./components/AddingProduct"
import AddingProduct from "./components/AddingProduct";
import "./components/Mainpage.css"

import Alermessage from "./components/Alermessage";


var number=0;
var product=[];
var toplam=0;
var paraCinsi="";
var içerikler=[]

const FirstPage = () => {
  const customThemeFn = (theme) => ({ 
    ...theme,
    spacing: {
      ...theme.spacing,
      controlHeight: 5,
      baseUnit: 0,
      
    }
  })
  const Users={
    AlıcıAdı:{value:""},
    AlıcıCariKod:{value:""},
    Teslim:{value:""},
    TeslimÖzelKod:{value:""},
    Satıcı:{value:""},
    Banka:{value:""},
    Ödeme:{value:"",letterCredit:""},
    FaturaNo:{value:""},
    Marka:[],
    Miktar:[],
  }  
  const[takip,setTakip]=useState(0);
  const[user,setUser]=useState(Users);
  const[id,setId]=useState(1);
  const[ürün,setÜrün]=useState([]);
  const[defautVal,setDefaultVal]=useState(()=>"");
  const[productLenght,setproductLenght]=useState(0);
  const[check,setCheck]=useState(()=>"");
  const[TL,setTL]=useState(0);
  const[USD,setUSD]=useState(0);
  const[EURO,setEURO]=useState(0);
  const[toplamYazı,setToplamYazı]=useState("Toplam");
  const Banka = [
    { value: 'Vakıfbank', label: 'Vakıfbank' },
    { value: 'Akbank', label: 'Akbank' },
    { value: 'İş Bankası', label: 'İş Bankası' },
  ]
  const Teslim=[
    {value:"exv" ,label:"exv"} ,  
    {value:"fca" ,label: "fca"},     
    {value:"cpt" ,label:"cpt"} ,
    {value:"cip" ,label:"cip"} ,     
    {value:"dap" ,label:"dap"},        
    {value:"dat" ,label:"dat"},  
    {value:"ddp" ,label:"ddp"},  
    {value:"das" ,label:"das"}, 
    {value:"fob" ,label:"fob"},   
    {value:"cfr" ,label:"cfr"},
  ]
  const Satıcı=[
    {value:"Trendyol",label:"Trendyol"},
    {value:"Amazon",label:"Amazon"},
    {value:"Hepsiburada",label:"Hepsiburada"},
    {value:"GittiGidiyor",label:"GittiGidiyor"},
  ]
  const Ödeme=[
    {value:"nakit",label:"nakit"},
    {value:"Banka transferi",label:"Banka transferi"},
    {value:"Mal mukabili",label:"Mal mukabili"},
    {value:"Evrak mukabili",label:"Evrak mukabili"},
    {value:"letter of credit",label:"letter of credit"},
  ]
  useEffect(()=>{
    setUser(user)
    
  },[takip])
  function deleteProduct(ids){
    var newArr=[];
    // console.log("silinecek id deleteproduct",ids)
    newArr=product.filter((e)=>e.id!==ids);
    product=newArr;
    // console.log("Product",product)
    user.Marka=product;
    // console.log("User Marka",user.Marka)
    setTakip(takip-1);
    setUser(user);
    getToplam()
  }
  function ürünEkle(){
    number=number+1;
    setTakip(takip+1);
    var info={id:number,cins:"",paraSonuç:0,marka:{value:"Marka seçiniz",label:"Marka seçiniz"},beden:{value:"Beden seçiniz",label:"Beden seçiniz"},ürünCinsi:{value:"Ürün seçiniz",label:"Ürün seçiniz"},içerikler:[],ambalaj:{value:"Ambalaj seçiniz",label:"Ambalaj seçiniz"},selectedOption:[],Fiyat:0,Miktar:0};
    product.push(info);
    user.Marka=product;
  }
  function getFiyat(ids,fiyats){
    product.map((e)=>{
      if(e.id===ids){
        e.Fiyat=fiyats
        
      }
      user.Marka=product;
      setTakip(takip+1);
      // console.log("product",product)
    })
    setUser(user);
    getToplam()
  }

  function getCins(ids,cinss){
    product.map((e)=>{
      if(e.id===ids){
        e.cins=cinss;
        
      }
      user.Marka=product;
      setTakip(takip+1);
      // console.log("product",product)
    })
    setUser(user);
    getToplam()
  }
  function getMiktar(ids,miktars){
    product.map((e)=>{
      if(e.id===ids){
        e.Miktar=miktars;
        
      }
      user.Marka=product;
      setTakip(takip+1);
      // console.log("product",product)
    })
    setUser(user);
    getToplam()
  }
  function getParaSonuç(ids,paraSonucu){
    product.map((e)=>{
      if(e.id===ids){
        e.paraSonuç=paraSonucu;
        
      }
      user.Marka=product;
      setTakip(takip+1);
      // console.log("product",product)
    })
    setUser(user);
    getToplam()
  }
  function getAddingProduct(id,marka,beden,ürünCinsi,ambalaj){
    // console.log(id,marka,beden,ürünCinsi,içerik,ambalaj);
    product.map((e)=>{
      if(e.id===id){
        e.marka=marka;
        e.beden=beden;
        e.ürünCinsi=ürünCinsi;
        e.ambalaj=ambalaj;
      }
      user.Marka=product;
      setTakip(takip+1);
      // console.log("product",product)
    })
    setUser(user);
    getToplam()
    
    
  }
  function getİçerik(ids,içeriks){
    product.map((e)=>{
      if(e.id===ids){
        e.içerikler=içeriks;
        
      }
      user.Marka=product;
      setTakip(takip+1);
      // console.log("product",product)
    })
    setUser(user);
    
  }
  function getAmbalaj(ids,ambalajs){
    product.map((e)=>{
      if(e.id===ids){
        e.ambalaj=ambalajs;
        
      }
      user.Marka=product;
      setTakip(takip+1);
      // console.log("product",product)
    })
    setUser(user);
  }
  function getMarka(ids,markas){
    product.map((e)=>{
      if(e.id===ids){
        e.marka=markas;
        
      }
      user.Marka=product;
      setTakip(takip+1);
      // console.log("product",product)
    })
    setUser(user);
  }
  function getBeden(ids,bedens){
    product.map((e)=>{
      if(e.id===ids){
        e.beden=bedens;
        
      }
      user.Marka=product;
      setTakip(takip+1);
      // console.log("product",product)
    })
    setUser(user);
  }
  function getÜrünCinsi(ids,ürünCinsis){
    product.map((e)=>{
      if(e.id===ids){
        e.ürünCinsi=ürünCinsis;
        
      }
      user.Marka=product;
      setTakip(takip+1);
      // console.log("product",product)
    })
    setUser(user);
  }

  function getToplam(){
    var copyUsd=0;
    var copyTl=0;
    var copyEuro=0;
    // console.log("Toplamdayız",product)
    product.map((e)=>{
      
      if(e.cins==="USD"){
        copyUsd=copyUsd+parseInt(e.paraSonuç)
      }
      if(e.cins==='TL'){
        copyTl=copyTl+parseInt(e.paraSonuç)
      }
      if(e.cins==="EURO"){
        copyEuro=copyEuro+parseInt(e.paraSonuç)
      }
    })
    setEURO(copyEuro)
    setTL(copyTl)
    setUSD(copyUsd)
  }
  useEffect(()=>{
    var yazı;
    if(TL===0 && USD===0 && EURO===0){
      yazı="Toplam"
    }
    if(TL!==0 && USD===0 && EURO===0){
      yazı=TL+" TL"
    }
    if(TL===0 && USD!==0 && EURO===0){
     yazı=USD+" USD"
    }
    if(TL===0 && USD===0 && EURO!==0){
      yazı=EURO+" EURO"
    }
    if(TL!==0 && USD!==0 && EURO==0){
      yazı=TL+" TL "+USD+" USD"
    }
    if(TL!==0 && USD===0 && EURO!==0){
     yazı=TL+" TL "+EURO+" EURO"
    }
    if(TL===0 && USD!==0 && EURO!==0){
       yazı=USD+" USD "+EURO+" EURO"
    }
    if(TL!==0 && USD!==0 && EURO!==0){
      yazı=TL+" TL "+USD+" USD "+EURO+" EURO"
    }
    setToplamYazı(yazı);
    // console.log("Yazı",toplamYazı)
    
  },[EURO,TL,USD])
  
  
  
  
  
  return (
    <div className="Baş">
      <div className='Mainpage'>
        <h2 style={{marginLeft:"4%"}}>Alıcı Adı</h2>
        <h2 style={{marginLeft:"3.5%"}}>Alıcı Cari Kod</h2>
        <h2 style={{marginLeft:"2%"}}> Teslim</h2>
        <h2 style={{marginLeft:"4%"}}> Teslim İçin Özel Kod</h2>
        <h2 style={{marginLeft:"2%"}}> Satıcı</h2>
        <h2 style={{marginRight:"2%"}} > Banka</h2>
        <h2 style={{marginRight:"3%"}}> Ödeme</h2>
        <h2 style={{marginRight:"4%"}}> Fatura No</h2>
      </div>
      <div className='İnputs'>
        <input onChange={(e)=>{
          
          if(!/^[a-zA-Z]*$/.test(e.target.value)){
            e.target.value=e.target.value.replace(/[^a-z]/gi, '')
          }
          else{
            var alıcı=e.target.value
            user.AlıcıAdı.value=alıcı;
            setTakip(takip+1);
            setUser(user);
          }
        }} placeholder='Alıcı Adı' className='Alıcı' />
        <input onChange={(e)=>{
          e.target.value=e.target.value.replace(/\D/g,'');
        
          var alıcıKod=e.target.value
          user.AlıcıCariKod.value=alıcıKod;
          setTakip(takip+1);
          setUser(user); 
        }} placeholder='Alıcı Cari Kod' type="numeric" className='AlıcıCari' />
        <Select theme={customThemeFn} onChange={(e)=>{
          var teslim=e.label;
          user.Teslim.value=teslim;
          setTakip(takip+1);
        }} className="Teslim" options={Teslim} placeholder="Teslim Şekli" isSearchable/>
        <input onChange={(e)=>{
          e.target.value=e.target.value.replace(/\D/g,'');
          user.TeslimÖzelKod.value=e.target.value;
          setTakip(takip+1);
        }} placeholder='Teslim Özel Kod'  className='Teslim_özel'></input>
        <Select theme={customThemeFn} onChange={(e)=>{
          user.Satıcı.value=e.label;
          setTakip(takip+1);
        }} className="Satıcı" options={Satıcı} placeholder="Satıcı Seç" isSearchable></Select>
        <Select theme={customThemeFn} onChange={(e)=>{
          user.Banka.value=e.label;
          setTakip(takip+1);
        }} className="Banka"options={Banka} placeholder="Banka seç" isSearchable></Select>
        <Select theme={customThemeFn} onChange={(e)=>{
          setDefaultVal(e.label);
          user.Ödeme.value=e.label;
          setTakip(takip+1);
        }} className="Ödeme"options={Ödeme} placeholder="Ödeme yöntemi seç" isSearchable></Select>
        <input onChange={(e)=>{
          e.target.value=e.target.value.replace(/\D/g,'');
          user.FaturaNo.value=e.target.value;
          setTakip(takip+1);
        }} placeholder='Fatura No'  className='Fatura'></input>
      </div>
      {
        defautVal.includes("letter of credit") ? (<div className="letter-credit">
          <input onChange={(e)=>{
            e.target.value=e.target.value.replace(/\D/g,'');
          user.Ödeme.letterCredit=e.target.value;
          setTakip(takip+1);
        }} placeholder="enter the credit" ></input>
        </div>):""
      }
      <div className="alt-menu">
        <h2 className="Sıra">Sıra</h2>
        <h2 className="Seçimler">Seçimler</h2>
        <h2 className="Ürün-içeriği">Ürün içerigi</h2>
        <h2 className="İşlem">İşlem</h2>
        <h2 className="Gruplar">Gruplar</h2>
        <h2 className="Desenler">Desenler</h2>
        <h2 className="Renkler">Renkler</h2>
        <h2 className="Miktar">Miktar </h2>
        <h2 className="Toplam-Adet">Toplam Adet</h2>
        <h2 className="Birim">Birim(ölçü)</h2>
        <h2 className="Fiyat">Fiyat</h2>
        <h2 className="BirimPara">Birim (Para)</h2>
        <h2 className="Toplam">Toplam</h2>
        <button className="ürün-ekle" onClick={ürünEkle} >Ürün ekle</button>
      </div>
      {
        console.log("Main userMarka",user.Marka)
      }
      
      {
        user.Marka.length !== 0 ? user.Marka.map((e)=>{
          //var info={id:number,cins:"",paraSonuç:"",marka:"",beden:"",ürünCinsi:"",içerikler:[],ambalaj:"",};
          return(
          <div>{<AddingProduct getÜrünCinsi={getÜrünCinsi} getBeden={getBeden} getMarka={getMarka} getAmbalaj={getAmbalaj} getİçerik={getİçerik} getMiktar={getMiktar} getParaSonuç={getParaSonuç} getCins={getCins} getFiyat={getFiyat} Fiyat={e.Fiyat} selectedOption={e.selectedOption}  userMarka={user.Marka} ambalaj={e.ambalaj} marka={e.marka} beden={e.beden} ürünCinsi={e.ürünCinsi} içerikler={e.içerikler}  cins={e.cins} paraSonuç={e.paraSonuç} id={e.id} getAddingProduct={getAddingProduct} deleteProduct={deleteProduct} Miktar={e.Miktar}></AddingProduct>}</div>
        )
        }) :""
      }
      <div className="ensonToplam">
        <input placeholder={toplamYazı} disabled ></input>
      </div> 
      
      
     
      
     
    </div>
  )
}

export default FirstPage