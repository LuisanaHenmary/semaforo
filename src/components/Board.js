import Display from "./Display.js"
import useLight from "../hooks/useLight.js"

const styles = {
    board:{
        backgroundColor:'black',
        border: '1px solid rgb(191, 181, 197)',
        justifyContent: 'space-between',
    },
    on:{
        border: 'none',
        color: 'white',
        width: '50%',
        padding: '20px',
        fontWeight: 'bold',
        fontSize: '30px',
        backgroundColor: 'greenyellow',
    },
    
    off:{
        border: 'none',
        color: 'white',
        padding: '20px',
        width: '50%',
        fontWeight: 'bold',
        fontSize: '30px',
        backgroundColor: 'red',
    },
}


const Board = () => {

    //const [light_red, onLightRed, offLightRed] = useLight(false)
    //const [light_yellow, onLightYellow, offLightYellow] = useLight(false)
    //const [light_green, onLightGreen, offLightGreen] = useLight(false)

    

    const default_state = [
        { name: 'Roja', color: 'red', time: 20, is_on: false },
        { name: 'Amarrilla', color: 'yellow', time: 10, is_on: false},
        { name: 'Verde', color: 'green', time: 45, is_on: false},
    ]

    const [lights, on_light, off_light] = useLight(default_state)

    const on = () =>{
        on_light("Roja")

    }

    const off = () =>{
        off_light("Roja")  
    }
    
    
    return(
        <section style={styles.board} >
            <Display lights={lights} />
            <div style={styles.panel}>
                <button
                    style={styles.on}
                    type="button"
                    onClick={on}
                >
                    ON
                </button>

                <button
                    style={styles.off}
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