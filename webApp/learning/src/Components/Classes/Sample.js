import React from 'react'
import {profileData} from '../APIs/API'

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '' };
    }
    myData () {
        profileData().then((result) => {
            console.log("myData is ", result);
          });
    }

    componentDidMount() {
        this.myData();
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