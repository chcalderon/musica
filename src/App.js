import React, {useState, useEffect, Fragment} from 'react';

import Formulario from './component/Formulario';

import axios from 'axios';

import Cancion from './component/Cancion';

function App() {
  // Utilizar useState con 3 states
  const [artista, agregarArtista] = useState('');

  const [letra, agregarLetra] = useState([]);

  const [info, agregarInfo] = useState({});

  // Metodo para consultar la API de Letras de canciones
  const consultarApiLetra = async busqueda => {
      //console.log(busqueda);
      const {artista, cancion} = busqueda;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      
      const resultado = await axios(url);
      
      //console.log(resultado);
      agregarLetra(resultado.data.lyrics);
  }

  return (
    <Fragment>
      <Formulario consultarApiLetra={consultarApiLetra}/>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5">
          
          </div>
          <div className="col-md-5">
            <Cancion 
              letra={letra}
            />
          </div>
        </div>
      </div>

    </Fragment>
    )
}

export default App;