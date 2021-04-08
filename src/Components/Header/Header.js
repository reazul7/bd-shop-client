import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
	const [ loggedInUSer ] = useContext( UserContext );

	return (
		<div className="header mb-4">
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container">
					<Link to="/" className="navbar-brand">BD Shop</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					><span className="navbar-toggler-icon" /></button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link to="/home" className="nav-link">Home</Link>
							</li>
							<li className="nav-item">
								<Link to="/orders" className="nav-link">Orders</Link>
							</li>
							<li className="nav-item">
								<Link to="/admin" className="nav-link">Admin</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			{ loggedInUSer.name ? (
				<div className="container">
					<div className="my-3">
						Logged in as: { loggedInUSer.name }
					</div>
				</div>
			) : '' }
		</div>
	);
};

export default Header;
