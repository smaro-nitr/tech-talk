import {Provider} from 'react-redux'
import ReactDOM from 'react-dom'
import store from 'store'
import {AppRoute} from 'AppRoute/AppRouteComponent'
import reportWebVitals from './reportWebVitals'
import ErrorBoundary from 'feature/ErrorBoundary/ErrorBoundaryComponent'
import 'index.scss'

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundary>
			<AppRoute />
		</ErrorBoundary>
	</Provider>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
