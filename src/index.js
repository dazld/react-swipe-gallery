import React from 'react';


const Swipe = React.createClass({
    getInitialState(){
        return {
            activeIdx: 0
        }
    },
    handleEvents(){
        // blabalabl touch, click
    },
    componentWillReceiveProps(nextProps) {
        if (nextProps.images !== this.props.images){
            this.setState({
                activeIdx: 0
            });
        }

    },
    makeImage(img){
        return <img src={img} />
    },
    render(){

        let tags = this.props.images.map(makeImage);

        let active = this.props.images[this.state.activeIdx];
        let prev = this.props.images[this.state.activeIdx - 1];
        let next = this.props.images[this.state.activeIdx + 1];

        return (
            <div>
                <div bgimg={prev} />
                <div bgimg={active} />
                <div bgimg={idx} />
            </div>
        )


    }
});


export default Swipe;

