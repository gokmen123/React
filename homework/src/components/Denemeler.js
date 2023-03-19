import React,{useState} from 'react'
import Select from 'react-select'

import "./Deneme.css"
const Denemeler = () => {
  const customThemeFn = (theme) => ({ 
    ...theme,
    spacing: {
      ...theme.spacing,
      controlHeight: 0,
      baseUnit: 0,
      
      
    }
  })
  const customStyles = {
    control: base => ({
       ...base,
          height: 22,
          minHeight: 20,
          width: 50,
    }),
    /* valueContainer: base => ({
         ...base,
         height: 20,
         minHeight: 20,
         width:20,
         alignItems: 'left',
     }), */ 
     indicatorsContainer: base => ({
         ...base,
         height: 20,
         minHeight: 10,
         width:16,
         
     }),

}
  
  const[state,setState]=(useState(()=>""))
  const options=[
    {value:"Koton" ,label:"Koton"},
    {value:"LC WAikik" ,label:"Lc Waikik"},
    {value:"HM" ,label:"HM"},
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

  return (
    <div >
        
        <Select styles={customStyles} className='deneme' theme={customThemeFn}  options={Teslim.map((e)=>{
          return{value:e.value,label:e.label}
        })}></Select> 
       
    </div>
  )
}

export default Denemeler