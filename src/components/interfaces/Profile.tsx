import React, {Component } from "react";

 class Profile extends Component<any>{

    state ={
        loading:true,
        sneaker:null,
    };

     async componentDidMount(){
        const url ="https://api.thesneakerdatabase.com/v1/sneakers?limit=25";
        const response = await fetch(url)
        const data = await response.json();
        this.setState({sneaker:data.results[0],loading:false});
        
        
    }



     render(){
         return(
             <div>
                 {this.state.loading || !this.state.sneaker ? (
                     <div>loading...</div>
                 ) : (
                     <div>
                         <div>{this.state.sneaker }</div>
                     </div>
                 )}
                 </div>
         );
     }
 }


export default Profile;





    

