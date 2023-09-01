import { useState } from "react"
import "./Formulario.css"
import Campo from "../campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    const [Nombre, ActualizarNombre] = useState("")
    const [Puesto, ActualizarPuesto] = useState("")
    const [Foto, ActualizarFoto] = useState("")
    const [Equipo, ActualizarEquipo] = useState("")

    const [ Titulo, ActualizarTitulo ] = useState("")
    const [ Color, ActualizarColor ] = useState("")
    

    const { resgistarcolaborador, crearEquipo} = props

    const manejarEnvio = (evento) => {
        evento.preventDefault()
        console.log("Datos enviados")
        let datosAEnviar = {
            Nombre,
            Puesto,
            Foto,
            Equipo
        }
        resgistarcolaborador(datosAEnviar)
    }

    const manejarEquipo = (evento) => {
        evento.preventDefault()
        crearEquipo({titulo: Titulo, colorPrimario: Color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el Formulario para crear el colaborador</h2>
            <Campo 
                titulo ="Nombre" 
                placeholder ="Ingresa nombre"
                required 
                valor={Nombre} 
                actualizarValor={ActualizarNombre}
                />
            <Campo 
                titulo ="Puesto" 
                placeholder ="Ingresa puesto"
                required
                valor={Puesto}
                actualizarValor={ActualizarPuesto}
                />
            <Campo
                titulo ="Foto" 
                placeholder ="Ingresa enlace de foto" 
                required
                valor={Foto}
                actualizarValor={ActualizarFoto}
            />
            <ListaOpciones 
                valor={Equipo} 
                ActualizarEquipo={ActualizarEquipo} 
                equipos={props.equipos}
                />
            <Boton>
                Crear Colaboradores
            </Boton>
        </form> 

        <form onSubmit={manejarEquipo}>
            <h2>Rellena el Formulario para crear el Equipo</h2>
            <Campo
                titulo ="Equipo" 
                placeholder ="Ingresa equipo"
                required 
                valor={Titulo} 
                actualizarValor={ActualizarTitulo}
                />
            <Campo 
                titulo ="Color" 
                placeholder ="Ingresa Color en #"
                required
                valor={Color}
                actualizarValor={ActualizarColor}
                type="color"
                />
             <Boton>
                Crear Equipo
            </Boton>
        </form>
    </section>
}

export default Formulario