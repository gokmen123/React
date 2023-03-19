import React, { useState } from 'react'
import ünlem from "../ünlem.jpg"

const Alermessage = ({id,deleteProduct,içerikSil,message,alert,getAlarm}) => {
    const [alerChange,setAlertChange]=useState(alert);
    console.log("aletrmessagedeyim")
    return (
    
    <div style={{
        position:"fixed",
        top:"0",
        left:"0",
        right:"0",
        bottom:"0",
        backgroundColor:"rgba(0,0,0,0.5)"
    }}>
        <div style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            position:"absolute",
            top:"40%",
            left:"40%",
            transform:"translate(-%50,-%50)",
            background:"whiteSmoke",
            padding:"50px"
        }}>
            <img className='alert-image' src={ünlem}></img>
            <h3>{message}</h3>
            <div style={{
                display:"flex",
                alignItems:"center",
                color:"whiteSmoke"
            }}>
                
                <button onClick={()=> getAlarm(false)} style={{backgroundColor:"blue",color:"white",padding:"5px",marginRight:"10px",borderRadius:"10px",border:"none",cursor:"pointer"}}>İptal</button>
                <button onClick={()=> (getAlarm(false),içerikSil(id),deleteProduct(id)) } style={{backgroundColor:"red",color:"white",padding:"5px",borderRadius:"10px",marginLeft:"10px",border:"none",cursor:"pointer"}}>Sil</button>
            </div>
        </div>
    </div>
  )
}

export default Alermessage