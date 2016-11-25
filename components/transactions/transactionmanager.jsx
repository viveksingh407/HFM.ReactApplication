import React from 'react';
import AddTransactions from './addtransactions.jsx';
import Transactions from './transactiondetails.jsx';

class TransactionManager extends React.Component {
    render() {
        return (
            <div>
                <AddTransactions />
                <div className="clear"></div>
                <Transactions />
            </div>
       );
    }
}

export default TransactionManager;