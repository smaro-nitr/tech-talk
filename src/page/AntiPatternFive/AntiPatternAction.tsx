import {createAsyncThunk} from '@reduxjs/toolkit'
import {axios} from 'utility/api'

export const getDefaultUser: any = createAsyncThunk('get/getDefaultUser', async () => {
	return axios.get('https://jsonplaceholder.typicode.com/users', false, true)
})
