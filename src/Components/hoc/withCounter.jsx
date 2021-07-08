import React,{Component} from 'react'

export default function withCounter(OriginalComponent) {

        
        return class counter extends Component {
            state={
                counter : 0
            }
            increment = () =>{
                this.setState((prev)=>({counter : prev.counter + 1})
                )
            }
            render() {
                return (
                    <OriginalComponent count={this.state.counter} vote={this.increment}/>
                )
            }
        }
        
    
}

