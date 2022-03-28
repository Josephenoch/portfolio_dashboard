import { Box } from '@material-ui/core'
import React from 'react'
import Message from "../../assets/message.svg"


export const EmptyMessage = () => {

  return (
    <Box
        style={{
            width:"100%",
            height:"100%",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
        }}
    >
        <img 
            src={Message} 
            alt="message svg" 
            style={{
                display:"block",
                width:"300px"
            }}
        />
    </Box>
  )
}
