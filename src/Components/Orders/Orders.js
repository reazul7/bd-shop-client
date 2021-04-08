import React, { useEffect, useState } from 'react';
import { getApi } from '../../utils';

const Orders = () => {
	const [ order, setOrder ] = useState( [] )
	const url = getApi();

	useEffect( () => {
		fetch( `${ url }/order` )
			.then( res => res.json() )
			.then( data => setOrder( data ) )
	}, [] )

	return (
		<div className="container">
			<h1 style={ { textAlign: 'center' } }>Your Orders</h1>
			<br />
			{
				order.length === 0 ? (
					<div className="col-sm-12">
						<div className="text-center">
							<span>Loading...</span>
						</div>
					</div>
				) : (
					<table className="table">
						<thead>
							<tr>
								<th scope="col">Name</th>
								<th scope="col">Origin</th>
								<th scope="col">Price</th>
								<th scope="col">Time of Order</th>
							</tr>
						</thead>
						<tbody>
							{ order && order.map( orderItem => (
								<tr key={ orderItem._id }>
									<td>{ orderItem.name }</td>
									<td>{ orderItem.origin }</td>
									<td>{ orderItem.price }</td>
									<td>{ orderItem.time }</td>
								</tr>
							) ) }
						</tbody>
					</table>
				)
			}
		</div>
	);
};

export default Orders;
