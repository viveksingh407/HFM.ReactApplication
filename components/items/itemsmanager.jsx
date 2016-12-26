import React from 'react';
import AddItems from './additems.jsx';
import Items from './items.jsx';

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