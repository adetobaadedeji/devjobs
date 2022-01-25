import { useState } from 'react'
import tw from 'twin.macro'
import { ReactComponent as SearchIcon } from '../assets/desktop/icon-search.svg'
import { ReactComponent as LocationIcon } from '../assets/desktop/icon-location.svg'
import { ReactComponent as CheckIcon } from '../assets/desktop/icon-check.svg'
import { ReactComponent as FilterIcon } from '../assets/mobile/icon-filter.svg'
import { SearchPropsTypes, queryTypes } from '../types/Types'
import { FormInput } from './Input'
import CustomButton from './Button'
// import { filterJob } from '../helpers/helper'

const SearchContainer = tw.section`bg-white dark:bg-blue-dark rounded-md dark:shadow-2xl `
const Form = tw.form`flex items-center bg-white dark:bg-blue-dark text-blue-dark dark:text-grey-light  rounded-md`
const Label = tw.label``
const Span = tw.span``
const Div1 = tw.div`flex items-center w-full relative`
const Div2 = tw.div`flex items-center md:hidden px-5`
const Div3 = tw.div`flex items-center md:hidden mr-4`
const Div4 = tw.div`hidden md:flex items-center w-full relative border-l border-r  dark:border-grey-btn`
const Div5 = tw.div`hidden md:flex items-center w-full pl-5 pr-4`



const Search = ({ data, setData }: SearchPropsTypes) => {

	const [query, setQuery] = useState<queryTypes>({
		title: '',
		location: '',
		contractType: false,
	})

	const onQueryChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
		const target = e.target
		const value = target.type === 'checkbox' ? target.checked : target.value
		const name = target.name
		setQuery({ ...query, [name]: value })
	}

	// const filteredJob = filterJob(query,)
 const filterJobs = () => {
		const filteredJobs =  data
		  .filter((item) => (query.title ? item.company.toLowerCase().includes(query.title.toLowerCase()) || item.position.toLowerCase().includes(query.title.toLowerCase()) : ''))
		  .filter((item) => (query.location ? item.location.toLowerCase().includes(query.location) : ''))
		  .filter((item) => (query.contractType ? item.contract === 'Full Time' : ''));
		setData(filteredJobs);
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
					<SearchIcon className='hidden md:flex absolute left-5 z-20 text-violet-dark' />
					<Label htmlFor='Filter by title'>
						<Span className='visually-hidden'>
							Filter by title, companies, expertise
						</Span>
					</Label>
					<FormInput
						id='Filter by title'
						type='text'
						placeholder='Filter by title, companies, expertise...'
						name='title'
						value={query.title}
						onChange={onQueryChange}
					/>
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
					<LocationIcon className='absolute left-5 z-20 text-violet-dark' />
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
					/>
				</Div4>
				<Div5>
					{/* <FormInput type='checkbox' />
						<span className='ml-2 mr-auto font-semibold text-[0.8rem]'>Full Time</span> */}
					<span className='flex mr-auto font-semibold text-[0.8rem]'>
						<FormInput
							type='checkbox'
							name='contractType'
							checked={query.contractType}
							onChange={onQueryChange}
						/>
						<span className='h-[1.2rem] w-[1.2rem] rounded-sm bg-gray-200 dark:bg-gray-700 flex justify-center items-center mr-2'>
							<CheckIcon className='hidden' />
						</span>
						Full Time
					</span>

					<CustomButton type='submit' text='Search' />
				</Div5>
			</Form>
		</SearchContainer>
	)
}

export default Search
// FunctionComponent<SVGProps<SVGSVGElement>
