export const formatUserList = data => {
	const userList = data?.data?.map(item => item?.username).filter((item, index) => index < 4)
	return userList
}
