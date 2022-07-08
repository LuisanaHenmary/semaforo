import LightDetails from "./LightDetails.js"

const Display = ({lights}) =>{
    return(
        <div>
           {lights.map(light => <LightDetails key={light.name} details={light} />)}
        </div>
    )
}

export default Display