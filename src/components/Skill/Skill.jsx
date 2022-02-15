import {React, useEffect, useState} from 'react';
import PageHeader from '../PageHeader';

const Skill = () => {
  const [datas, setData] = useState([])
  useEffect(() =>{
    fetch("https://reqres.in/api/users")
    .then(response => response.json() )
    .then(data => setData(data.data))
  },[]);
  return (
    <div>
        <PageHeader title="Skills"/>
        {
          datas.map((data)=>{
          {console.log(data.email)}
          })
        }
    </div>
    );
}
export default Skill