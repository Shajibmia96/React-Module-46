
import { data } from 'autoprefixer';
import './App.css'

import ReusableForm from './Component/ReusableForm/ReusableForm';
// import StateFull from './Component/StateFullForm/StateFull';

function App() {
   // const handlesSubmitted = (e) =>{
   //      e.preventDefault();
   //      console.log(e.target.name.value)
   //      console.log(e.target.email.value)
   //      console.log(e.target.Phone.value)
   //     console.log("Submitted your documents")
   // }

    const handleSubmit = data =>{
        console.log(data)
    }

    const handleProfile = data=>{
      console.log(data)
    }

  return (
    <>
       {/* <h1>Please Enter your E-mail here</h1>

       <form  onSubmit={handlesSubmitted}>
          <input type="text" name="name" id="" placeholder='Name' className='border-2 border-red-400' /> <br />
          <input type="text" name="email" id="" placeholder='E-mail' className='border-2 border-red-400' /> <br />
          <input type="text" name="Phone" id="" placeholder='Phone' className='border-2 border-red-400' /> <br />
          <input type="submit" value="Submit" className='border-2 border-blue-400' />
       </form> */}
       {/* <StateFull></StateFull> */}
       {/* <RefForm></RefForm> */}
       {/* <HookForm></HookForm> */}
       <ReusableForm submitTitle={'Sing up'}
                     handlesSubmitted={handleSubmit}
       >
         <div>
            <h1>Sing up</h1>
            <p>please Sing up first</p>
         </div>
       </ReusableForm>
       <ReusableForm submitTitle={'Profile update'}
                     handleBtnText={'Profile update'}
                     handlesSubmitted={handleProfile}
       >
         <div>
            <h1>Update your Profile</h1>
            <p>Please keep update yours profile </p>
         </div>
       </ReusableForm>
    </>
  )
}

export default App
