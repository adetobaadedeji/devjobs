// import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import tw from 'twin.macro'
import JobCard from '../components/JobCard'
import Search from '../components/Search'
import { useData } from '../hooks/useData'
import NotFound from '../assets/undraw_blank_canvas_-3-rbb.svg'
import CustomButton from '../components/Button'
// import { DataTypes } from '../types/Types'
import LoadingSkeleton from '../components/LoadingSkeleton'
import SectionContainer from '../components/SectionContainer'

const MainContainer = tw.section`-mt-8 md:-mt-9`
const Main = tw.main`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 my-10`
const Empty = tw.div`flex flex-col max-w-sm mx-auto text-center mt-10`
const EmptyP = tw.p`py-10 text-2xl text-violet-dark`
const EmptyImg = tw.img``
const LoadMore = tw.div`flex justify-center pb-10`

const Jobs = () => {
	const [data, setData, loading] = useData()

	// const jobsPerPage = 6
	// // let jobsToLoad: DataTypes[] = []

	// const [jobsToShow, setJobsToShow] = useState<DataTypes[]>([])
	// const [next, setNext] = useState(6)

	// const loopWithSlice = (start: number, end: number) => {
	// 	const slicedData = data.slice(start, end)
	// 	 setJobsToShow([...jobsToShow, ...slicedData])
	// }

	// useEffect(() => {
	// 	loopWithSlice(0, jobsPerPage)
	// }, [])

	// const loadMoreData = () => {
	// 	loopWithSlice(next, next + jobsPerPage)
	// 	setNext(next + jobsPerPage)
	// }

	return (
		<SectionContainer>
			<MainContainer>
				<Search setData={setData} />
				{loading ? (
					<LoadingSkeleton counter={9} />
				) : data?.length === 0 ? (
					<Empty>
						<EmptyP>No jobs found....</EmptyP>
						<EmptyImg src={NotFound} alt='Not Found' />
					</Empty>
				) : (
					<>
						<Main>
							{data?.map((job) => (
								<Link to={`../job-detail/${job.id}`} key={job.id}>
									<JobCard job={job} />
								</Link>
							))}
						</Main>
						<LoadMore>
							<CustomButton
								// onClick={loadMoreData}
								text='Load More'
								className='bg-violet-dark text-white hover:bg-violet-light'
							/>
						</LoadMore>
					</>
				)}
			</MainContainer>
		</SectionContainer>
	)
}

export default Jobs
