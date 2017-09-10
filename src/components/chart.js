import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default (props) => {
  return (
    <AreaChart width={200} height={150} data={props.data} >
      <XAxis dataKey={props.dataKey}/>
      <YAxis/>
      <CartesianGrid strokeDasharray="3 3"/>
      <Tooltip/>
      <Area type='monotone' dataKey={props.dataKey} stroke='#ffc658' fill={props.fillColor} />
    </AreaChart>
  );
}
