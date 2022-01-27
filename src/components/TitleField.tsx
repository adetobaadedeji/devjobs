import tw from 'twin.macro'
import { ReactComponent as SearchIcon } from '../assets/desktop/icon-search.svg'
import { FormInput } from './Input'

const Label = tw.label``
const Span = tw.span``

type FieldProps = {
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}


const TitleField = ({ value, onChange }: FieldProps) => {
	return (
		<>
			<SearchIcon className='hidden md:flex absolute left-5 z-20 text-violet-dark' />
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
				value={value}
				onChange={onChange}
			/>
		</>
	)
}

export default TitleField
