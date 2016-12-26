import React from 'react';

class AddItems extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="row">
                    <span>Add Item</span>
                </div>
                <div className="row">
                    <input type="text" />
                    <input type="button" value="Add" />
                    <span>{this.props.name}</span>
                </div>
            </div>
       );
    }
}

export default AddItems;
