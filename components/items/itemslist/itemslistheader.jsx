import React from 'react';

class ItemsListHeader extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-2">
                    <span>ItemId</span>
                </div>
                <div className="col-sm-2">
                    <span>ItemName</span>
                </div>
            </div>
       );
    }
}

export default ItemsListHeader;