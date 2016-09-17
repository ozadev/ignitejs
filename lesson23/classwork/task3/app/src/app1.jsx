import React from 'react';

class App1 extends React.Component {
    render() {
        return (
            <div>
                <h1>App1 say Hi...</h1>
                {this.props.children}
            </div>
        );
    }
}

export default App1;