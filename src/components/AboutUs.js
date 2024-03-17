import AboutUserCard from "./AboutUserCard";
import AboutClassbaseCompo from "./AboutClassbaseCompo";
import React from "react";

class AboutUs extends React.Component{
    constructor(props){
        super(props);    
    }

   componentDidMount(){
    }
    render(){
        
        return  <AboutClassbaseCompo />;

    }
}
export default AboutUs;


/*
    Sequence of execution
    - Parent Constructor
    - Parent Render
        - First Child Constructor
        - First Child Render
        - second Child Constructor
        - Second Child Render
        - First Child Component DidMOunt
        - Second Child Component DidMOunt
    - Parent Component DidMount


*/