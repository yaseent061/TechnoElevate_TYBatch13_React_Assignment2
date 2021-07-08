import React from 'react'
import withCounter from '../hoc/withCounter'

function Java(props) {
    return (
        <div className="main">
            <div>{props.count}</div>
            <div>Java</div>
            <div onClick={props.vote} className="click">Click Here</div>
        </div>
    )
}

export default withCounter(Java)