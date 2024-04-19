const InputField = ({ placeholder, ref }) => {
  return (
    <input type="text" placeholder={placeholder} ref={ref} />
  )
}

export default InputField

//ref like prop - set a reference like prop at the input
//BEFORE need to use forwardRef being hard like show at the React docs: https://react.dev/reference/react/forwardRef