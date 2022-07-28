import {useState} from 'react'
import {Link, useHistory, useLocation} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {navbar, path} from 'AppRoute/AppRouteConstant'

interface Props {}

export const CustomNavbar = (props: Props) => {
	const dispatch = useDispatch()
	const history = useHistory()
	const location = useLocation()

	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => setIsOpen(!isOpen)

	return (
		<nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-dark'>
			<a className='navbar-brand' href='#'>
				<Link className={'override-a'} to={path.default}>
					Talentica Software Pvt Ltd
				</Link>
			</a>
			<div className='collapse navbar-collapse' id='navbarSupportedContent'>
				<ul className='navbar-nav mr-auto'>
					<li className='nav-item active'>
						<a className='nav-link' href='#'>
							&nbsp;&nbsp;&nbsp;
						</a>
					</li>
					{navbar.map(item => {
						return (
							<li className={`nav-item ${location?.pathname === item.path ? 'active' : ''}`} key={item.title}>
								<a className='nav-link' href='#'>
									<Link to={item?.path}>{item?.title}</Link>
								</a>
							</li>
						)
					})}
				</ul>
			</div>
		</nav>
	)
}
