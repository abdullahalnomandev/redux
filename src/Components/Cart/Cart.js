import React from 'react';
import { connect } from 'react-redux';
import { removeFormCart } from '../../redux/actions/CartActions';

const Cart = (props) => {

    const { cart, removeFormCart } = props;


    return (
        <div>
            <h4>This is cart</h4>
            <ul>
                {
                    cart.map(id => <li>{id} <button
                        onClick={() => removeFormCart(id)}

                    >X</button></li>)
                }
            </ul>
        </div>
    );
};


const mapStateToProps = state => {

    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    removeFormCart: removeFormCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);