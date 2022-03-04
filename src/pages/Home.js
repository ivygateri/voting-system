import { Paper } from '@mui/material'
import Carousel from 'react-material-ui-carousel'

function Home() {
    return (
		<Carousel
			sx={{
				minHeight: '80vh',
				minWidth: '80%',
			}}>
			<Paper>
				<img  src={`/assets/images/img1.jpg`} alt='Carousel 1' className='car-img' />
			</Paper>
			<Paper>
				<img src={`/assets/images/img2.jpg`} alt='Carousel 2' className='car-img' />
			</Paper>
		</Carousel>
	)
}

export default Home