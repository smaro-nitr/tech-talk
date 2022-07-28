export const storageKey = {
	authToken: 'auth-token',
}

export const setLocalStorage = (key: string, value: any) => {
	window.localStorage.setItem(key, JSON.stringify(value))
	return value
}

export const removeLocalStorage = (key: string) => {
	window.localStorage.removeItem(key)
}

export const getLocalStorage = (key: string) => {
	return JSON.parse(window.localStorage.getItem(key))
}

export const getToken = () => {
	const authToken = getLocalStorage(storageKey.authToken)
	return `Bearer ${authToken?.idToken}`
}

export const clearToken = () => {
	setLocalStorage(storageKey.authToken, null)
}
