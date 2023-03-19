import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import {BiToggleLeft} from "react-icons/bi"
import {BiToggleRight} from "react-icons/bi"

const Boxes = ({düzenle,name,state,setState,adet,gramajVal,hazırEbatButton,gramajButton,en,boy,dikişSelect,boşSelect,hazırEbatSelect}) => {
  
  console.log("Boxes values",name,adet,gramajVal,hazırEbatButton,gramajButton,en,boy,dikişSelect,boşSelect,hazırEbatSelect)
  
  
  const newArr={value:"",label:""};
  
  const[miktar,setMiktar]=useState(0);
  useEffect(()=>{
    console.log("Use effect state",state)
    düzenle(state);
    
  
  },[miktar])
  const customStyles = {
    dropdownIndicator: base => ({
      ...base,
      paddingTop: 0,
      paddingBottom: 0,
      width:30,
      
    }),
    
  
    control: base => ({
       ...base,
          height: 27,
          minHeight: 20,
          width: 57,
          textAlign:"left"
          
          
    }),
    valueContainer: (provided) => ({
      ...provided,
      
      width:'100px',
      paddingTop: '0',
      paddingBottom: '0',
      alignItems:"center"
    }),
    input: base => ({
      ...base,
      alignItems:"left",
      textAlign:"left",
      justifyContent:"left",
    }),
     
    indicatorsContainer: base => ({
         ...base,
         height: 23,
         minHeight: 10,
         width:19,
         
         
     }),
     indicatorSeperator: base => ({
      ...base,
      height: 23,
      minHeight: 10,
      width:1,
      
      
  }),
     
    }   
    const customStylesTwo = {
      dropdownIndicator: base => ({
        ...base,
        paddingTop: 0,
        paddingBottom: 0,
        width:30,
        
      }),
      
    
      control: base => ({
         ...base,
            height: 27,
            minHeight: 20,
            width: 53,
            textAlign:"left"
            
            
      }),
      valueContainer: (provided) => ({
        ...provided,
        
        width:'100px',
        paddingTop: '0',
        paddingBottom: '0',
        alignItems:"center"
      }),
      input: base => ({
        ...base,
        alignItems:"left",
        textAlign:"left",
        justifyContent:"left",
      }),
       
      indicatorsContainer: base => ({
           ...base,
           height: 23,
           minHeight: 10,
           width:19,
           
           
       }),
       indicatorSeperator: base => ({
        ...base,
        height: 23,
        minHeight: 10,
        width:1,
        
        
    }),
       
      }   
  const Beden=[
    {value:"XXL",label:"XXL"},
    {value:"XL",label:"XL"},
    {value:"L",label:"L"},
    {value:"M",label:"M"},
    {value:"S",label:"S"},
    {value:"XS",label:"XS"},

  ]
  const Dikiş=[
    {value:"yarı",label:"yarı"},
    {value:"tam",label:"tam"},
    {value:"tüm",label:"tüm"},
    
  ]
  const Gramaj=[
    {value:"10",label:"10"},
    {value:"20",label:"20"},
    {value:"50",label:"50"},
    
  ]
  
  return (
    <div className='little-boxes'>
        <div className='title'>
            {name}
        </div>
        <div className='menu-0'>
          
          <div className='menu-1'>
            {
              hazırEbatButton ? <div>
              <div className='boy'>
                  Boy: <input value={boy} onChange={(e)=>{
                    e.target.value=e.target.value.replace(/\D/g,'');
                    state.map((states)=>{
                      if(states.value===(name)){
                        console.log("Boy içindeyiz",boy)
                        states.boy=e.target.value;
                      }
                    })
                    setMiktar(miktar+1);
                  }} type="text"></input>
              </div>
              <div className='en'>
                  En: <input value={en} onChange={(e)=>{
                    e.target.value=e.target.value.replace(/\D/g,'');
                    state.map((states)=>{
                      if(states.value===name){
                        states.en=e.target.value;
                      }
                    })
                    setMiktar(miktar+1)
                  }} type="text"></input>
              </div>
            </div>:<div className='son-select'><Select onChange={(e)=>{
               state.map((states)=>{
                if(states.value===name){
                  states.hazırEbatSelect=e;
                }
              })
              setMiktar(miktar+1)
            }} styles={customStyles} value={hazırEbatSelect} options={Beden}></Select></div>
            }
            <div className='dikiş'>
              <Select className='son-select-two' onChange={(e)=>{
                 state.map((states)=>{
                  if(states.value===name){
                    states.dikişSelect=e;
                  }
                })
                setMiktar(miktar+1)
              }} value={dikişSelect} styles={customStyles} options={Dikiş}></Select>
            </div>
          </div>
          <div className='menu-2'>
            Adet:
            <input className='adet-input' value={adet} onChange={(e)=>{
              e.target.value=e.target.value.replace(/\D/g,'');
              state.map((states)=>{
                if(states.value===name){
                  states.adet=e.target.value;
                }
              })
              setMiktar(miktar+1)
            }}  type="text"></input>
            <div className='p'>
              Gramaj: <button onClick={()=>{
                state.map((e)=>{
                    if(e.value===name){
                      if(e.gramajButton===true){
                        e.gramajButton=false
                      }
                      else{
                        e.gramajButton=true;
                      }
                    }
                })
                setMiktar(miktar+1)
                  
                
                                 
                
              }} className="toggle" >{gramajButton ? <BiToggleLeft /> : <BiToggleRight/>}</button>
            </div>
            {
              gramajButton ? <Select onChange={(e)=>{
                state.map((states)=>{
                  if(states.value===name){
                    states.boşSelect=e;
                  }
                })
                setMiktar(miktar+1)
              }} className='boş' value={boşSelect} styles={customStylesTwo} options={Gramaj} ></Select>

       : <div className='gramaj-input'><input value={gramajVal}  onChange={(e)=>{
            e.target.value=e.target.value.replace(/\D/g,'');
            state.map((states)=>{
              if(states.value===name){
                
                states.gramajVal=e.target.value;
              }
            })
            setMiktar(miktar+1);
          }} className='gramaj-input'></input></div>
            }
          </div>
          {console.log("boş state",newArr)}
          <div className='menu-3'>
            <button onClick={()=>{
              state.map((e)=>{
                if(e.value===name){
                  e.hazırEbatButton=false;
                }
              })
              setMiktar(miktar+1)
            }}>Hazır Ebat Ekle </button>
          </div>
        </div>
        
        
    </div>
  )
}

export default Boxes