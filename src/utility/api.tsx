import Axios from 'axios'
import {getToken} from './localStorage'
import {isObject} from 'lodash'

export const axios = {
	delete: (url: string) => {
		const payload: any = {
			method: 'DELETE',
			url,
			headers: {
				authorization: getToken(),
				'Content-Type': 'application/json',
			},
		}
		return Axios(payload)
	},
	get: (url: string, fileDownload?: boolean, disableToken?: boolean) => {
		const authorization = getToken()
		const payload: any = {
			method: 'GET',
			url,
			headers: {
				authorization,
				'Content-Type': 'application/pdf',
			},
		}
		if (disableToken) delete payload.headers.authorization
		if (fileDownload) payload.responseType = 'arraybuffer'
		return Axios(payload)
	},
	post: (url: string, data: any, disableToken?: boolean, multiformData?: boolean) => {
		const payload: any = {
			method: 'POST',
			url,
			data,
			headers: {
				authorization: getToken(),
				'Content-Type': 'application/json',
			},
		}
		if (disableToken) delete payload.headers.authorization
		if (multiformData) payload.headers['Content-Type'] = 'multipart/form-data'
		return Axios(payload)
	},
	put: (url: string, data: any) => {
		const payload: any = {
			method: 'PUT',
			url,
			data,
			headers: {
				authorization: getToken(),
				'Content-Type': 'application/json',
			},
		}
		return Axios(payload)
	},
	graphQl: (url, query) => {
		const payload: any = {
			method: 'POST',
			url,
			data: isObject(query)
				? query
				: JSON.stringify({
						query: query,
				  }),
			headers: {
				authorization: getToken(),
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		}
		return Axios(payload)
	},
}

export const getMutualFundApiUrl = () => {
	return `${process.env.REACT_APP_API_PROTOCOL}://${process.env.REACT_APP_MUTUAL_FUND_API_HOSTNAME}`
}
