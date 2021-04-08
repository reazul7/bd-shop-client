import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Orders from './Components/Orders/Orders';
import Admin from './Components/Admin/Admin';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Manage from './Components/Manage/Manage';
import Checkout from './Components/Checkout/Checkout';

export const UserContext = createContext();
export const BuyContext = createContext();

function App() {
	const [ loggedInUser, setLoggedInUser ] = useState( {} );
	const [ buy, setBuy ] = useState( {} );

	return (
		<UserContext.Provider value={ [ loggedInUser, setLoggedInUser ] }>
			<BuyContext.Provider value={ [ buy, setBuy ] }>
				<Router>
					<Header />
					<Switch>
						<Route path="/home">
							<Home />
						</Route>
						<Route path="/login">
							<Login />
						</Route>
						<PrivateRoute path="/orders">
							<Orders />
						</PrivateRoute>
						<PrivateRoute path="/admin">
							<Admin />
						</PrivateRoute>
						<Route path="/manage">
							<Manage />
						</Route>
						<PrivateRoute path="/checkout/:_id">
							<Checkout />
						</PrivateRoute>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/*">
							<NotFound />
						</Route>
					</Switch>
				</Router>
			</BuyContext.Provider>
		</UserContext.Provider>
	);
}

export default App;
