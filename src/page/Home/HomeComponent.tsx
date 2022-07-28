interface Props {
	location: {hash: string; search: string}
}

export const Home = (props: Props) => {
	return (
		<div className='d-flex flex-column h-100 flex-fill justify-content-center align-items-center'>
			<iframe
				src='https://onedrive.live.com/embed?cid=FE25B4CD82994883&resid=FE25B4CD82994883%21529&authkey=AEvjWpu-5He8wZg&em=2'
				width='4021'
				height='327'
				scrolling='no'
				style={{overflow: 'hidden', height: '100%', width: '100%'}}
			/>
		</div>
	)
}
