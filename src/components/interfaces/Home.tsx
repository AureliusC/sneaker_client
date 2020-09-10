import React,{ Component } from "react";
import "../../App.css";
import { Col, Row} from "reactstrap";

class Home extends Component<any>{
    constructor(props:any){
        super(props)
    }

    render(){
        return(
            <div className="home-content-containter">
                <Col>
                <h1 className="HomePageHeader">Welcome to Sneak Peek</h1>
                <Row className="HomePageSubContainer">
                    <h3 className="HomepageSubtitle"> Become a member of Sneak Peek</h3>
                    <p className="HomePageText">
                    Sneak Peek is a application that allows you to view for upcoming sneakers or past sneakers . Sneak peek  allows useres to 
                    leave a review and rating under their favorite sneaker.</p>
                    <img src="https://sneakernews.com/wp-content/uploads/2012/12/sneakernews-top-30-2012-1a.jpg"></img>
                </Row>
                </Col>
            </div>
        );
    }
}

export default Home;