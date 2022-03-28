import { Box } from '@material-ui/core'
import React from 'react'
import Message from "../../assets/message.svg"

export const EmptyMessage = () => {
  return (
    <Box
        style={{
            width:"100%",
        }}
    >
        <img 
            src={Message} 
            alt="message svg" 
            style={{
                display:"block",
                margin:"auto",
                marginTop:"25%",
                width:"300px"
            }}
        />
    </Box>
  )
}
