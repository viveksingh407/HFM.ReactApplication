import React from 'react';
import Header from './header.jsx';
import Content from './content.jsx';
import Footer from './footer.jsx';

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