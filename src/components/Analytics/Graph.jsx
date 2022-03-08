import { format, parseISO } from 'date-fns'
import React from 'react'
import { ResponsiveContainer, AreaChart, YAxis, XAxis, Area, Tooltip, CartesianGrid, Legend } from 'recharts'
import { Typography, Box, useTheme } from '@material-ui/core'



const colors = ["rgb(136, 132, 216)","rgb(130, 202, 157)","rgb(198,148,249)"]
export const Graph = (props) => {
    var data = props.data       
    const theme = useTheme()
    return (
            <Box 
                style={{
                    backgroundColor:theme.palette.background.paper,
                }}
            >
                <Typography
                    variant="h3"
                    style={{
                        margin:"0 0 20px 20px "
                    }}
                >
                    Analytics
                </Typography>
                <ResponsiveContainer width="98%" height={300}>
                    <AreaChart margin={{ top: 0, left: -30, right: 0, bottom: 0 }} data={data}>
                        <defs>
                            <linearGradient id="color0" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor={colors[0]} stopOpacity={1}/>
                                <stop offset="95%" stopColor={colors[0]} stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor={colors[1]} stopOpacity={1}/>
                                <stop offset="95%" stopColor={colors[1]} stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="color2" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor={colors[2]} stopOpacity={1}/>
                                <stop offset="95%" stopColor={colors[2]} stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        {props.showChart[0].display ? <Area type="monotone" dataKey="Message" stroke={colors[0]} fill="url(#color0)" />:null}
                        {props.showChart[1].display ? <Area type="monotone" dataKey="CV" stroke={colors[1]} fill="url(#color1)" />:null}
                        {props.showChart[2].display ? <Area type="monotone" dataKey="Visitors" stroke={colors[2]} fill="url(#color2)" />:null}
                        <XAxis 
                            dataKey="date"
                            tickLine={false}
                            tickFormatter={str =>{
                                const date = parseISO(str)
                                if(date.getDate() % 3 === 0){
                                    return format(date, "MMM d")
                                }
                                return ""
                            }}
                        />
                        <YAxis datakey="value" tickCount={5}/>
                        <Tooltip/>
                        <CartesianGrid  strokeDasharray="3 3"/>
                        <Legend verticalAlign="bottom" height={36}/>
                    </AreaChart>   
                </ResponsiveContainer>
            </Box>
    )
}


