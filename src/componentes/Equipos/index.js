import "./Equipos.css"
import Colaborador from "../Colaborador"
import hexToRgba from "hex-to-rgba"

const Equipo = (props) => {

//Destructuracion
// es como sacar los props de al array y a la vez crear una variable con el mimso mismo 
const { colorPrimario, colorSecundario, titulo, id} = props.datos
const { colaboradores, eliminarColaborador, actualizarColor, like } = props

    return <>
    {        
        colaboradores.length > 0 &&
        <section className="equipo" style={{ backgroundColor: hexToRgba(colorPrimario, 0.6) }}>
            <input 
            type="color"
            className="color"
            value={ hexToRgba(colorPrimario, 0.6)}
            onChange={(evento) => {
                actualizarColor(evento.target.value, id)
            }}

            />
            <h3 style={{ borderColor: colorPrimario}}>{titulo}</h3>
            <div className="colaboradores">
            
            {
            colaboradores.map((colaborador, index) => <Colaborador
                    datos={colaborador}
                    key={index}
                    colorPrimario={colorPrimario}
                    eliminarColaborador={eliminarColaborador}
                    like ={like}
            />)
            }
            
                
            </div>
        </section>
    
    }
    </>
    
} 

export default Equipo