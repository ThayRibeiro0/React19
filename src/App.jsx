import './App.css'
import ParentComponent from './components/ParentComponent'
import UserForm from './components/UserForm'

function App() {
  return (
    <>
      <title>Application of Study</title>
      <meta 
        name='description'
        content='Learn programming'
      />

      {/* 1 - Actions */}
      <h1>1️⃣ Content</h1> 
      <UserForm />

      {/* 2 - Ref like props */}
      <h2>2️⃣ </h2>
      <ParentComponent />
    </>
  )
}

export default App



// first clean up all the page**
// import './App.css'
// function App() {
//   return (
//     <> </>
//   )
// }
// export default App

//import form at here 
// UserForm

//meta tags/datas here

//ref like prop - set a reference like prop at the input