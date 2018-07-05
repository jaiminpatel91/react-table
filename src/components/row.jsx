import React,{Component} from 'react';
import Cell from "./cell";

class Row extends Component {
    render() {
        if (!this.props.data) {
            return null;
        }

        const data = this.props.data;
        const headerList = this.props.keyList;
        return(
            <tr>
                {
                    headerList.map((cell) => {
                        return (
                            <Cell style={this.props.style} cellData={data[cell]} />
                        )
                    })
                }
            </tr>
        )
    }
}

export default Row;