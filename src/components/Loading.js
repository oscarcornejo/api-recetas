import React from 'react'

import '../assets/css/Spinner.css';

const Loading = props => {
    return (
        <div className="loading-container">
            <div className="spinner"></div>
            {/* <div className="spinner-center"></div>
            <div className="loading-text">Cargando...</div> */}
        </div>
    )
}

export default Loading;
