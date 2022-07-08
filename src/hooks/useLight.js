import { useState } from 'react'

const useLight = (initial_state) =>{
    //const [timer, setTimer] = useState('00')
    const [lights, setlights] = useState(initial_state)



    const on_light = (choice_light) =>{
        const name = choice_light
        let new_state

        new_state = lights.map(light => light.name === name
            ?({
                ...light,
                is_on: true
            })
            :light
        )
        setlights(new_state)
    }

    const off_light = (choice_light) =>{
        const name = choice_light
        let new_state

        new_state = lights.map(light => light.name === name
            ?({
                ...light,
                is_on: false
            })
            :light
        )

        setlights(new_state)
    }


    return [lights, on_light, off_light]

}

export default useLight