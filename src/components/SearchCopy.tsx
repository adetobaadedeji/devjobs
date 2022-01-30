// import { useRef, useState, useEffect } from 'react'
import { useState } from 'react'
import tw from 'twin.macro'
import { ReactComponent as SearchIcon } from '../assets/desktop/icon-search.svg'
// import { ReactComponent as LocationIcon } from '../assets/desktop/icon-location.svg'
// import { ReactComponent as CheckIcon } from '../assets/desktop/icon-check.svg'
import { ReactComponent as FilterIcon } from '../assets/mobile/icon-filter.svg'
import { SearchPropsTypes, queryTypes } from '../types/Types'
// import { FormInput } from './Input'
import CustomButton from './Button'
import { useData } from '../hooks/useData'
import LocationField from './LocationField'
import CheckField from './CheckField'
import TitleField from './TitleField'

const Search = ({ setData }: SearchPropsTypes) => {
	const [data] = useData()
	// const [modal, setModal] = useState(false)
	// const titleRef = useRef<HTMLInputElement>(null!)
	// const locationRef = useRef<HTMLInputElement>(null!)

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

	// useEffect(() => {
	// 	if (modal) {
	// 		locationRef.current.focus()
	// 	} else {
	// 		titleRef.current.focus()
	// 	}
	// }, [modal])

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
		// const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		filterJobs()
	}

	return (
		<SearchContainer>
			<Form onSubmit={handleSubmit}>
				<Div1>
					{/* <SearchIcon className='hidden md:flex absolute left-5 z-20 text-violet-dark' />
					<Label htmlFor='Filter by title'>
						<Span className='visually-hidden'>
							Filter by title, companies, expertise
						</Span>
					</Label>
					<FormInput
						// ref={titleRef}
						id='Filter by title'
						type='text'
						placeholder='Filter by title, companies, expertise...'
						name='title'
						value={query.title}
						onChange={onQueryChange}
					/> */}
					{/* <TitleField value={query.title} onChange={onQueryChange} /> */}
				</Div1>
				<Div2>
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
					{/* <LocationIcon className='absolute left-5 z-20 text-violet-dark' />
					<Label htmlFor='Filter by location'>
						<Span className='visually-hidden'>Filter by location</Span>
					</Label>
					<FormInput
						id='Filter by location'
						type='text'
						placeholder='Filter by location'
						name='location'
						value={query.location}
						onChange={onQueryChange}
					/> */}
					{/* <LocationField value={query.location} onChange={onQueryChange} /> */}
				</Div4>
				<Div5>
					{/* <CheckField>
						<FormInput
							type='checkbox'
							name='contractType'
							checked={query.contractType}
							onChange={onQueryChange}
							className='checkbox block opacity-0 h-0 w-0 z-10 mr-2'
						/>
						<span className='absolute h-[1.2rem] w-[1.2rem] rounded-sm bg-gray-200 dark:bg-gray-700 flex justify-center items-center'>
							<CheckIcon className='hidden' />
						</span>
						Full Time
					</CheckField> */}
					<CheckField checked={query.contractType} onChange={onQueryChange} />
					<CustomButton type='submit' text='Search' />
				</Div5>
			</Form>
		</SearchContainer>
	)
}

export default Search

const SearchContainer = tw.section`bg-white dark:bg-blue-dark rounded-md dark:shadow-2xl `
const Form = tw.form`flex items-center bg-white dark:bg-blue-dark text-blue-dark dark:text-grey-light  rounded-md`
const Label = tw.label``
const Span = tw.span``
const Div1 = tw.div`flex items-center w-full relative`
const Div2 = tw.div`flex items-center md:hidden px-5`
const Div3 = tw.div`flex items-center md:hidden mr-4`
const Div4 = tw.div`hidden md:flex items-center w-full relative border-l border-r  dark:border-grey-btn`
const Div5 = tw.div`hidden md:flex items-center w-full pl-5 pr-4`
// const CheckField = tw.span`relative flex items-center mr-auto font-semibold text-[0.8rem]`
