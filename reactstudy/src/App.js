import React, { useState } from 'react';
import axios from 'axios';
import NewsList from './NewsList';

const App = () => {
  // const [data, setData] = useState(null);
  // // const onClick = () => {
  // //   axios
  // //     .get('https://jsonplaceholder.typicode.com/todos/1')
  // //     .then((response) => {
  // //       setData(response.data);
  // //     });
  // // };
  // const onClick = async () => {
  //   try {
  //     const response = await axios.get(
  //       'https://newsapi.org/v2/top-headlines?country=kr&apiKey=64f917364bbd45f79301273e25e2ebf8'
  //     );
  //     setData(response.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // return (
  //   <>
  //     <div>
  //       <button onClick={onClick}>불러오기</button>
  //     </div>
  //     {data && (
  //       <textarea
  //         rows={7}
  //         value={JSON.stringify(data, null, 2)}
  //         readOnly={true}
  //       />
  //     )}
  //   </>
  // );
  return <NewsList />;
};

export default App;
