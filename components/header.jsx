import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component {
    render() {
        return (
           <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Home Finance Manager</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to="transactionmanager" >TransactionsManager</Link></li>
                        <li><Link to="budgetmanager">BudgetManager</Link></li>
                    </ul>
                    </div>
                </div>
            </nav>
       );
    }
}

export default Header;