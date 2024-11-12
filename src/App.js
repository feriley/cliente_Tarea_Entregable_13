import React from 'react';
import CardContainer from './components/CardContainer';

function App() {
    return (
        <div className="App">
            <h1>Ejemplo de CardContainer</h1>
            <CardContainer>
                <div style={{ backgroundColor: 'lightblue', padding: '20px', borderRadius: '4px' }}>Tarjeta 1</div>
                <div style={{ backgroundColor: 'lightgreen', padding: '20px', borderRadius: '4px' }}>Tarjeta 2</div>
                <div style={{ backgroundColor: 'lightcoral', padding: '20px', borderRadius: '4px' }}>Tarjeta 3</div>
            </CardContainer>
        </div>
    );
}

export default App;
