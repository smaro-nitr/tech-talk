import {createSlice} from '@reduxjs/toolkit'
import {RootState} from 'rootReducer'
import {getDefaultUser} from './AntiPatternAction'
import {formatUserList} from './AntiPatternHelper'

interface AntiPattern {
	defaultUser: {
		isLoading: boolean
		data: any
		error: any
	}
}

const initialState: AntiPattern = {
	defaultUser: {
		isLoading: false,
		data: [],
		error: '',
	},
}

export const AntiPatternSlicer = createSlice({
	name: 'user',
	initialState,
	reducers: {
		resetMutualFundSlicer: state => {
			state.defaultUser = initialState.defaultUser
		},
	},
	extraReducers: {
		[getDefaultUser.pending]: state => {
			state.defaultUser.isLoading = true
			state.defaultUser.data = []
			state.defaultUser.error = null
			return state
		},
		[getDefaultUser.fulfilled]: (state, {payload}) => {
			state.defaultUser.isLoading = false
			state.defaultUser.data = formatUserList(payload)
			state.defaultUser.error = false
			return state
		},
		[getDefaultUser.rejected]: (state, {payload, error}) => {
			state.defaultUser.isLoading = false
			state.defaultUser.data = []
			state.defaultUser.error = error?.message
			return state
		},
	},
})

export const AntiPatternSelector = (state: RootState) => state.antiPattern
export const {resetMutualFundSlicer} = AntiPatternSlicer.actions
export default AntiPatternSlicer.reducer
