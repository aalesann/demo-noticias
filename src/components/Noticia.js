import React from 'react'
import PropTypes from 'prop-types';
import styles from './Noticia.module.css';

const Noticia = ({ noticia }) => {

    // Extraemos los datos
    const { urlToImage, url, title, description, source } = noticia;

    return (
        <div className="col s12 m6 l4">
            <div className="card large">
                <div className="card-image">
                    <img src={urlToImage} alt={ title } />
                    <span className={`${styles.nombre_fuente} card-title`}>{ source.name }</span>
                </div>
                
                <div className="card-content">
                    <h5>{ title }</h5>
                    <p>{ description }</p>
                </div>

                <div className="card-action">
                    <a 
                        href={ url } 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"
                    > Ver Noticia Completa</a>
                </div>
            </div>
        </div>
    )
}
Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}

export default Noticia
