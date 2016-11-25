import React from 'react';

class AddTransactions extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <span>Add Transaction</span>
                </div>
                <div className="row">
                    <div className="col-xs-4">
                        <div>
                            <span>Item Name</span>
                        </div>
                        <div>
                            <input type="text"></input>
                        </div>
                    </div>
                    <div className="col-xs-4">
                        <input type="button" value="Add"></input>
                    </div>
                </div>
                <div>
                </div>
            </div>
       );
    }
}

export default AddTransactions;
