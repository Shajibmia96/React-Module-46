
import './App.css'
import StateFull from './Component/StateFullForm/StateFull';

function App() {
   // const handlesSubmitted = (e) =>{
   //      e.preventDefault();
   //      console.log(e.target.name.value)
   //      console.log(e.target.email.value)
   //      console.log(e.target.Phone.value)
   //     console.log("Submitted your documents")
   // }

  return (
    <>
       {/* <h1>Please Enter your E-mail here</h1>

       <form  onSubmit={handlesSubmitted}>
          <input type="text" name="name" id="" placeholder='Name' className='border-2 border-red-400' /> <br />
          <input type="text" name="email" id="" placeholder='E-mail' className='border-2 border-red-400' /> <br />
          <input type="text" name="Phone" id="" placeholder='Phone' className='border-2 border-red-400' /> <br />
          <input type="submit" value="Submit" className='border-2 border-blue-400' />
       </form> */}
       <StateFull></StateFull>
    </>
  )
}

export default App
