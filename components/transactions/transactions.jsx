import React from 'react';
import TransactionItems from '../../scripts/server/transactionitems.js';

class Transactions extends React.Component {
    constructor(){
        super();
        this.state = {Items:[]};
    }

    purchaseItemsData() {
        var stateObj = [];
        TransactionItems.getPurchaseItems((resultCallBackData)  => {
            this.setState({Items: resultCallBackData });
        });
    }

    componentWillMount()
    {
        this.purchaseItemsData();
    }

    render() {
        if(this.state.Items.length !== 0)
        {
            console.log(this.state.Items);
        }

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