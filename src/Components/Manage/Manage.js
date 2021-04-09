import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getApi } from '../../utils';

const Manage = () => {
	const [ allProducts, setAllProducts ] = useState( [] )
	const url = getApi();

	useEffect( () => {
		fetch( `${ url }/manage` )
			.then( res => res.json() )
			.then( data => setAllProducts( data ) )
	}, [ allProducts ] )

	const deleteItem = ( id ) => {
		fetch( `${ url }/delete/${ id }`, {
			method: 'DELETE'
		} )
			.then( res => res.json() )
			.then( result => {
				if ( result ) {
					// event.target.parentNode.style.display = 'none';
				}
			} )
	}

	return (
		<div className="container">
			<Link to="/admin" className="btn btn-primary">Back to Admin</Link>
			<br />
			<br />
			<table className="table">
				<thead>
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Price</th>
						<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody>
					{ allProducts.map( product =>
						<tr key={ product._id }>
							<td>{ product.name }</td>
							<td>{ product.price }</td>
							<td>
								<div className="btn-group">
									<button className="btn btn-danger"
											onClick={ () => deleteItem( product._id ) }>Delete
									</button>
									<button className="btn btn-success">Update</button>
								</div>
							</td>
						</tr>
					) }
				</tbody>
			</table>
		</div>
	);
};

export default Manage;
