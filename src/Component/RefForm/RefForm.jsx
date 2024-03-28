import { useEffect, useRef, useState } from "react";

const RefForm = () => {

       const NameRef = useRef(null)
       const EmailRef = useRef(null)
       const PassRef = useRef(null)

       const [pass ,setPass] = useState();
       const [error ,setError] = useState()
    //    console.log(pass.length)

       useEffect ( ()=>{
             
             NameRef.current.focus()
                  }, [])

         const handlesSubmitted = e =>{
              e.preventDefault();
            //   if(pass.length < 6){
            //     setError("PassWord must be 6 characters or longer")
            //   }else{
            //      setError('')
            //   }
              console.log(NameRef.current.value)
              console.log(EmailRef.current.value)
            //   console.log(PassRef.current.value)
              setPass(PassRef.current.value)

              
         }
    return (
        <div>
          <form  onSubmit={handlesSubmitted}>
          <input type="text" ref={NameRef} name="name" id="" placeholder='Name' className='border-2 border-red-400' /> <br />

          <input type="Email" ref={EmailRef} defaultValue={'@gmail.com'} name="Email" id="" placeholder='E-mail' className='border-2 border-red-400' /> <br />

          <input type="password" ref={PassRef} name="password" id="" placeholder='password' className='border-2 border-red-400' /> <br />

          <input type="submit" value="Submit" className='border-2 border-blue-400' />
       </form>
       {
        //   error && <p>{error}</p>
        pass
       }
        </div>
    );
};

export default RefForm;