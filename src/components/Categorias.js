import React from 'react';

const Categorias = ({handleCheck, query}) => {

    return (
        <div style={{margin: '20px 15px 30px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <ul>
                <li onClick={(e) => handleCheck(e)} data-id="1" className={'tag is-link is-medium ' + (query === 'chicken' ? 'is-primary' : 'is-light')} style={{margin: '0 15px', cursor: 'pointer'}}>Chicken</li>
                <li onClick={(e) => handleCheck(e)} data-id="2" className={'tag is-link is-medium ' + (query === 'vegan' ? 'is-primary' : 'is-light')} style={{margin: '0 15px', cursor: 'pointer'}}>Vegan</li>
                <li onClick={(e) => handleCheck(e)} data-id="3" className={'tag is-link is-medium ' + (query === 'meet' ? 'is-primary' : 'is-light')} style={{margin: '0 15px', cursor: 'pointer'}}>Meet</li>
            </ul>
        </div>
    )
}

export default Categorias
