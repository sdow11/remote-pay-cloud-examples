import React from 'react';

export default class OrdersIcon extends React.Component {

    constructor() {
        super();
    }

    render(){
        let className = 'home_icon';
        if(this.props.class !== undefined){
            className = this.props.class;
        }

        return (
            <svg className={className} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 80 80">
                <path d="M56.4,38.8l-31.9-0.2c-1.3,0-2.3-1.1-2.3-2.3v0c0-1.3,1.1-2.3,2.3-2.3l31.9,0.2c1.3,0,2.3,1.1,2.3,2.3v0
			C58.7,37.7,57.7,38.8,56.4,38.8z"/>
                <path d="M56.3,49.1l-31.9-0.2c-1.3,0-2.3-1.1-2.3-2.3v0c0-1.3,1.1-2.3,2.3-2.3l31.9,0.2c1.3,0,2.3,1.1,2.3,2.3v0
			C58.7,48.1,57.6,49.1,56.3,49.1z"/>
                <path d="M43.5,59.3l-19.1-0.1c-1.3,0-2.3-1-2.3-2.3v0c0-1.3,1-2.3,2.3-2.3l19.1,0.1c1.3,0,2.3,1,2.3,2.3v0
			C45.8,58.3,44.7,59.3,43.5,59.3z"/>
                <path d="M62.3,14.9H57v-0.3c0-1.5-1.2-2.7-2.7-2.7h-7.5c0-0.3,0.1-0.6,0.1-0.9c0-3.8-3.1-6.8-6.8-6.8
			s-6.8,3.1-6.8,6.8c0,0.3,0,0.6,0.1,0.9h-7.5c-1.5,0-2.7,1.2-2.7,2.7v0.3h-5.3c-3.7,0-6.7,3-6.7,6.7v47.5c0,3.7,3,6.7,6.7,6.7h44.5
			c3.7,0,6.7-3,6.7-6.7V21.6C69,17.9,66,14.9,62.3,14.9z M40,7.5c1.2,0,2.2,1,2.2,2.2c0,1.2-1,2.2-2.2,2.2s-2.2-1-2.2-2.2
			C37.8,8.4,38.8,7.5,40,7.5z M65,69.1c0,1.5-1.2,2.7-2.7,2.7H17.7c-1.5,0-2.7-1.2-2.7-2.7V21.6c0-1.5,1.2-2.7,2.7-2.7H23v2.3
			c0,1.5,1.2,2.7,2.7,2.7h28.5c1.5,0,2.7-1.2,2.7-2.7v-2.3h5.3c1.5,0,2.7,1.2,2.7,2.7V69.1z"/>
            </svg>
        )
    }
}