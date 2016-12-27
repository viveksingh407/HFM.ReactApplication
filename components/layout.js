import React from 'react';
import Header from './header.js';
import Content from './content.js';
import Footer from './footer.js';

class Layout extends React.Component {
    render() {
        console.log(this.props.children);
        return (
            <div className="container">
                <Header />
                <Content />
                <Footer />
            </div>
       );
    }
}

export default Layout;