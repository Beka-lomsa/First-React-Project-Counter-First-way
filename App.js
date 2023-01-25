import './App.css';
import {Buttons} from './compontens/Buttons';
import React, { useState } from 'react';



function App() {
  const [count, setCount] = useState(0)
  function addCount(){
    setCount(count + 1)
}
  return (
    <div style={styles.container}>
      <Buttons count={count} addCount={addCount}
      removeCount={()=> {setCount(count - 1)}}
      reset={() =>(setCount(0))}
      />
    </div>
  );
}

export default App;


const styles = {
  container: {
              width: "100%",
              height: "100vh",
              backgroundColor: "rgb(125, 40, 35)",
              display: "flex", 
              justifyContent: "center",
              paddingTop: "100px"
              }
}



