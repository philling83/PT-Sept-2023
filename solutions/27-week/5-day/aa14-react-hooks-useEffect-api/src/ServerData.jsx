import { useEffect, useState } from "react";



const ServerData = () => {

  const [serverData, setServerData] = useState([])

  useEffect(() => {
    const fetchFortnite = async () => {
      const data = await fetch('https://fortnite-api.com/v2/news');
      const res = await data.json();
      // console.log(res.data.br.motds);
      setServerData(res.data.br.motds);
    }
    fetchFortnite();
  }, [])

  if(!serverData) return <h1>No data to display</h1>


  return (
    <div>
      {
        serverData.map(data => (
          <div className="serverContainer" key={data.id}>
            <h1 className="title">{data.title}</h1>
            <h2 className="body"> {data.body}</h2>
            <img src={data.image} alt={data.title}/>
          </div>
        ))
      }
    </div>
  );

};

export default ServerData;
