import React from 'react';

class ItemsListBody extends React.Component {
    constructor(){
        super();
    }

    getTransactionDetails(items) {
        let value = '';
    }

    render() {
        if(this.props !== undefined)
        {
            let details = this.props.Items;
            return (
                <div className="row">
                    <div className="col-sm-2">
                        <span>{details.key}</span>
                    </div>
                    <div className="col-sm-2">
                        <span>{details.value}</span>
                    </div>
                </div>
            );
        }
    }
}

export default ItemsListBody;