import React from 'react';
import redondo from './Images/Forma/redondo.png';
import princesa from './Images/Forma/princesa.png'
import esmeralda from './Images/Forma/esmeralda.png'
import ovalo from './Images/Forma/ovalo.png'
import marquesa from './Images/Forma/marquesa.png'
import pera from './Images/Forma/pera.png'
import asscher from './Images/Forma/asscher.png'
import corazon from './Images/Forma/corazon.png'
import cojin from './Images/Forma/cojin.png'
import baguette from './Images/Forma/baguette.png'
import trillon from './Images/Forma/trillon.png'
import radiante from './Images/Forma/radiante.png'
import amarilloClaro from './Images/Color/amarillo-claro.png'
import casiIncoloro from './Images/Color/casi-incoloro.png'
import incoloro from './Images/Color/incoloro.png'
import ligeramenteAmarillo from './Images/Color/ligeramente-amarillo.png'
import perfecta from './Images/Claridad/perfecta.png'
import noVisibles from './Images/Claridad/imperfecciones-no-visibles.png'
import imperfecciones10x from './Images/Claridad/imperfecciones-10x.png'
import imperfeccionesSimpleVista from './Images/Claridad/imperfecciones-simple-vista.png'
import excelente from './Images/Corte/excelente.png'
import muyBueno from './Images/Corte/muy-bueno.png'
import bueno from './Images/Corte/bueno.png'
import regular from './Images/Corte/regular.png'
import quilatajeBajo from './Images/Quilataje/pequeno.png'
import quilatajeAlto from './Images/Quilataje/grande.png'
import './App.css';
import ButtonFilter from './Components/ButtonFilter/ButtonFilter'
import RangeFilter from './Components/RangeFilter/RangeFilter';
import Button from './Components/Button/Button'

class App extends React.Component {
  constructor(props){
    super(props)
    this.forma = React.createRef();
    this.color = React.createRef();
    this.claridad = React.createRef();
    this.corte = React.createRef();
    this.quilataje = React.createRef();
    this.precio = React.createRef();
  }

  buscar = () => {
    console.log({
      forma: this.forma.current.getSelected(),
      color: this.color.current.getSelected(),
      claridad: this.claridad.current.getSelected(),
      corte: this.corte.current.getSelected(),
      quilataje: this.quilataje.current.getSelected(),
      precio: this.precio.current.getSelected()})
  }

  limpiar = () => {
      this.forma.current.limpiar()
      this.color.current.limpiar()
      this.claridad.current.limpiar()
      this.corte.current.limpiar()
      this.quilataje.current.limpiar()
      this.precio.current.limpiar()
  }

  render() {
    return (
      <>
        <div className="pageWrapper">
          <div className="columnWrapper">
            <ButtonFilter ref={this.forma} title="FORMA" buttons={[{ src: redondo, label: "REDONDO" },
            { src: princesa, label: "PRINCESA" },
            { src: esmeralda, label: "ESMERALDA" },
            { src: ovalo, label: "ÓVALO" },
            { src: marquesa, label: "MARQUESA" },
            { src: pera, label: "PERA" },
            { src: asscher, label: "ASSCHER" },
            { src: corazon, label: "CORAZÓN" },
            { src: cojin, label: "COJÍN" },
            { src: baguette, label: "BAGUETTE" },
            { src: trillon, label: "TRILLÓN" },
            { src: radiante, label: "RADIANTE" }]} tooltip="Elige la imagen que mejor describe la forma del diamante que buscas."></ButtonFilter>
            <ButtonFilter ref={this.color} title="COLOR" buttons={[{ src: incoloro, label: "TRANSPARENTE" },
            { src: casiIncoloro, label: "CASI INCOLORO" },
            { src: ligeramenteAmarillo, label: "LIGERAMENTE AMARILLO" },
            { src: amarilloClaro, label: "AMARILLO CLARO" },]} tooltip="Elige el color del diamante que buscas."></ButtonFilter>
            <ButtonFilter ref={this.claridad} title="CLARIDAD" buttons={[{ src: perfecta, label: "PERFECTA" },
            { src: noVisibles, label: "IMPERFECCIONES NO VISIBLES" },
            { src: imperfecciones10x, label: "IMPERFECCIONES VISIBLES A 10X" },
            { src: imperfeccionesSimpleVista, label: "IMPERFECCIONES VISIBLES A SIMPLE VISTA" },]} tooltip="Elige la claridad del diamante que buscas."></ButtonFilter>
          </div>
          <div className="columnWrapper">
            <ButtonFilter ref={this.corte} title="CORTE" buttons={[{ src: excelente, label: "EXCELENTE (MÁXIMO BRILLO)" },
            { src: muyBueno, label: "MUY BUENO (MUY BRILLANTE)" },
            { src: bueno, label: "BUENO (BRILLANTE)" },
            { src: regular, label: "REGULAR (POCO BRILLANTE)" },]} tooltip="Elige la claridad del diamante que buscas."></ButtonFilter>
            <RangeFilter ref={this.quilataje} title="QUILATAJE" tooltip="Elige el rango de quilataje." from={0} to={30} imageFrom={quilatajeBajo} imageTo={quilatajeAlto}></RangeFilter>
            <RangeFilter ref={this.precio} title="PRECIO" tooltip="Elige el rango de precio." from={0} to={5000000} imageFrom="" imageTo=""></RangeFilter>
          </div>
        </div>
        <div className="buttonWrapper">
          <Button label="BUSCAR" color="#1724ab" textColor="#FFFFFF" onClick={this.buscar}></Button>
          <Button label="LIMPIAR FILTROS" color='#FFFFFF' textColor="#1724ab" onClick={this.limpiar}></Button>
        </div>
      </>
    )
  }
}

export default App;
