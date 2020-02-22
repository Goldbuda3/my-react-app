import React from 'react';

class NameForm extends React.Component {
   
    constructor(props){
        super(props);
        this.state = {};
    }

    handleSubmit(event){
        event.preventDefault();

        console.log("Form Submitted");
        console.log("My local state is: ", this.state);

    }

    handleColorSelection(event){
        console.log('in handleColor selection', event)
        console.log("chose", event.target.value)

        let chosenColor = event.target.value
        this.setState({color: chosenColor})
    }

    handleNameChange(event){
        let theName = event.target.value;
        this.setState({name: theName});
    }

    render(){
        return (
            <form onSubmit={(event)=> this.handleSubmit(event)}>
                <label>
                Name:
                <input type="text" onChange={(event) => this.handleNameChange(event)}/>
                </label>
                <br/>
                <label>
                    Favorite Color:
                    <select onChange={(event)=> this.handleColorSelection(event)}>
                        <option>Red</option>
                        <option>Blue</option>
                        <option>Green</option>
                    </select>
                </label>
                <br/>
                <input type='submit' value = "Submit Data"/>
            </form>
        )
    }

  }

  export default NameForm;