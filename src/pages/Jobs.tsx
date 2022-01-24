import { Link } from 'react-router-dom'
import tw from 'twin.macro'
import JobCard from '../components/JobCard'
import Search from '../components/Search'
import { useData } from '../hooks/useData'

const MainContainer = tw.section`-mt-8 md:-mt-9`
const Main = tw.main`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 mt-10`

const Jobs = () => {
	const [data, setData] = useData()
	return (
		<MainContainer>
			<Search data={data} setData={setData} />
			<Main>
				{data?.map((job) => (
					<Link to={`../job-detail/${job.id}`} key={job.id}>
						<JobCard job={job} />
					</Link>
				))}
			</Main>
		</MainContainer>
	)
}

export default Jobs
