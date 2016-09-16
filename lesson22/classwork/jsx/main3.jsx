var React = require('react');
var ReactDOM = require('react-dom');


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {showProps: false};

        this.btnClickHandler = this.btnClickHandler.bind(this);
    }

    btnClickHandler() {
        this.setState({showProps: true});
    }

    render() {
        let showContent = '';

        if (this.state.showProps) {
            let list = Object.keys(this.props).map((prop, index) => {
                    return <li className="list-group-item" key={index}>{`${prop} = ${this.props[prop]};`}</li>
            });
            showContent = <ol className="list-group">{list}</ol>;
        }

        return (
            <div>
                <button className="btn btn-default" onClick={this.btnClickHandler}>Show properties</button>
                {showContent}
            </div>
        );
    }
}


ReactDOM.render(<App test={true} val1={10} val2={12} someProp="something" />, document.getElementById('main'));