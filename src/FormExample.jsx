import React, { useState } from 'react';

function FormExample() {
   // 2:Define the useState
   // input numchi vache values will strord in username
   const [userName, setUserName] = useState("");
   const [newUserDetails , setnewUserDetails ]=useState()
    // 3:function
   const getUserName = (event) => {
      // Update the userName state with the value from the input field
      setUserName(event.target.value);
   }

   // you can click the button  
   const userDetails =()=>{
    setnewUserDetails(userName)

   }



   return (
      <div className="formSection">
         <div className='formEventt'>
           {/* return the  username */}
          <h4>hello {newUserDetails}</h4>
              {/*1: input field numche vache changes  get cheyadaniki--> onchange event take(function ni value ga tesukuntundhi)----->  update che  */}
            <input type='text' placeholder='enter the name' onChange={getUserName} />
            <br />
            <button className='radies'  onClick= {userDetails }> Submit</button>
         </div>
      </div>
   );
}

export default FormExample;
