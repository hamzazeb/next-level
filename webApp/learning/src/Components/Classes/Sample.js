import React from 'react'

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '' };
    }
    render() {
        return <div>
            <h1>Hello class, {this.state.name}</h1>
            <input type="text"
                value={this.state.name}
                onChange={(e) => this.setState({name:e.target.value})}
            ></input>
        </div>


    }
}

export default Welcome