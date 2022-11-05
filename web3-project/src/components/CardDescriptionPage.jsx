import React , {useState , useEffect} from 'react'

const CardDescriptionPage = ({searchdata}) => {
  const URL = "http://localhost:3001/event/";
  const [Data , SetData] = useState([]);
  const APIURL = URL + searchdata;
  const GetData  = async (searchitem)=>{
    const response =  await fetch(APIURL , {
      method: 'POST',``
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    }).catch((err) => console.log(err));
    const res = await response.json();
    console.log(res);
    SetData(res);
  }
  useEffect(()=>{
    GetData('comicon');
  },[]);
  return (
    <div>
      {
      }
    </div>
  )
}

export default CardDescriptionPage