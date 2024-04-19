// Actions: Creating of a form to use the atribute of action at 
// the form UseForm.jsx liked with the App.jsx

import { useState } from 'react'
//save the status of the user dont need 
//the useState to manipulate the form itself. But if
//I dont have API or Database I will neeed to manage this
//form using this state then its not a problem in this case.

const UserForm = () => {
    const [users, setUsers] = useState([]);

    async function handleAddUser(formData) {
        const name= formData.get("name");
        const email= formData.get("email");

        // console.log("sent form"); 'sent form'
        // console.log(name, email);

        setUsers((prev) => [prev, { name, email}]);
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
        <h3>Users</h3>
        <ul>
            {users.map((user, index) => (
                <li key={index}>
                    {user.name} - {user.email}
                </li>
            ))}
        </ul>     
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


//after create the form now its necessary save the data typed
//and have acess and to do this it was necessaryb create a variable name and there 
//specify the form like argument, get get the data for the data of this form for the name of the form
//at the async function

//to simulation of the addiction at our database we use setUsers((prev) => [prev, { name, email}]); 
//plus we do the map to save all the data inside there
