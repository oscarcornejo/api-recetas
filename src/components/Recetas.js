import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import SearchInput from './SearchInput';

import Loading from './Loading';

import {api} from '../config/ConfigUrl';
import '../App.sass';
import '../assets/css/Recetas.css';
import Categorias from './Categorias';

const Recetas = props => {

        const [recetas, setRecetas] = useState(null);
        const [query, setQuery] = useState('chicken');
        const [verMas, setVerMas] = useState(12);
        const [loading, setLoading] = useState(null);
        // const [termino, setTermino] = useState('');

        useEffect(() => {

            const urlApi = `https://api.edamam.com/search?q=${query}&app_id=${api.id}&app_key=${api.key}&from=0&to=${verMas}`;

            setLoading(true);

            axios.get(urlApi, {crossdomain: true})
                .then(response => {
                    // Respuesta del servidor
                    setRecetas(response.data.hits);
                    setLoading(false);
                })
                .catch(e => {
                    debugger;
                    console.log(e.message);
                    setRecetas(null);
                    setLoading(false);
                });

                if (query === '') {
                    setQuery('chicken');
                }

        }, [query, verMas]);

        const buscarTermino = (value) => {
            let termino = value;
            setQuery(termino);
            // console.log(termino);
        }

        const handleCheck = (e) => {
            let categoria = e.currentTarget.dataset.id;

            if (categoria === '1') {
                console.log(categoria);
                setQuery('chicken');
            } else if(categoria === '2') {
                console.log(categoria);
                setQuery('vegan');
            } else if(categoria === '3') {
                console.log(categoria);
                setQuery('meet');
            }
         }

         const agregarMas = () => {
             setVerMas(verMas + 3);
         }

         const agregarMenos = () => {
            setVerMas(verMas - 3);
        }


        return (

            <Fragment>
            
                <SearchInput buscarTermino={buscarTermino} />

                <Categorias handleCheck={handleCheck} query={query} />
            
            { loading ? <Loading /> :

                (
                    recetas === null ?

                    <div className="card" style={{borderRadius: '15px', margin: '20px'}}>
                        <div className="card-content">
                            <p className="title is-5" style={{textAlign: 'center'}}>
                                ¡Oops! Al parecer hubo un problema al cargar la información, favor refresque esta página e inténtelo nuevamente.
                            </p>
                        </div>
                    </div>

                    :

                    <div className="columns is-multiline is-mobile" style={{ display: 'flex', justifyContent: 'center'}}>

                        { recetas.map( (item, index) => {
                            // console.log(item);
                            return (
                                <div className="column is-four-fifths-mobile is-two-fifths-tablet is-3-desktop" key={index}>
                                    <div className="card" style={{borderRadius: '15px'}}>
                                        <div className="card-image">
                                            <figure className="image is-4by3">
                                                <img style={{borderTopLeftRadius: '15px', borderTopRightRadius: '15px', objectFit: 'cover'}} src={item.recipe.image} alt={item.recipe.label} />
                                            </figure>
                                        </div>
                                        <div className="card-content">
                                            <div className="media">
                                                <div className="media-content" style={{overflow: 'hidden'}}>
                                                    <p className="title is-4 truncarTexto">
                                                        {/* <a href={item.recipe.shareAs } target="_blank" rel="noopener noreferrer">
                                                            {item.recipe.label}
                                                        </a> */}
                                                        {item.recipe.label}
                                                    </p>
                                                    <p className="subtitle is-6 truncarTexto">
                                                        <a href={item.recipe.url} target="_blank" rel="noopener noreferrer">
                                                            {item.recipe.source}
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="content">
                                                <a href={item.recipe.shareAs} target="_blank" rel="noopener noreferrer" className="button is-primary is-outlined">Ver Receta</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            })
                        }
                    </div>
                )
            }
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '50px 20px' }}>
                <button disabled={verMas <= 12 ? true : false} className="button is-link is-rounded" onClick={agregarMenos} style={{marginRight: '10px'}}>
                    <span>Ver Menos</span>
                    <span className="icon is-small">
                    <i className="fas fa-minus"></i>
                    </span>
                </button>

                <button className="button is-link is-rounded" onClick={agregarMas}>
                    <span>Ver más</span>
                    <span className="icon is-small">
                        <i className="fas fa-plus"></i>
                    </span>
                </button>
            </div>
            </Fragment>
        )
    }

export default Recetas;