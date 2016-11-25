import React from 'react';
import TransactionsManager from './transactions/transactionmanager.jsx';
import BudgetManager from './budget/budgetmanager.jsx';

class Content extends React.Component {
    render() {
        return (
            <section className="contentSection">
                <div className="row">
                    <TransactionsManager />
                    <BudgetManager />
                </div>
            </section>
       );
    }
}

export default Content;
