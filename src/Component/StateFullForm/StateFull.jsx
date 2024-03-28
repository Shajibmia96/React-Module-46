import { useState } from "react";

const StateFull = () => {

      const handlesSubmitted = e =>{
          e.preventDefault();
           if(pass.length < 6){
               setError("Password must be 6 character or longer ")
           }
           else{
             setError('')
           }
           
          console.log(name)
          console.log(email)
          console.log(pass)
          
      };
      const [name , setName]  = useState("Rajoni Klanto")
      const [email , setEmail] =useState(null);
      const [pass , setPass] = useState(null);
      const [error , setError] = useState('')

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
          type="text" value={name} name="name" id="" placeholder='Name' className='border-2 border-red-400' /> <br />

          <input
           onChange={handleEmailChange} 

          type="Email" name="Email" id="" placeholder='E-mail' className='border-2 border-red-400' /> <br />

          <input 
            onChange={handlePassChange}
          type="password" required name="password" id="" placeholder='password' className='border-2 border-red-400' /> <br />

          <input type="submit" value="Submit" className='border-2 border-blue-400' />
       </form>
       {
         error && <p>{error}</p>
       }
        </div>
    );
};

export default StateFull;