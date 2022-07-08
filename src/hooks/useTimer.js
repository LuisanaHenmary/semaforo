import { useState } from 'react'

const usetimer = (initialValues) =>{
    const [seconds, setSeconds] = useState(initialValues)

    const adding = () =>{
        setSeconds( seconds + 1 )
    }

    const reducing = () =>{
        setSeconds( seconds - 1 )
    }

    const reset = () => {
        setSeconds(initialValues)
    }

    return [seconds, adding, reducing, reset]

}

export default usetimer