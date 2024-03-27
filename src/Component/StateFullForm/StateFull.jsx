import { useState } from "react";

const StateFull = () => {

      const handlesSubmitted = e =>{
          e.preventDefault();
          console.log(email)
          console.log(pass)
          console.log(name)
      };
      const [name , setName]  = useState(null)
      const [email , setEmail] =useState(null);
      const [pass , setPass] = useState(null)

      const handleEmailChange = e =>{
              setEmail( e.target.value)      
      }

      const handlePassChange = e=>{
          setPass(e.target.value)
      }
      const handlesNameChange = e =>{
          setName(e.target.value)
      }




    return (
        <div>
          <form  onSubmit={handlesSubmitted}>
          <input 
           onChange={ handlesNameChange}
          type="text" name="name" id="" placeholder='Name' className='border-2 border-red-400' /> <br />

          <input
           onChange={handleEmailChange} 

          type="Email" name="Email" id="" placeholder='E-mail' className='border-2 border-red-400' /> <br />

          <input 
            onChange={handlePassChange}
          type="password" name="password" id="" placeholder='password' className='border-2 border-red-400' /> <br />

          <input type="submit" value="Submit" className='border-2 border-blue-400' />
       </form>
        </div>
    );
};

export default StateFull;