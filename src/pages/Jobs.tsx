import { Link } from 'react-router-dom'
import tw from 'twin.macro'
import JobCard from '../components/JobCard'
import Search from '../components/Search'
import { useData } from '../hooks/useData'
import NotFound from '../assets/undraw_blank_canvas_-3-rbb.svg'

const MainContainer = tw.section`-mt-8 md:-mt-9`
const Main = tw.main`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 mt-10`
const Empty = tw.div`flex flex-col max-w-sm mx-auto text-center mt-10`
const EmptyP = tw.p`py-10 text-2xl text-violet-dark`
const EmptyImg = tw.img``

const Jobs = () => {
	const [data, setData, loading] = useData()

	return (
		<MainContainer>
			<Search setData={setData} />
			{loading ? (
				<div>Loading...</div>
			) : data?.length === 0 ? (
				<Empty>
					<EmptyP>No jobs found....</EmptyP>
					<EmptyImg src={NotFound} alt='Not Found'/>
				</Empty>
			) : (
				<Main>
					{data?.map((job) => (
						<Link to={`../job-detail/${job.id}`} key={job.id}>
							<JobCard job={job} />
						</Link>
					))}
				</Main>
			)}
		</MainContainer>
	)
}

export default Jobs
