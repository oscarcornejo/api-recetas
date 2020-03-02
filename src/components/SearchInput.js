import React, { useState } from 'react';

const SearchInput = ({buscarTermino}) => {

    const [text, setText] = useState('');

    const enviarBusqueda = (e) => {
        e.preventDefault();
        if(text === '') {
            return false;
        }
        buscarTermino(text);
    }

    return (
        <div className="columns" style={{margin: '20px 0px'}}>
            <div className="column" style={{display: 'flex', justifyContent: 'center'}}>
                <input style={{marginRight: '20px', width: '50%'}} className="input" type="text" onChange={ (e) => setText(e.target.value) } placeholder="Buscar Término..." />
                <button type="button" className="button is-primary" onClick={enviarBusqueda}>Buscar</button>
            </div>
        </div>
    )
}

export default SearchInput
