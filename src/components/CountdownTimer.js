const CountdownTimer = ({details}) =>{

    const styles = {
        styleCountdownTimer:{
            fontSize: '50px',
            textAlign: 'center'
        }
    }

    return(
        <div style={styles.styleCountdownTimer }>
            {details.time}
        </div>
    )
}

export default CountdownTimer