import React, { useState } from 'react';
import datas from './datas.json';
import './styles.css';

const Data = () => {
    const [data, setData] = useState(datas);

    const Remove = (itemId) => {
        console.log("Removing ID:", itemId);
        setData(prevData => prevData.filter(item => item.id !== itemId));
    }
    
    const Update = (itemId) => {
        console.log("Updating ID:", itemId);
        setData(prevData =>
            prevData.map(item =>
                item.id === itemId ? { ...item, type: "Updated Type" } : item
            )
        );
    }
    
    
   return (
        <div className="data-container">
            {data.map(item => (
                <div className="card" key={item.id}>
                    <div className="card-content">
                        <h3>{item.type}</h3>
                        <button onClick={() => Remove(item.id)}>Remove</button>
                        <button onClick={() => Update(item.id)}>Update</button>
                    </div>
                </div>
            ))}
            <button onClick={() => setData([])}>Clear</button>
        </div>
    );
}

export default Data;
