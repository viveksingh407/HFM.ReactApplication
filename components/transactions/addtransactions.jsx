import React from 'react';

class AddTransactions extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="row">
                    <span>Add Transaction</span>
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

export default AddTransactions;
