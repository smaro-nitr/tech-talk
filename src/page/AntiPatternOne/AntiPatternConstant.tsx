import {v4 as uuid} from 'uuid'

export const looper = [
	{message: 'looper without id'},
	{message: 'looper without id'},
	{message: 'looper without id'},
	{message: 'looper without id'},
]

export const looperWithId = [
	{id: uuid(), message: 'looper with id'},
	{id: uuid(), message: 'looper with id'},
	{id: uuid(), message: 'looper with id'},
	{id: uuid(), message: 'looper with id'},
]
