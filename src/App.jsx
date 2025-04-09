// //Map/..................

// import EmpData from "./EmpData";
// import EmpDesign from "./EmpDesign";

// const App=()=>{
//   const ans=EmpData.map((key)=> <EmpDesign
//   eno={key.empno}
//   nm={key.name}
//   desig={key.desgination}
//   sal={key.salary}
// />);
//   return(
//     <>
//     <h1>Welcome!!</h1>

//     <table border="1" cellPadding="10px">
//       <tr>
//         <th>Emp no</th>
//         <th>Name</th>
//         <th>Desgination</th>
//         <th>salary</th>
       

       
//       </tr>
//       {ans}

//     </table>

  
   
   
//     </>
//   )
// }
// export default App;



//Router...................................................................................

// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Layout from "./Layout";
// import Home from "./Home";
// import About from "./About";


// const App=()=>{
//   return(
//     <>
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Layout />}>
//       <Route path="Home" element={<Home />} />
//       <Route path="About" element={<About />} />

//       </Route>
//     </Routes>
    
    
//     </BrowserRouter>
//     </>
//   )

// }
// export default App;



//css................................................................................

// const App=()=>{
//   return(
//     <>
//   <div style={{border:"5px solid red" , height:"500px" , width:"500px" , borderRadius:"50px", padding:"40px" , margin:"auto", backgroundColor:"blue"}}>
//     <div style={{border:"5px solid red" , height:"400px" , width:"400px" , borderRadius:"50px" , padding:"40px" , backgroundColor:"pink"}}>
//       <div style={{border:"5px solid red" , height:"300px" , width:"300px" , borderRadius:"50px" , padding:"40px" , backgroundColor:"green"}}>
//         <h1 style={{padding:"95px"}}>Cybrom</h1>
//       </div>
//     </div>
//   </div>
//     </>
//   )
// }
// export default App;





//useestate................................................................



// import Button from 'react-bootstrap/Button';
// import { useState } from "react";

// const App=()=>{
//   const [ct , setct]=useState(0)

//   const inc=()=>{

//     setct(ct+1)
//   }
//   const dec=()=>{
// if(ct<1)
// {
//   alert("count is less than 1")
// }
// else{
//     setct(ct-1)
// }
//   }
//   return(
//     <>
// <div style={{width:"500px" , backgroundColor:'lightgreen' ,padding:"30px", margin:"auto" , borderRadius:"20px", border:"3px solid black"}}>
//     <h1>My counter app:</h1>

//     <h1>Count:{ct}</h1>

// <div >
//     <Button variant="primary" onClick={inc} style={{marginLeft:"10px"}}>Increment</Button>
//     <Button variant="warning" onClick={dec} style={{marginLeft:"10px"}}>Decrement</Button>
//     <Button variant="danger" onClick={()=>{setct(0)}} style={{marginLeft:"10px"}}>Reset</Button>
//     </div>
//     </div>

//     </>
//   )

// }
// export default App;



//useEffect......................................

import { useState,useEffect } from "react";



const App=()=>{
  const [count , setcnt]=useState(0)
  useEffect(()=>{
    
    setInterval(()=>{
      setcnt(count+1);
    },2000)
  
  })
  return(
    <>
    <h1>count: {count}</h1>
    </>
  )
}
export default App;
