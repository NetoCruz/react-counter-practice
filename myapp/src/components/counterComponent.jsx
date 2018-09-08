import React,{Component} from 'react';

class Counter extends Component{
	

   
	render(){

		
		
		return(
		 <div>
		 
		 	<span className={this.newMethod()}>{this.formatCount()}</span>
		    <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
		    <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
		  </div>
		       );
	}

	newMethod(){
	let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? "warning": "primary";
		return classes;	
	}

	formatCount(){
		// return this.props.counter === 0 ? 'Zero': this.props.counter.value;
	const {value}= this.props.counter;
	return value===0?"Zero": value;
	}
}

export default Counter;