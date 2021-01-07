//Import Area
import React,{Component}  from 'react';
import ReactDOM from 'react-dom';

//Let's create a Class Component
class A extends Component{
    //1.Property
    state = {}; //JS Object
    //2.Constructor
    constructor(props){
        //Pass the props inside super constructor
        super(props);

        //Let's initialize our state object
        this.state = {favColor:'Black'};
    }
    //3.Method
    //Let's create a ES6 Fat Arrow Function
    changeMyFavColor = () =>{
        //alert('Ok');
        this.setState( {favColor:'White'});
    }
    //Every Class Component must have render method which always return HTML(JSX)
    render(){
        return(
            <div>
                <h1>My favourite colour is {this.state.favColor}</h1>
                <button onClick={ this.changeMyFavColor }>Click Me!</button>
            </div>
        );
    }
    shouldComponentUpdate(){
        return true;
    }
}



ReactDOM.render(<A/>,document.getElementById('root'));