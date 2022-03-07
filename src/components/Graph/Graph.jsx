import { subDays, format, parseISO } from 'date-fns'
import React from 'react'
import { ResponsiveContainer, AreaChart, YAxis, XAxis, Area, Tooltip, CartesianGrid  } from 'recharts'

const data = []
for(let num = 30; num>=0; num--){
    data.push({
        date:subDays(new Date(), num).toISOString().slice(0,10),
        value: 1+Math.random()
    })
}
const Graph = (props) => {
    return (
        <div style={{marginTop:50}}>
            <ResponsiveContainer width="95%" height={500}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={props.color} stopOpacity={0.4}/>
                            <stop offset="75%" stopColor={props.color} stopOpacity={0.05}/>
                        </linearGradient>
                    </defs>
                    <Area dataKey="value" stroke={props.color} fill="url(#color)"/>
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
