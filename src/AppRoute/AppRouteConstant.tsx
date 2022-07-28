import {NotFound} from 'feature/NotFound/NotFoundComponent'
import {CustomNavbar} from 'feature/CustomNavbar/CustomNavbarComponent'
import {Home} from 'page/Home/HomeComponent'
import AntiPatternOne from 'page/AntiPatternOne/AntiPatternComponent'
import AntiPatternTwo from 'page/AntiPatternTwo/AntiPatternComponent'
import AntiPatternThree from 'page/AntiPatternThree/AntiPatternComponent'
import AntiPatternFour from 'page/AntiPatternFour/AntiPatternComponent'
import AntiPatternFive from 'page/AntiPatternFive/AntiPatternComponent'

export const path = {
	default: '/',
	anti_pattern_1: '/anti-pattern-1',
	anti_pattern_2: '/anti-pattern-2',
	anti_pattern_3: '/anti-pattern-3',
	anti_pattern_4: '/anti-pattern-4',
	anti_pattern_5: '/anti-pattern-5',
}

const pathParamRoute: any[] = []

export const navbar: any[] = [
	{
		path: path.anti_pattern_1,
		exact: true,
		sidebar: CustomNavbar,
		main: AntiPatternOne,
		title: 'Anti Pattern #1',
	},
	{
		path: path.anti_pattern_2,
		exact: true,
		sidebar: CustomNavbar,
		main: AntiPatternTwo,
		title: 'Anti Pattern #2',
	},
	{
		path: path.anti_pattern_3,
		exact: true,
		sidebar: CustomNavbar,
		main: AntiPatternThree,
		title: 'Anti Pattern #3',
	},
	{
		path: path.anti_pattern_4,
		exact: true,
		sidebar: CustomNavbar,
		main: AntiPatternFour,
		title: 'Anti Pattern #4',
	},
	{
		path: path.anti_pattern_5,
		exact: true,
		sidebar: CustomNavbar,
		main: AntiPatternFive,
		title: 'Anti Partern #5',
	},
]

export const routes = [
	...pathParamRoute,
	...navbar,
	{
		path: path.default,
		exact: true,
		sidebar: CustomNavbar,
		main: Home,
		title: '',
	},
	{
		path: '*',
		exact: true,
		sidebar: null,
		main: NotFound,
		title: 'Not Found',
	},
]
