// Actions: Creating of a form to use the atribute of action at 
// the form UseForm.jsx liked with the App.jsx

import { useState } from 'react'
//save the status of the user dont need 
//the useState to manipulate the form itself. But if
//I dont have API or Database I will neeed to manage this
//form using this state then its not a problem in this case.

const UserForm = () => {
    const [user, setUsers] = useState([]);

    async function handleAddUser(formData) {
        console.log("sent form"); 'sent form'
    }

  return (
    <div>
        <form action={handleAddUser}>
            <div>
                <input type="text" name='name' placeholder='Type your name:' />
            </div>
            <div>
                <input type="email" name='email' placeholder='Type your email:' /> 
            </div>
            <button type="submit">Send</button>
        </form>
            
    </div>
  )
}

export default UserForm

// form with a action call a asynchronous function to call API
// Also we dont have more the states then we need to put the 
// data/atribute of each form at the async function
// without prevent default and manipulation of states, simple
// without onChange, onSubmit
// input the state dont exist then the name atribute HTML 
//will be the way to reference this value at the input

