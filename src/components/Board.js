import Display from "./Display.js"
import useLight from "../hooks/useLight.js"
import { useState } from "react"

const styles = {
    board:{
        backgroundColor:'black',
        border: '1px solid rgb(191, 181, 197)',
        justifyContent: 'space-between',
    },
    on_button:{
        border: 'none',
        color: 'white',
        width: '50%',
        padding: '20px',
        fontWeight: 'bold',
        fontSize: '30px',
        backgroundColor: 'greenyellow',
    },
    
    off_button:{
        border: 'none',
        color: 'white',
        padding: '20px',
        width: '50%',
        fontWeight: 'bold',
        fontSize: '30px',
        backgroundColor: 'red',
    },
    on:{
        border: 'none',
        color: 'greenyellow',
        padding: '20px',
        fontWeight: 'bold',
        fontSize: '30px',
        textAlign: 'center'
    },
    
    off:{
        border: 'none',
        color: 'red',
        padding: '20px',
        fontWeight: 'bold',
        fontSize: '30px',
        textAlign: 'center'
    },

}


const Board = () => {

    const default_state = [
        { name: 'Roja', color: 'red', time: 20, is_on: false },
        { name: 'Amarrilla', color: 'yellow', time: 10, is_on: false},
        { name: 'Verde', color: 'green', time: 45, is_on: false},
    ]

    const [stateTrafLight, setTrafLight] = useState(false)
    const [lights, on_light, off_light] = useLight(default_state)

   
    const on = () =>{
        setTrafLight(true)
        on_light("Verde")
    }

    const off = () =>{
        setTrafLight(false)
        off_light("Verde")
    }
    
    return(
        <section style={styles.board} >
            <div>{stateTrafLight? <h2 style={styles.on} >Encedido</h2>:<h2 style={styles.off} >Apagado</h2>}</div>
            <Display lights={lights} />
            <div style={styles.panel}>
                <button
                    style={styles.on_button}
                    type="button"
                    onClick={on}
                >
                    ON
                </button>

                <button
                    style={styles.off_button}
                    type="button"
                    onClick={off}
                >
                    OFF
                </button>
            </div>
        </section>
    )
}

export default Board