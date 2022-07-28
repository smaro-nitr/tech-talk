import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import {routes} from './AppRouteConstant'

interface Props {}

export const AppRoute = (props: Props) => {
	return (
		<main className='d-flex h-100 flex-column'>
			<Router>
				<div className=''>
					<Switch>
						{routes.map((route, index) => (
							<Route
								key={index}
								path={route.path}
								exact={route.exact}
								render={props => (route.sidebar ? <route.sidebar {...props} /> : null)}
							/>
						))}
					</Switch>
				</div>
				<div className='flex-fill mt-55px'>
					<ToastContainer newestOnTop />
					<Switch>
						{routes.map((route, index) => (
							<Route
								key={index}
								path={route.path}
								exact={route.exact}
								render={props => (route.main ? <route.main {...props} /> : null)}
							/>
						))}
					</Switch>
				</div>
			</Router>
		</main>
	)
}
