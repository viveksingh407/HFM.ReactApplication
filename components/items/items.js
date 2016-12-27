﻿import React from 'react';
import { connect } from 'react-redux';
import ItemsData from '../../scripts/server/items.js';
import ItemsListHeader from './itemslist/itemslistheader.js';
import ItemsListBody from './itemslist/itemslistbody.js';
import store from "../../stores/itemstore.js";

class Items extends React.Component {
    constructor(){
        super();
        //this.state = {Items: []};
    }

    purchaseItemsData() {
        ItemsData.getPurchaseItems((resultCallBackData) => 
        {
            store.dispatch({
                type: 'get_items',
                items: resultCallBackData
            });

            //this.setState({Items: resultCallBackData })
        });
    }

    componentWillMount()
    {
        this.purchaseItemsData();
    }

    getTransactionBody(){
        
        let data = [];
        if(this.props.items !== undefined && this.props.items.length !== 0)
        {
            data = this.props.items.map(function(data, index){
                let itemData = {key:index, value: data["Value"]};
                return <ItemsListBody key={index} Items={itemData} />
            })
        };

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

const mapStateToProps = function(store) {
    return {
        items: store.itemState.items
    };
}

export default connect(mapStateToProps)(Items);