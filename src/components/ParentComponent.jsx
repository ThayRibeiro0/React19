import {useRef, useEffect} from 'react'
import InputField from './InputField';

const ParentComponent = () => {
    // inicialize the input
    const inputRef = useRef(null)

    //start after the load the page
    useEffect(() => {
        //check if inputRef exit and if have focus
        if(inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

  return (
    <div>
        <InputField ref={inputRef} placeholder="Type something here..."/>
    </div>
  )
}

export default ParentComponent

//ref like prop - set a reference like prop at the input