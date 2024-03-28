const ReusableForm = ({formTitle ,BtnText='Submit', handlesSubmitted }) => {

        const handleLocalSubmit = e =>{
             e.preventDefault();
             const data = {
                name : e.target.name.value,
                email : e.target.email.value,
                password : e.target..pasvalue
             }
             handlesSubmitted(data)
        }
    return (  
        <div> 
             <h1 className="text-2xl mb-2">{formTitle}</h1>
         <form  onSubmit={handleLocalSubmit}>
          <input type="text" name="name" id="" placeholder='Name' className='border-2 border-red-400' /> <br />
          <input type="text" name="email" id="" placeholder='E-mail' className='border-2 border-red-400' /> <br />
          <input type="text" name="password" id="" placeholder='password' className='border-2 border-red-400' /> <br />
          <input type="submit" value={BtnText} className='border-2 border-blue-400' />
       </form> 
        </div>
    );
};

export default ReusableForm;