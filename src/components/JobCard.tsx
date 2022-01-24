import tw from 'twin.macro'
// import styled from 'styled-components'
import { JobType } from '../types/Types'



const CardContainer = tw.section`bg-white dark:bg-blue-dark px-[1.8rem] pt-[3rem] pb-[1.8rem] rounded-md relative w-full h-[12.5rem] max-w-[22rem] `
const ImageContainer = tw.div`w-[2.5rem] h-[2.5rem] p-1 bg-grey-dark rounded-xl flex justify-center items-center absolute -top-4 left-[1.6rem]`
const Image = tw.img``
const CardMain = tw.div`flex flex-col h-full`
const TimeContract = tw.p`text-grey-dark text-xs`
const Position = tw.p`font-semibold my-2`
const Company = tw.p`text-grey-dark text-xs`
const Location = tw.p`text-xs text-violet-dark font-bold mt-auto`

const JobCard = ({ job }: JobType) => {
	const {
		logo,
		company,
		postedAt,
		contract,
		position,
		location,
		logoBackground,
	} = job
	return (
		<CardContainer>
			<ImageContainer style={{ backgroundColor: logoBackground }}>
				<Image src={process.env.PUBLIC_URL + logo} alt={company} />
			</ImageContainer>
			<CardMain>
				<TimeContract>
					{postedAt}
					<span className='font-extrabold px-1.5'>.</span>
					{contract}
				</TimeContract>
				<Position>{position}</Position>
				<Company>{company}</Company>
				<Location>{location}</Location>
			</CardMain>
		</CardContainer>
	)
}

export default JobCard
