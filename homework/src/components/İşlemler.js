import React, { useState ,useEffect} from 'react'
import Select from 'react-select'


const İşlemler = ({id,içerikSil,içerikDüzenle,miktar,desen,renk,grup}) => {
  const[miktars,setMiktars]=useState(0);
  const[Grup,setGrup]=useState(grup);
  const[Renk,setRenk]=useState(renk);
  const[Desen,setDesen]=useState(desen);
  const[Miktar,setMiktar]=useState(miktar);
  
  console.log("gruplar",id,grup,desen,renk,miktar)
  const customThemeFn = (theme) => ({ 
    ...theme,
    spacing: {
      ...theme.spacing,
      controlHeight: 5,
      baseUnit: 0
      
    }
  })
  

  const Gruplar=[
    {value:"Saten", label:"Saten"},
    {value:"Plain ranforce", label:"Plain ranforce"},
    {value:"Reaktif Ranforce", label:"Reaktif Ranforce"},
  ]
  const Desenler=[
    {value:"Tidy", label:"Tidy"},
    {value:"True", label:"True"},
    {value:"Akila", label:"Akila"},
    {value:"Flori", label:"Flori"},
    {value:"Lusso", label:"Lusso"},

  ]
  const Renkler=[
    {value:"Bos", label:"Bos"},
    {value:"Dranji", label:"Dranji"},
    {value:"Somon", label:"Somon"},
    {value:"G.Kurusu", label:"G.Kurusu"},
    {value:"Pembe", label:"Pembe"},
    {value:"Mavi", label:"Mavi"},
    {value:"Kırmızı", label:"Kırmızı"},
  ]
  function call(){
    
    içerikDüzenle(id,Grup,Desen,Renk,Miktar)
    
  }
  useEffect(()=>{
    call()
    // console.log("gruplar",Grup,Desen,Renk,Miktar)
  },[miktars])
  return (
    <div className='Main-işlem'>
        <div className='işlem'>
            <button onClick={()=>{
              içerikSil(id)
              setGrup("")
              setDesen("")
              setRenk("")
              setMiktar(0)
            }}>-</button>
            {grup!=="" ? <Select theme={customThemeFn}  id='gruplar'value={{value:grup, label:grup}} onChange={(e)=>{
              // grup=e.label;
               setGrup(e.label)
               setRenk(renk)
               setMiktar(miktar)
               setDesen(desen)
              setMiktars(miktars+1)
            }} className='selects'  options={Gruplar} placeholder="Grup Yok" isSearchable  ></Select>:<Select theme={customThemeFn} value={{value:"Grup Yok", label:"Grup Yok"}} id='gruplar' onChange={(e)=>{
              // grup=e.label;
               setGrup(e.label)
               setRenk(renk)
               setMiktar(miktar)
               setDesen(desen)
              setMiktars(miktars+1)
            }} className='selects'  options={Gruplar} placeholder="Grup Yok" isSearchable  ></Select>}
            {
              desen!=="" ? <Select theme={customThemeFn} id='gruplar' onChange={(e)=>{
                // desen=e.label;
                
                setDesen(e.label)
                setGrup(grup)
                setRenk(renk)
                setMiktar(miktar)
               
                setMiktars(miktars+1)
              }} className='selects' value={{value:desen,label:desen}} options={Desenler} placeholder="Desen Yok" isSearchable ></Select>:<Select theme={customThemeFn} value={{value:"Desen Yok", label:"Desen Yok"}}id='gruplar' onChange={(e)=>{
                // desen=e.label;
                setGrup(grup)
                setRenk(renk)
                setMiktar(miktar)
                setDesen(e.label)
                setMiktars(miktars+1)
              }} className='selects' options={Desenler} placeholder="Desen Yok" isSearchable ></Select>
            }
            {
              renk!=="" ?  <Select theme={customThemeFn} id='gruplar' onChange={(e)=>{
                // renk=e.label;
                setRenk(e.label)
                setGrup(grup)
                setMiktar(miktar)
                setDesen(desen)
                setMiktars(miktars+1)
              }} className='selects' value={{value:renk, label:renk}} options={Renkler} placeholder="Renk Yok" isSearchable ></Select>: <Select theme={customThemeFn} value={{value:"Renk Yok", label:"Renk Yok"}} id='gruplar' onChange={(e)=>{
                // renk=e.label;
                setRenk(e.label)
                setGrup(grup)
                setDesen(desen)
                setMiktar(miktar)
                setMiktars(miktars+1)
              }} className='selects' options={Renkler} placeholder="Renk Yok" isSearchable ></Select>
            }
            <input value={miktar} onChange={(e)=>{
              e.target.value=e.target.value.replace(/\D/g,'');
              setGrup(grup)
              setRenk(renk)
              setDesen(desen)
              setMiktar(e.target.value)
              setMiktars(miktars+1)
            }}  ></input>
            
            
            
            
        </div>
        
    </div>
  )
}

export default İşlemler