import React, {Component} from "react";

const Form = (props) => {    
    return(
            <form onSubmit={props.getWeather}>
              <input type="text" 
              placeholder="City" 
              name="city" />
              <input type="text" 
              placeholder="Country" 
              name="country" />
              <button className="btn btn-danger center-block">Get Weather</button>
            </form>
        )
    };
    




export default Form;