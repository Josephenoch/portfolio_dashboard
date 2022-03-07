import { subDays, format, parseISO } from 'date-fns'
import React from 'react'
import { ResponsiveContainer, AreaChart, YAxis, XAxis, Area, Tooltip, CartesianGrid  } from 'recharts'

const data = []
for(let num = 30; num>=0; num--){
    data.push({
        date:subDays(new Date(), num).toISOString().slice(0,10),
        messageValue: Math.floor(Math.random() * 10),
        cvValue: Math.floor(Math.random() * 10),
        vistorsValue: Math.floor(Math.random() * 10)
    })
}
const colors = ["rgb(254,182,131)","rgb(104,102,233)","rgb(198,148,249)"]
const Graph = () => {
    return (
        <div style={{marginTop:50}}>
            <ResponsiveContainer width="95%" height={500}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="color0" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={colors[0]} stopOpacity={0.4}/>
                            <stop offset="75%" stopColor={colors[0]} stopOpacity={0.05}/>
                        </linearGradient>
                        <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={colors[1]} stopOpacity={0.4}/>
                            <stop offset="75%" stopColor={colors[1]} stopOpacity={0.05}/>
                        </linearGradient>
                        <linearGradient id="color2" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={colors[2]} stopOpacity={0.4}/>
                            <stop offset="75%" stopColor={colors[2]} stopOpacity={0.05}/>
                        </linearGradient>
                    </defs>
                    <Area dataKey="messageValue" stroke={colors[0]} fill="url(#color0)"/>
                    <Area dataKey="cvValue" stroke={colors[1]} fill="url(#color1)"/>
                    <Area dataKey="vistorsValue" stroke={colors[2]} fill="url(#color2)"/>
                    <XAxis 
                        dataKey="date"
                        tickLine={false}
                        tickFormatter={str =>{
                            const date = parseISO(str)
                            if(date.getDate() % 7 === 0){
                                return format(date, "MMM d")
                            }
                            return ""
                        }}
                    />
                    <YAxis datakey="value" tickCount={10}/>
                    <Tooltip/>
                    <CartesianGrid opacity={0.2} vertical={false}/>
                </AreaChart>   
            </ResponsiveContainer>
        </div>
    )
}

export default Graph
