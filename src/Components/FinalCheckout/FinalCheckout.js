import React from 'react';

const FinalCheckout = ( props ) => {
	const { name, price } = props.checkout
	const handleCheckout = () => {
		console.log( 'Checkout Clicked' )
	}
	return (
		<div>
			<h4>Product name: { name } Price: { price }</h4>
			<button className="btn btn-success" onClick={ handleCheckout }>Checkout</button>
		</div>
	);
};

export default FinalCheckout;
