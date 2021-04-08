import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { BuyContext } from '../../App';

const Product = ( props ) => {
	const { _id, name, price, imageURL } = props.product;
	const [ buy, setBuy ] = useContext( BuyContext )
	const history = useHistory();

	const handleBuy = () => {
		history.push( `/checkout/${ _id }` )
		setBuy( props.product );
	}

	return (
		<div className="col-md-3">
			<div className="card" style={ { width: '16rem', marginTop: '25px' } }>
				<img style={ { height: '300px' } } src={ imageURL } className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{ name }</h5>
					<p className="card-text">${ price }</p>
					<button className="btn btn-success" onClick={ handleBuy }>Buy Now</button>
				</div>
			</div>
		</div>
	);
};

export default Product;
