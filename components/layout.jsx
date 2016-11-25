import React from 'react';
import Header from './header.jsx';
import Content from './content.jsx';
import Footer from './footer.jsx';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Content />
                <Footer />
            </div>
       );
    }
}

export default App;