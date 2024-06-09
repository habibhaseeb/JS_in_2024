@import {useState} from './react'
const [color, setColor] = useState("grey");
let colorHandle = () => {
  return `<>
           <div>
             <h2>Weclcome to react.js project</h2>
          </div>
          <span value={{color}}>color</span>
         </>`;
   };
