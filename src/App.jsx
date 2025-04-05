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

const App=()=>{
  return(
    <>
  <div style={{border:"5px solid red" , height:"500px" , width:"500px" , borderRadius:"50px", padding:"40px" , margin:"auto", backgroundColor:"blue"}}>
    <div style={{border:"5px solid red" , height:"400px" , width:"400px" , borderRadius:"50px" , padding:"40px" , backgroundColor:"pink"}}>
      <div style={{border:"5px solid red" , height:"300px" , width:"300px" , borderRadius:"50px" , padding:"40px" , backgroundColor:"green"}}>
        <h1 style={{padding:"95px"}}>Cybrom</h1>
      </div>
    </div>
  </div>
    </>
  )
}
export default App;