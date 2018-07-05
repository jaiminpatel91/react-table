import React,{Component} from 'react';

class Cell extends Component {
    render() {
        return(
                <td style={this.props.style}>{this.props.cellData}</td>
        )
    }
}

export default Cell;