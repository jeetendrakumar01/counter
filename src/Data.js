import React, { useState } from 'react';
import datas from './datas.json';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookie, faCoffee, faIceCream } from '@fortawesome/free-solid-svg-icons';

const Data = () => {
    const [data, setData] = useState(datas);

    const Remove = (itemId) => {
        setData(data.filter(item => item.
            id!== itemId))
    }

    const Update = (itemId) => {
        setData(data.map(items => {
            if (items.id === itemId) {
                return {type: "Updated Type" };
            } else {
                return items;
            }
        }));
    }

    const getIcon = (type) => {
        switch (type) {
            case 'Glazed':
                return <FontAwesomeIcon icon={faCookie} />;
            case 'Sugar':
                return <FontAwesomeIcon icon={faCoffee} />;
            case 'Powdered Sugar':
                return <FontAwesomeIcon icon={faIceCream} />;
            default:
                return null;
        }
    }

    return (
        <div className="data-container">
            {data.map(item => (
                <div className="card" key={item.id}>
                    <div className="card-content">
                        {getIcon(item.type)}
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
