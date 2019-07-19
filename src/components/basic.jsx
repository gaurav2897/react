import React, { Component } from 'react';


class Adder extends Component {
    state = { num: 1 ,
    str:["thats the maximum"],
    str2:["thats the least"]
    
};
    design={fontSize:100,fontWeight : "bold"
    };
    
    //constructor(){
//super();
//this.incre=this.incre.bind(this);
    
     incre = () => { 
         if(this.state.num<10)
        this.setState({ num:this.state.num +1 });
       
     }
    
    dec = () => {
        if(this.state.num>0)
        this.setState({num:this.state.num - 1});
        }
    
        max(){
            if (this.state.num===10)
        return <p style={this.design}>Thats max</p>
           }
    
    min(){ 
        if (this.state.num===0)
        return <div>
      <p style={this.design}>Thats least</p> </div>
    }
    res = () => {
        this.setState({num:1});
    }
    
    render() { 
        return (
        <div>
            
            {this.max()}
            <span style={this.design} className={this.newMethod()}>{this.state.num}</span>
            <br></br>
            <button onClick={this.incre} style={{fontSize:50, padding:'10px'}} 
            className="btn btn-secondary btn-sm m-2">   +   </button> 
            
            <button onClick={this.dec} style={{fontSize:50,padding:'10px'}} 
            className="btn btn-secondary btn-sm m-2">    -    </button> 
            <button onClick={this.res} style={{fontSize:50,padding:'10px'}} 
            className="btn btn-secondary btn-sm m-2">Reset</button> 
            
            {this.min()}
        </div>);
    }

    newMethod() {
        let classes = "badge m-2 badge-";
        classes += this.state.num === 0 ? "warning" : "primary";
        return classes;
    }
}
 
export default Adder;