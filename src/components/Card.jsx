import React,{Component} from 'react';
import Row from "./row";

class Card extends Component {
    render() {
        if (!this.props.data) {
            return null;
        }

        const style = this.props.tableStyle;
        const rowData = this.props.data;
        const headerList = this.props.headerList;

        return(
            <table style={style} >
                {
                    headerList.map((header) => {
                        return (
                            <th style={style}>{header}</th>
                        )
                    })
                }
                {
                    rowData.map((row) => {
                        return (
                            <Row data={row} keyList={headerList} style={style} />
                        )
                    })
                }
            </table>
        )
    }
}

export default Card;