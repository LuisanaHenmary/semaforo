import CountdownTimer from "./CountdownTimer.js"

const LightDetails = ({details}) =>{
    const styles = {
        card:{
            color: details.is_on ? details.color: 'black',
            borderRadius: '10px',
            border: "1px solid aliceblue",
            padding: '20px',
        },
        styleName:{
            fontSize: '30px',
        }

    }
    
    return(
        <div style={styles.card } >
            
            <label style = {styles.styleName} >Luz {details.name}</label>
            <CountdownTimer details={details} />
        </div>
    )


}

export default LightDetails