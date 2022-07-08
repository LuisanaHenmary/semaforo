import { useState, useEffect } from "react"

const defaultRemainingTime = {
    seconds: '00',
}



const CountdownTimer = () =>{

    const styles = {
        styleCountdownTimer:{
            fontSize: '50px',
            textAlign: 'center'
        }
    }

    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)

    return(
        <div style={styles.styleCountdownTimer }>
            {remainingTime.seconds}
        </div>
    )
}

export default CountdownTimer