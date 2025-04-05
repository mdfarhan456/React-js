import EmpData from "./EmpData";
import EmpDesign from "./EmpDesign";

const App=()=>{
  const ans=EmpData.map((key)=> <EmpDesign
  eno={key.empno}
  nm={key.name}
  desig={key.desgination}
  sal={key.salary}
/>);
  return(
    <>
    <h1>Welcome!!</h1>

    <table border="1" cellPadding="10px">
      <tr>
        <th>Emp no</th>
        <th>Name</th>
        <th>Desgination</th>
        <th>salary</th>
       

       
      </tr>
      {ans}

    </table>

  
   
   
    </>
  )
}
export default App;