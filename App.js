import React from 'react';
import Header from './components/header.js';
import Content from './components/content.js';
import Footer from './components/footer.js';

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