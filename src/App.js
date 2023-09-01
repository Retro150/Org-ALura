import { useState } from 'react';
import{ v4 as uuid } from 'uuid';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipos';
import Footer from './componentes/footer';


function App() {
  const [mostrarFormulario, actualizar] = useState(false)  
  const [colaboradores, actualizarColaboradores] = useState([
  {
    Equipo: "Programacion",
    Foto: "https://github.com/Retro150.png",
    Nombre: "Reymond Jr A.",
    Puesto: "Alumno",
    Fav: true
  },
  {
    Equipo: "Frond End",
    Foto: "https://depor.com/resizer/25quKBxP8Ti7cjCcmnR887FHER0=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/DAYT2F5NUNB7VPAFKUPHNDXVQA.jpg",
    Nombre: "Rosniel Levis",
    Puesto: "Alumno",
    Fav: false
  },
  {
    Equipo: "DevOps",
    Nombre: "Draivel Sena",
    Foto: "https://www.shutterstock.com/shutterstock/photos/2316996009/display_1500/stock-vector-editorial-design-and-vector-illustration-about-son-goku-in-dragonball-ready-to-print-for-sticker-2316996009.jpg",
    Puesto: "Alumno",
    Fav: false
  },
  {
    Equipo: "Movil",
    Foto: "https://github.com/Retro150.png",
    Nombre: "Retro 15",
    Puesto: "Alumno",
    Fav: false
  },
])

//Lista de equipos
  const [equipos, actulizarEquipos] = useState([
  
    {
      id: uuid(),
      titulo: "Programacion",
      colorPrimario: "#57c278",
      colorSecundario: "#d9f7e9"
    },
    {
      id: uuid(),
      titulo: "Frond End",
      colorPrimario: "#82cffa",
      colorSecundario: "#e8f8ff"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#a6d157",
      colorSecundario: "#f0f8e2"
    },
    {
      id: uuid(),
      titulo: "DevOps",
      colorPrimario: "#E06b69",
      colorSecundario: "#fde7e8"
    },
    {
      id: uuid(),
      titulo: "Ux y Diseno",
      colorPrimario: "#d86ebf",
      colorSecundario: "#fae9f5"
    },
    {
      id: uuid(),
      titulo: "Movil",
      colorPrimario: "#ffba05",
      colorSecundario: "#fff5d9"
    },
    {
      id: uuid(),
      titulo: "Innovacion y Gestion",
      colorPrimario: "#ff8a29",
      colorSecundario: "#ffeedf"
    }
  ])

  console.log(uuid())

  const cambiarMostrar = () => {
    actualizar(!mostrarFormulario)
  }

  //Registrar Colaborador

  const resgistarcolaborador = (colaborador) => {
    console.log("nuevo Colaborador", colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar Colaborador
   const eliminarColaborador = (Nombre) => {
    console.log("Colaboradaor ELiminado", Nombre)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.Nombre !== Nombre)
    actualizarColaboradores(nuevosColaboradores)  
  }

  //actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Color Nuevo", color, id)
    const equiposActulizados = equipos.map((equipo) => {
      if(equipo.titulo === id){
        equipo.colorPrimario = color
      }
      return equipo
    })

    actulizarEquipos(equiposActulizados)
  }

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
  actulizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  const like = (Nombre) => {
    console.log("like", Nombre)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.Nombre === Nombre){
        colaborador.Fav = !colaborador.Fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />
      { mostrarFormulario && <Formulario 
      equipos={equipos.map((equipo) => equipo.titulo)}
      resgistarcolaborador ={resgistarcolaborador}
      crearEquipo ={crearEquipo}
      />}

      {/* (Esta es la otra forma para hacer lo mismo pero mas corta)mostrarFormulario && <Formulario />*/}
      
      <MiOrg cambiarMostrar = {cambiarMostrar}/>
      
      {
        equipos.map((equipo) => <Equipo datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.Equipo=== equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like = {like}
          />
        )
      }

      <Footer />

    </div>
  );
}

export default App;
