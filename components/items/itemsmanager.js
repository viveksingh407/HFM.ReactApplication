import React from 'react';
import AddItems from './additems.js';
import Items from './items.js';

class ItemsManager extends React.Component {
    render() {
        return (
            <div>
                <AddItems />
                <Items />
            </div>
       );
    }
}

export default ItemsManager;