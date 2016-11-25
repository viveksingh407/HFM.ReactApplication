import React from 'react';
import AddTransactions from './addtransactions.jsx';
import Transactions from './transactions.jsx';

class TransactionManager extends React.Component {
    render() {
        return (
            <div>
                <AddTransactions />
                <Transactions />
            </div>
       );
    }
}

export default TransactionManager;