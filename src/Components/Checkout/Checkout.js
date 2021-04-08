import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getApi } from '../../utils';

const Checkout = () => {
	const { _id } = useParams();
	const [ checkout, setCheckout ] = useState( {} )
	const url = getApi();

	useEffect( () => {
		fetch( `${ url }/product/${ _id }` )
			.then( res => res.json() )
			.then( data => setCheckout( data ) )
	}, [ _id ] )

	const handleCheckout = () => {
		const orderDetails = {
			name: checkout.name,
			price: checkout.price,
			origin: checkout.origin,
			time: new Date()
		}
		fetch( `${ url }/addOrder`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify( orderDetails )
		} )
			.then( res => res.json() )
			.then( result => {
				if ( result ) {
					alert( 'Order Placed Successfully!' )
				}
			} )
		console.log( 'Clicked checkout' );
	}
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<img width="100%" src={ checkout.imageURL } alt="" />
				</div>
				<div className="col-md-6">
					<p>Name: { checkout.name }</p>
					<p>Price: { checkout.price } BDT</p>
					<p>Origin: { checkout.origin }</p>
					<button className="btn btn-success" onClick={ handleCheckout }>Checkout</button>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
