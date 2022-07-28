import {combineReducers} from '@reduxjs/toolkit'
import AntiPattern from 'page/AntiPatternFive/AntiPatternSlicer'

const rootReducer = combineReducers({
	antiPattern: AntiPattern,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
