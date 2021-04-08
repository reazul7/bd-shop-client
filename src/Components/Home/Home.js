import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { getApi } from '../../utils';

const Home = () => {
	const [ products, setProducts ] = useState( [] )
	const url = `${ getApi() }/product`;
	useEffect( () => {
		fetch( url )
			.then( res => res.json() )
			.then( data => setProducts( data ) )
	}, [] )

	return (
		<div className="container">
			<div className="row">
				{
					products.length === 0 && (
						<div className="col-sm-12">
							<div className="text-center">
								<span>Loading...</span>
							</div>
						</div>
					)
				}
				{
					products.map( product => <Product key={ product._id } product={ product } /> )
				}
			</div>
		</div>
	);
};

export default Home;
