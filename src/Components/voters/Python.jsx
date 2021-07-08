import React from 'react'
import withCounter from '../hoc/withCounter'

function Python(props) {
    return (
        <div className="main">
            <div>{props.count}</div>
            <div>Python</div>
            <div onClick={props.vote} className="click">Click Here</div>
        </div>
    )
}

export default withCounter(Python)