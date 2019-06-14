import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';





class DishDetail extends Component{



	renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }


    renderComments(comments){
    	if(comments==null){
    		return(
    			<div></div>
    		);
    	}
        const cmnt = comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                    </p>
                </li>
            );
		});


		return (
            <div>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {cmnt}
                </ul>
            </div>
		);
	}


	render(){
		const dish = this.props.dish;
        if (dish == null) {
            return (<div></div>);
        }        
        return (
            <div className="container">
                 <div className="row">
                      <div  className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                      </div>
                      <div className='col-12 col-md-5 m-1'>
                        {this.renderComments(dish.comments)}
                      </div>
                </div>
            </div>
		);
		
	}
}


export default DishDetail;