import React from 'react'
import './ColorChanger.css'

export default function ColorChanger(props) {
    return (
        <>
          <h1>Hello, World!</h1>
          <h3>What color?</h3>  
          <select name="color" id="color" onChange={(e)=>props.colorPicker(e)}>
              <option value="orangered">Orangered</option>
              <option value="teal">Teal</option>
              <option value="orange">Orange</option>
              <option value="indigo">Indigo</option>
              <option value="red">Red</option>
          </select>
        </>
    )
}
