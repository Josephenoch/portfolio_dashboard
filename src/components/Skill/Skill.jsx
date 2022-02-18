import {React, useEffect, useState} from 'react';
import raw from "./fa.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PageHeader from '../PageHeader';

const Skill = () => {
  const [datas, setData] = useState(raw[0])
  var array = Object.values(datas)
  console.log(array)
  return (
    <div>
        <PageHeader title="Skills"/>
        hello
        {
          
          array.map((data => {
              return <FontAwesomeIcon icon={"fa-brands fa-" + data.name }/>
          })
          )
        }
          

    </div>
    );
}
export default Skill 



