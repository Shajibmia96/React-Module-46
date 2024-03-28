import useInputHooks from "../../Hooks/useInputHook";

const HookForm = () => {

    //    const nameState= useInputHooks('Rajoni klanto')
      const emailState = useInputHooks('Rajoni klanto@gamil.com')
      const passState = useInputHooks('')
       const handlesSubmitted = e =>{
           e.preventDefault()
           console.log("Display hook" , emailState.value)
           console.log("Display hook" , passState.value)
       }
    return (
        <div>
          <form  onSubmit={handlesSubmitted}>
          {/* <input type="text" value={name} onChange={handleNameChange} name="name" id="" placeholder='Name' className='border-2 border-red-400' /> <br /> */}
          <input type="text" {...emailState} name="email" id="" placeholder='E-mail' className='border-2 border-red-400' /> <br />
          <input type="text" {...passState} name="password" id="" placeholder='password' className='border-2 border-red-400' /> <br />
          <input type="submit" value="Submit" className='border-2 border-blue-400' />
       </form> 
        </div>
    );
};

export default HookForm;