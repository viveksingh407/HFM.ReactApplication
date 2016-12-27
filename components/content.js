import React from 'react';

class Content extends React.Component {
    render() {
        return (
            <section className="contentSection">
                <div className="row">
                    {this.props.children}
                </div>
            </section>
       );
    }
}

export default Content;
