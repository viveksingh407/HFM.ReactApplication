import React from 'react';
import Header from './components/header.jsx';
import Content from './components/content.jsx';
import Footer from './components/footer.jsx';
import Layout from './components/layout.jsx';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                {this.props.children}
                <Footer />
            </div>
       );
    }
}

export default App;