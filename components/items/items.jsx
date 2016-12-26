import React from 'react';
import ItemsData from '../../scripts/server/items.js';
import ItemsListHeader from './itemslist/itemslistheader.jsx';
import ItemsListBody from './itemslist/itemslistbody.jsx';

class Items extends React.Component {
    constructor(){
        super();
        this.state = {Items:[]};
    }

    purchaseItemsData() {
        ItemsData.getPurchaseItems((resultCallBackData) => this.setState({Items: resultCallBackData }));
    }

    componentWillMount()
    {
        this.purchaseItemsData();
    }

    getTransactionBody(){
        let data = this.state.Items.map(function(data, index){
            let itemData = {key:index, value: data["Value"]};
            return <ItemsListBody key={index} Items={itemData} />
        });

        return data;
    }

    render() {
        return (
            <div>
                <ItemsListHeader />
                {this.getTransactionBody()}
            </div>
       );
    }
}

export default Items;