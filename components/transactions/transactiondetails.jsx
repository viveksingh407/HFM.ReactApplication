import React from 'react';

class Transactions extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-4">
                        <span>Transaction</span>
                    </div>
                    <div className="col-xs-4">
                        <span>TransactionDate</span>
                    </div>
                    <div className="col-xs-4">
                        <span>TransactionAmount</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-4">
                        <span>abc</span>
                    </div>
                    <div className="col-xs-4">
                        <span>11/14/2016</span>
                    </div>
                    <div className="col-xs-4">
                        <span>12.00</span>
                    </div>
                </div>
            </div>
       );
    }
}

export default Transactions;