import { useState } from 'react'
import tw from 'twin.macro'
import { ReactComponent as SearchIcon } from '../assets/desktop/icon-search.svg'
import { ReactComponent as FilterIcon } from '../assets/mobile/icon-filter.svg'
import { SearchPropsTypes, queryTypes } from '../types/Types'
import CustomButton from './Button'
import { useData } from '../hooks/useData'
import LocationField from './LocationField'
import CheckField from './CheckField'
import TitleField from './TitleField'
import Modal from './Modal'

const SearchContainer = tw.section`bg-white dark:bg-blue-dark rounded-md dark:shadow-2xl `
const Form = tw.form`flex items-center bg-white dark:bg-blue-dark text-blue-dark dark:text-grey-light  rounded-md`
const Div1 = tw.div`flex items-center w-full relative`
const Div2 = tw.div`flex items-center md:hidden px-5`
const Div3 = tw.div`flex items-center md:hidden mr-4`
const Div4 = tw.div`hidden md:flex items-center w-full border-l border-r  dark:border-grey-btn`
const Div5 = tw.div`hidden md:flex items-center w-full pl-5 pr-4`

const Search = ({ setData }: SearchPropsTypes) => {
	const [data] = useData()
	const [modal, setModal] = useState(false)

	const [query, setQuery] = useState<queryTypes>({
		title: '',
		location: '',
		contractType: false,
	})

	const onQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const target = e.target
		const value = target.type === 'checkbox' ? target.checked : target.value
		const name = target.name
		setQuery({ ...query, [name]: value })
	}

	const OpenModal = () => {
		document.documentElement.style.overflowY = 'hidden'
		setModal(true)
	}

	const filterJobs = async () => {
		const jobTitle = query.title.toLowerCase().trim()
		const jobLocation = query.location.toLowerCase().trim()

		const filteredJobs = data
			.filter(
				(job) =>
					job.company.toLowerCase().includes(jobTitle) ||
					job.position.toLowerCase().includes(jobTitle)
			)
			.filter((job) => job.location.toLowerCase().includes(jobLocation))
			.filter((job) =>
				query.contractType ? job.contract === 'Full Time' : true
			)

		setData(filteredJobs)
	}

	const handleSubmit = (e: React.SyntheticEvent): void => {
		e.preventDefault()
		filterJobs()
	}

	return (
		<SearchContainer>
			<Form onSubmit={handleSubmit}>
				{modal && (
					<Modal modal={modal} setModal={setModal}>
						<LocationField value={query.location} onChange={onQueryChange} />
						<CheckField checked={query.contractType} onChange={onQueryChange} />
					</Modal>
				)}

				<Div1>
					<TitleField value={query.title} onChange={onQueryChange} />
				</Div1>
				<Div2 onClick={() => OpenModal()}>
					<FilterIcon />
				</Div2>
				<Div3>
					<CustomButton
						type='submit'
						icon={<SearchIcon className='text-white' />}
						arialLabel='Search'
					/>
				</Div3>
				<Div4>
					<LocationField value={query.location} onChange={onQueryChange} />
				</Div4>
				<Div5>
					<CheckField checked={query.contractType} onChange={onQueryChange} />
					<CustomButton type='submit' text='Search' />
				</Div5>
			</Form>
		</SearchContainer>
	)
}

export default Search
