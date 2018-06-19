import React,{Component} from 'react';

import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';
class Modal extends Component {
    
    componentWillUpdate(){
        console.log('MODAL component will update');
    }
    //to make the modal update only when the modal is shown.
    //PureCOmponent isn't used be could it will run more check than necessary.
    shouldComponentUpdate(nextProps,nextState){
        return nextProps.show !== this.props.show;
    }

    render(){
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.backdropClicked}/>
                <div 
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)':'translateY(-100vh)',
                        opacity:this.props.show?'1':'0'
                    }}>
                    
                    {this.props.children}
                    
                </div>
            </Aux>
        );
    }
}
export default Modal;