import React,{useEffect, useState} from 'react'
import Select from 'react-select'
import Boxes from './Boxes';
import İşlemler from "./İşlemler";
import Alermessage from './Alermessage';


var içerikCopy=[];
var marka="";
var beden="";
var ürünCinsi="";
var ambalaj="";
var içerikNo=0;
//var copyState=[];
var multiSelect=[];



const AddingProduct = ({id,deleteProduct,getAddingProduct,cins,paraSonuç,içerikler,ambalaj,beden,ürünCinsi,marka,selectedOption,Fiyat,getFiyat,getCins,getParaSonuç,getMiktar,Miktar,getİçerik,getAmbalaj,getMarka,getBeden,getÜrünCinsi}) => {
  //var info={id:number,cins:"",paraSonuç:"",marka:"",beden:"",ürünCinsi:"",içerikler:[],ambalaj:"",};
  
  const[alert,setAtlert]=useState(false);
  const[toplamMiktar,setToplamMiktar]=useState([]);
  const[sum,setSum]=useState(0);
  const[içerikDüzeni,setİçerikDüzeni]=useState(0);
  const[içerikId,setiçerikId]=useState(0);
  const [state,setState]=useState([]);
  const[içerik,setİçerik]=useState([]);
  const[fiyat,setFiyat]=useState(Fiyat);
  const[toplamPara,setToplamPara]=useState(paraSonuç);
  const[paraBirim,setParaBirim]=useState(cins);
  const[value,setValue]=useState(0);
  const[eklenen,setEklenen]=useState(0);
  const customThemeFn = (theme) => ({ 
    ...theme,
    spacing: {
      ...theme.spacing,
      controlHeight: 5,
      baseUnit: 0
      
    }
  })
  
  const Marka=[
    {value:"Defacto" ,label:"Defacto"},
    {value:"Lc WAikiki" ,label:"Lc WAikiki"},
    {value:"Koton" ,label:"Koton"},
    {value:"HM" ,label:"Hm"},

  ]
  const Beden=[
    {value:"XL" ,label:"XL"},
    {value:"L" ,label:"L"},
    {value:"M" ,label:"M"},
    {value:"S" ,label:"S"},
    {value:"XS" ,label:"XS"},

  ]
  const ÜrünCinsi=[
    {value:"çarşaf" ,label:"Çarşaf"},
    {value:"Nevresim" ,label:"Nevresim"},
    {value:"Nevresim seti" ,label:"Neveresim Seti"},
    {value:"Nevresim Tak." ,label:"Nevresim Takımı"},
    {value:"Fitted çarşaf" ,label:"Fitted çarşaf"},

  ]
  const İçerikler=[
    {id:id, value:"nevresim" ,label:"nevresim",adet:0,gramajVal:0,hazırEbatButton:true,gramajButton:true,en:0,boy:0,dikişSelect:{value:"Dikiş",label:"Dikiş"},boşSelect:{value:"Boş",label:"Boş"},hazırEbatSelect:{value:"Beden",label:"Beden"}},
    {id:id,value:"çarşaf" ,label:"çarşaf",adet:0,gramajVal:0,hazırEbatButton:true,gramajButton:true,en:0,boy:0,dikişSelect:{value:"Dikiş",label:"Dikiş"},boşSelect:{value:"Boş",label:"Boş"},hazırEbatSelect:{value:"Beden",label:"Beden"}},
    {id:id,value:"fitted-çarşaf" ,label:"fitted-çarşaf",adet:0,gramajVal:0,hazırEbatButton:true,gramajButton:true,en:0,boy:0,dikişSelect:{value:"Dikiş",label:"Dikiş"},boşSelect:{value:"Boş",label:"Boş"},hazırEbatSelect:{value:"Beden",label:"Beden"}},
    {id:id,value:"std yastık kılıfı" ,label:"std yastık kılıfı",adet:0,gramajVal:0,hazırEbatButton:true,gramajButton:true,en:0,boy:0,dikişSelect:{value:"Dikiş",label:"Dikiş"},boşSelect:{value:"Boş",label:"Boş"},hazırEbatSelect:{value:"Beden",label:"Beden"}},
    {id:id,value:"oxf yastık kılıfı" ,label:"oxf yastık kılıfı",adet:0,gramajVal:0,hazırEbatButton:true,gramajButton:true,en:0,boy:0,dikişSelect:{value:"Dikiş",label:"Dikiş"},boşSelect:{value:"Boş",label:"Boş"},hazırEbatSelect:{value:"Beden",label:"Beden"}},
    {id:id,value:"kırlent kılıfı" ,label:"kırlent kılıfı",adet:0,gramajVal:0,hazırEbatButton:true,gramajButton:true,en:0,boy:0,dikişSelect:{value:"Dikiş",label:"Dikiş"},boşSelect:{value:"Boş",label:"Boş"},hazırEbatSelect:{value:"Beden",label:"Beden"}},
    {id:id,value:"kırlent" ,label:"kırlent",adet:0,gramajVal:0,hazırEbatButton:true,gramajButton:true,en:0,boy:0,dikişSelect:{value:"Dikiş",label:"Dikiş"},boşSelect:{value:"Boş",label:"Boş"},hazırEbatSelect:{value:"Beden",label:"Beden"}},
  ]
  const Ambalaj=[
    {value:"pvc" ,label:"Pvc"},
    {value:"Mikro Kutu" ,label:"Mikro kutu"},
    {value:"Mukavva" ,label:"Mukavva"},
    {value:"Jelatin poşet" ,label:"Jelatin Poşet"},
    {value:"Çoklu paket" ,label:"Çoklu Paket"},

  ]
  function içerikEkle(){
    
    içerikNo=içerikNo+1;
    var info={productId:id,others:{id:içerikNo, miktar:0,desen:"",renk:"",grup:""}}
    içerikCopy.push(info)
    setİçerik(içerikCopy);
    setiçerikId(içerikId+1);
    toplam()
    
  }
  function içerikDüzenle(ids,grups,desens,renks,miktars){
    
    // console.log("önceki miktar",miktar)
    içerikCopy.map((e)=>{
      if(e.productId===id){
        if(e.others.id===ids){
            e.others.grup=grups;
            e.others.desen=desens;
            e.others.renk=renks;
            e.others.miktar=miktars;
            
        }
      }
    })
    
    setiçerikId(içerikId+1)
    toplam()
    paraSonucu()
    
    
  }
  
  function içerikSil(ids){
    var newArr=[];
    newArr=içerikCopy.filter((e)=>e.others.id !==ids)
    içerikCopy=newArr
    setiçerikId(içerikId+1);
    toplam()
    
    
   
  }
  
  
  
  useEffect(()=>{
    setİçerik(içerikCopy);
  },[içerikId])
  
  function toplam(){
    
    let sonuç=0;
    içerikCopy.map((e)=>{
        if(e.productId==id){
            sonuç=sonuç+parseInt(e.others.miktar)
            
        }
        
    })
    getMiktar(id,sonuç)
    paraSonucu()
    
       
    
    
    
    
  } 
  
  function paraSonucu(){
    // console.log("Fiyat ve Miktar",Fiyat,Miktar)
    let result=Fiyat*Miktar;
    getParaSonuç(id,result)
  }
  function tümİçeriğisil(ids){
    if(içerikCopy.length!==0){
      // console.log("silinecek içerik id",ids);
      // console.log("Anlık içerikCop",içerikCopy)
      var newArr=[]
      newArr=içerikCopy.filter((e)=>e.productId !==ids )
      setiçerikId(içerikId-1);
      içerikCopy=newArr;
      setState([])
      setİçerik(içerikCopy);
      // console.log("Tüm içeriği sil:",newArr)
      
    } 
    
    
  }
  function getAlarm(alerts){
    setAtlert(alerts);
    
  }

  useEffect(()=>{
     getİçerik(id,state)
  },[eklenen])
  function düzenle(states){
    getİçerik(id,states)
  }
  useEffect(()=>{
    paraSonucu()
  },[Miktar,Fiyat])
    
  
  
  return (
    <div className='main-Product'>
      <div className='fonts-h2'>
        <h2 >{id}</h2>
      </div>
      <div className='product'>
        <label className='fonts'>Marka:</label>
        <Select theme={customThemeFn} value={marka} onChange={(e)=>{
          getMarka(id,e)
        }} className='product-select'  options={Marka} placeholder="Marka seçiniz" isSearchable/>
        <label className='fonts'>Beden:</label>
        <Select value={beden} theme={customThemeFn} onChange={(e)=>{
          getBeden(id,e)
        }}className='product-select'  options={Beden} placeholder="Beden seçiniz" isSearchable/>
        <label className='fonts' >Ürün cinsi:</label>
        <Select value={ürünCinsi} theme={customThemeFn} onChange={(e)=>{
          getÜrünCinsi(id,e);
        }}  className='product-select'options={ÜrünCinsi} placeholder="Ürün cinsi seçiniz" isSearchable></Select>
        <label className='fonts'>İçerikler:</label>
        <Select  value={içerikler} theme={customThemeFn} onChange={(e)=>{
          setState(e);
          setEklenen(eklenen+1)
          
          
        }}className='product-select' options={İçerikler} placeholder="içerik seçiniz" isMulti isClearable={false}></Select>
        <label className='fonts'>Ambalaj:</label>
        <Select value={ambalaj} theme={customThemeFn}  onChange={(e)=>{
          getAmbalaj(id,e);
        }} className='product-select' options={Ambalaj} placeholder="Ambalaj seçiniz" isSearchable></Select>
        
      </div>
       
      <div className='Ürün-içeriği' >
        
        
        
      {
        içerikler.length===0 ? <h2 className='Ürün-içeriği-child' >lütfen içerik seçiniz</h2> :içerikler.map(içerik=>{
          
          // console.log("ürün içeriği",state)
          if(içerik.id===id){
            return(//value:"nevresim" ,label:"nevresim",adet:0,gramajVal:0,hazırEbatButton:true,gramajButton:true,en:0,boy:0,
          //dikişSelect:{value:"Dikiş",label:"Dikiş"},boşSelect:{value:"Boş",label:"Boş"},hazırEbatSelect:{value:"Beden",label:"Beden"}},

            
            <div className='little-boxes-out'><Boxes düzenle={düzenle} name={içerik.value} state={içerikler} setState={setState} adet={içerik.adet} gramajVal={içerik.gramajVal}
            en={içerik.en} boy={içerik.boy} dikişSelect={içerik.dikişSelect} boşSelect={içerik.boşSelect} hazırEbatSelect={içerik.hazırEbatSelect} gramajButton={içerik.gramajButton} hazırEbatButton={içerik.hazırEbatButton} /></div>
          )
          }
        })
      }
      </div>
      <div className='içerik-button'>
        {
          içerikCopy.length!==0 ? içerikCopy.map((e)=>{
            if(e.productId==id){
              return(
                
                <div><İşlemler içerikDüzenle={içerikDüzenle} içerikSil={içerikSil} id={e.others.id} miktar={e.others.miktar} desen={e.others.desen} renk={e.others.renk} grup={e.others.grup}></İşlemler></div>
              )
            }
          }) :""
        }
        <button className='içerik-buttons' onClick={içerikEkle}>Ürün Ekle</button>
      </div>
      <div className='Toplam-Adet'>
        <input value={Miktar} disabled></input>
      </div>
      <div className='Birim'>
        <select>
          <option>ölçü birimi</option>
          <option>AD.</option>
          <option>MT.</option>
          <option>KG.</option>
          
        </select>
      </div>
      <div className='Fiyat'>
          <input value={Fiyat} onChange={(e)=>{
            e.target.value=e.target.value.replace(/\D/g,'');
            getFiyat(id,e.target.value)
            paraSonucu()
            // setFiyat(parseInt(e.target.value));
          }}  style={{fontSize:9}}></input>
      </div>
      <div className='BirimPara'>
        {/* {console.log("Anlık cins seçimden önce,",cins)} */}
        <select value={cins}  onChange={(e)=>{
            var birim=e.target.value;
            getCins(id,e.target.value);
            paraSonucu()
            // setParaBirim(birim);
        }}>
          <option value="Birim Seçiniz">Birim Seçiniz</option>
          <option value="USD">USD</option>
          <option value="TL">TL</option>
          <option value="EURO">EURO</option>
        </select>
      </div>
      <div className='Toplam'>
        <input type="number" style={{fontSize:10}} value={paraSonuç} disabled></input>
      </div>
      <div className='silme-class'>
        <button className="sil" onClick={()=>(setAtlert(true))}>Sil</button>
      </div>
      { alert ? <Alermessage getAlarm={getAlarm} alert={alert} id={id} deleteProduct={deleteProduct} içerikSil={tümİçeriğisil} message={"İçerik Silinsin mi?"}/> :"" }
    </div>
    
  )
}


export default AddingProduct