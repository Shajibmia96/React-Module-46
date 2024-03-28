import { useState } from "react"

 const useInputHooks = (DefaultValue = null) =>{
      const [value , setValue] = useState(DefaultValue)

    //   const handleChange = e =>{
    //       setValue(e.target.value)
    //   }
      const onChange = e =>{
          setValue(e.target.value)
      }
      return {
               value,
               onChange
      }

 }

 export default useInputHooks;