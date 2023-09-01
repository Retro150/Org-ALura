import {useState} from "react"
import "./MiOrg.css"
const MiOrg = (props) => {

    //como se usa el useState
    // const [nombreVariable, funcionAUtilizar] = useState(valorInicial)

    console.log(props)
    //const [Mostrar, actulizar] = useState(true)
  //  const manejarClick = () => {
    //console.log("Mostrar/Ocultar Formulario", !Mostrar)
     //   actulizar(!Mostrar)}

    return <section className ="orgsection">
        <h3 className="titulo">Mi Organizacion</h3>
        <img src="./img/add.png" onClick={props.cambiarMostrar}/>

    </section>
}

export default MiOrg