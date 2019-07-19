import React, { Component } from 'react';
import Adder from './basic'
class Counter extends Component {
   state = { counter:[
        {id:1, value :0},
        //{id:2, value :0},
        //{id:3, value :0},
        //{id:4, value :0} 
       ] };

    render() { 
        return ( <div>
           {this.state.counter.map(basic => (
           <Adder key={basic.id} value={basic.value} />)
           )}
            
        </div> );
    }
}
//render(){return ( <div><p>hiii</p></div>)}
//}
 
export default Counter;