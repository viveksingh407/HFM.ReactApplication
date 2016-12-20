import React from 'react';

class Transactions extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-2">
                        <span>Transaction</span>
                    </div>
                    <div className="col-sm-2">
                        <span>TransactionDate</span>
                    </div>
                    <div className="col-sm-2">
                        <span>TransactionAmount</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <span>Transaction</span>
                    </div>
                    <div className="col-sm-2">
                        <span>TransactionDate</span>
                    </div>
                    <div className="col-sm-2">
                        <span>TransactionAmount</span>
                    </div>
                </div>
            </div>
       );
    }
}

export default Transactions;