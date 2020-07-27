import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Formulario } from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';
//rafcp comando para generar todo el código de forma automática

function App() {

  // Se define la categoría y noticias
  const [ categoria, guardarCategoria ] = useState('');
  const [ noticias, guardarNoticias ] = useState([])

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=d661ffa4c5f743bbb74aea372ec30d62`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      console.log(noticias)
      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria]);


  return (
    <>
      <Header 
        titulo='BUSCADOR DE NOTICIAS'
      />

      <div className="container white">
        <Formulario guardarCategoria={ guardarCategoria }/>

        <ListadoNoticias noticias={ noticias } />
      </div>
    </>
  );
}

export default App;
