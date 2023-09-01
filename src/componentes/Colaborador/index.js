import "./Colaborador.css"
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Colaborador = (props) => {

const { Nombre, Puesto, Foto, Equipo, id, Fav} = props.datos
const { colorPrimario, eliminarColaborador, like } = props

    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(Nombre)} />
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={Foto} alt={Nombre}/>
        </div>
        <div className="info">
            <h4>{Nombre}</h4>
            <h5>{Puesto}</h5>

            {Fav ? <AiFillHeart color="red" onClick={()=> like(Nombre)}/> :<AiOutlineHeart onClick={()=> like(Nombre)} />}
        </div>
    </div>
}

export default Colaborador