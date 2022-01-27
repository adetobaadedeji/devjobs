import tw from 'twin.macro'
import { ReactComponent as LocationIcon } from '../assets/desktop/icon-location.svg'
import { FormInput } from './Input'

const Label = tw.label``
const Span = tw.span``

type FieldProps = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const LocationField = ({value, onChange}: FieldProps) => {
	return (
		<>
			<LocationIcon className='absolute left-5 z-20 text-violet-dark' />
			<Label htmlFor='Filter by location'>
				<Span className='visually-hidden'>Filter by location</Span>
			</Label>
			<FormInput
				id='Filter by location'
				type='text'
				placeholder='Filter by location'
				name='location'
				value={value}
				onChange={onChange}
			/>
		</>
	)
}
export default LocationField
