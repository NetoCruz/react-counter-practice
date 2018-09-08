import React,{Component} from 'react';
import  Counter from './counterComponent.jsx';

class Counters extends Component{



render(){
 return(
    <div>
        <button 
	        onClick={this.props.onReset} 
	        className="btn btn-primary btm-sm m-2">Reset
        </button>
    	{this.props.counters.map(counter=> 
    	<Counter 
    	key={counter.id} 
        onDelete={this.props.onDelete}
    	counter={counter}
    	onIncrement={this.props.onIncrement}
    	>
        <h1>Title</h1>
        </Counter>
    		)}


    </div>


 	);

}
}

export default Counters;
