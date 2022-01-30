import tw from 'twin.macro'
import { useParams } from 'react-router-dom'
import { useData } from '../hooks/useData'
import SectionContainer from '../components/SectionContainer'

const DetailContainer = tw.section`-mt-8 md:-mt-9 w-full max-w-xl mx-auto`
const DetailHeader = tw.header`bg-white dark:bg-blue-dark px-[2rem] pb-[2rem] sm:px-0 sm:py-0 sm:pr-8 relative w-full min-h-[10.65rem] sm:min-h-[7rem] max-w-[22rem] 
sm:max-w-full flex flex-col sm:flex-row justify-between items-center mx-auto rounded-md`
const DetailContent = tw.main`p-5 md:p-[2.25rem] bg-white dark:bg-blue-dark mt-8 rounded-md max-w-[22rem] sm:max-w-full mx-auto`
const DetailFooter = tw.footer``
const CompanyLink = tw.a`bg-violet-dark bg-opacity-10 text-violet-dark hover:bg-violet-dark hover:bg-opacity-40 dark:bg-grey-btn dark:text-white
 dark:hover:bg-grey-hover text-xs md:text-sm px-3 py-2 rounded font-semibold mt-8 md:mt-0`
const TimeContract = tw.p`text-grey-dark text-xs`
const Position = tw.p`font-semibold my-2 lg:text-2xl`
const Apply = tw.a`bg-violet-dark min-w-max text-white hover:bg-violet-light text-xs md:text-sm px-3 lg:px-4 py-2 lg:px-6 rounded font-medium`
const Location = tw.p`text-xs text-violet-dark font-bold mt-auto`

const JobDetail = () => {
	const [data] = useData()
	const { id } = useParams()
	const job = data.find((item) => item.id.toString() === id)

	return (
		<>
			<SectionContainer>
				<DetailContainer>
					<DetailHeader >
						<div className='flex justify-center w-full sm:w-3/12 self-stretch'>
							<div
								className='w-[2.5rem] h-[2.5rem] sm:w-full sm:h-full  bg-grey-dark rounded-xl sm:rounded-none sm:rounded-l-md  flex justify-center items-center absolute -top-4 sm:static sm:top-0 sm:p-5 md:p-7 lg:p-8'
								style={{ backgroundColor: job?.logoBackground }}
							>
								<img
									className='sm:w-full p-1'
									src={`../${job?.logo}`}
									alt={job?.company}
								/>
							</div>
						</div>
						<div className='text-center pt-3 sm:w-6/12 sm:text-left sm:px-4 sm:pt-0 mt-6 md:m-0'>
							<h1 className='font-semibold lg:text-xl'>{job?.company}</h1>
							<p className='text-grey-dark text-xs lg:py-1'>{`${job?.company.toLowerCase()}.com`}</p>
						</div>
						<div className='sm:w-4/12 flex justify-end'>
							<CompanyLink
								target='blank'
								rel='noopener noreferrer'
								href={job?.website}
							>
								Company Site
							</CompanyLink>
						</div>
					</DetailHeader>
					<DetailContent>
						<TimeContract>
							{job?.postedAt}
							<span className='font-extrabold px-1.5'>.</span>
							{job?.contract}
						</TimeContract>
						<div className='flex justify-between items-center'>
							<Position>{job?.position}</Position>
							<Apply target='blank' rel='noopener noreferrer' href={job?.apply}>
								{' '}
								Apply Now
							</Apply>
						</div>
						<Location>{job?.location}</Location>
						<div>
							<p className='text-xs text-grey-dark py-5 leading-5'>
								{job?.description}
							</p>
							<h3 className='font-bold'>Requirements</h3>
							<p className='text-xs text-grey-dark pt-5 leading-5'>
								{job?.requirements.content}
							</p>
							<ul className='py-5 leading-5 px-3 md:px-[1rem] list-disc text-xs text-grey-dark'>
								{job?.requirements.items.map((item, i) => (
									<li className='pl-2 md:pl-5' key={i}>
										{item}
									</li>
								))}
							</ul>
							<h3 className='font-bold'>What You Will Do</h3>
							<p className='text-xs text-grey-dark pt-5 leading-5'>
								{job?.role.content}
							</p>
							<ul className='py-5 leading-5 px-3 md:px-[1rem] list-disc text-xs text-grey-dark'>
								{job?.role.items.map((item, i) => (
									<li className='pl-2 md:pl-5' key={i}>
										{item}
									</li>
								))}
							</ul>
						</div>
					</DetailContent>
				</DetailContainer>
			</SectionContainer>

			<DetailFooter className='bottom-0 py-4 px-8 bg-white dark:bg-blue-dark mt-8'>
				<div className='w-full max-w-xl mx-auto flex justify-between items-center'>
					<div>
						<p className='font-bold py-1 lg:text-lg'>{job?.position}</p>
						<p className='text-grey-dark text-xs'>{job?.company}</p>
					</div>
					<Apply target='blank' rel='noopener noreferrer' href={job?.apply}>
						{' '}
						Apply Now
					</Apply>
				</div>
			</DetailFooter>
		</>
	)
}

export default JobDetail
