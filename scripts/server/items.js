import Fetch from 'react-fetch';

var itemsData = {
    getPurchaseItems: function(resultCallback)
    {
        var data = [];
        fetch('http://myhomefinancemanager.dev.com/purchase/getitems')
            .then( response => response.json() )
            .then((json) => { resultCallback(json); }
        )
    }
}

module.exports = itemsData;