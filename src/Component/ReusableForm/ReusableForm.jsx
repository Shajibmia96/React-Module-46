

const ReusableForm = ({submitTitle , handlesSubmitted, handleBtnText='Submit', children }) => {

        const handleLocalSubmit = e =>{
             e.preventDefault()
             const data = {
                name : e.target.name.value,
                email : e.target.email.value,
                password : e.target.password .value
             }
             handlesSubmitted(data)
        }
    return (
        <div>
        <form  onSubmit={handleLocalSubmit}>
          {children}
          <input type="text"  name="name" id="" placeholder='Name' className='border-2 border-red-400' /> <br />
          <input type="email"  name="email" id="" placeholder='E-mail' className='border-2 border-red-400' /> <br />
          <input type="password"  name="password" id="" placeholder='password' className='border-2 border-red-400' /> <br />
          <input type="submit" value={handleBtnText} className='border-2 border-blue-400' />
       </form> 
        </div>
    );
};

export default ReusableForm;