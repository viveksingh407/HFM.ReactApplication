import React from 'react';
import TransactionItems from '../../scripts/server/transactionitems.js';
import TransactionsListHeader from './transactionslist/transactionslistheader.jsx';
import TransactionsListBody from './transactionslist/transactionslistbody.jsx';

class Transactions extends React.Component {
    constructor(){
        super();
        this.state = {Items:[]};
    }

    purchaseItemsData() {
        TransactionItems.getPurchaseItems((resultCallBackData) => this.setState({Items: resultCallBackData }));
    }

    componentWillMount()
    {
        this.purchaseItemsData();
    }

    getTransactionBody(){
        let data = this.state.Items.map(function(data, index){
            let itemData = {key:index, value: data["Value"]};
            return <TransactionsListBody key={index} Items={itemData} />
        });

        return data;
    }

    render() {
        return (
            <div>
                <TransactionsListHeader />
                {this.getTransactionBody()}
            </div>
       );
    }
}

export default Transactions;