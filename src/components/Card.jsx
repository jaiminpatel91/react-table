import React from 'react';

const Card = (props) => (
    <div>
        {
            props.player ?
                <div style={{ padding: '5px 5px 5px 5px', border: '1px solid grey', backgroundColor: 'lightgray' }}>
                    <div style={{ display: 'inline-block' }} >
                        <h1>hello</h1>
                    </div>
                    <div style={{ float: 'right' }} >
                        {props.player}
                    </div>
                </div> : <h3>No players available.</h3>
        }
    </div>
);

export default Card;