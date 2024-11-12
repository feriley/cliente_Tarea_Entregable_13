import React, { useState } from 'react';
import './CardContainer.css';

const CardContainer = ({ children }) => {
    // column  valor inicial.
    const [layout, setLayout] = useState('column');

    // modificar column o row
    const handleLayoutChange = (event) => {
        setLayout(event.target.value);
    };

    return (
        <div>
            {/* elegir column o row */}
            <select value={layout} onChange={handleLayoutChange}>
                <option value="column">Columnas</option>
                <option value="row">Filas</option>
            </select>

            {/* Container de las tarjetas */}
            <div className={`card-container ${layout}`}>
                {children}
            </div>
        </div>
    );
};

export default CardContainer;
