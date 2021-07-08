import React from 'react'
import withCounter from '../hoc/withCounter'

function Php(props) {
    return (
        <div className="main">
            <div>{props.count}</div>
            <div>Php</div>
            <div onClick={props.vote} className="click">Click Here</div>
        </div>
    )
}

export default withCounter(Php)