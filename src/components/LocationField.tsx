import tw from 'twin.macro'
import { ReactComponent as LocationIcon } from '../assets/desktop/icon-location.svg'
import { FormInput } from './FormInput'

const FieldContainer = tw.div`relative border-b dark:border-grey-btn md:border-0`
const Label = tw.label``
const Span = tw.span``

type FieldProps = {
	locationRef: React.Ref<HTMLInputElement>
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const LocationField = ({locationRef, value, onChange}: FieldProps) => {
	return (
		<FieldContainer>
			<LocationIcon className='absolute left-5 top-1/3 z-20 text-violet-dark' />
			<Label htmlFor='Filter by location'>
				<Span className='sr-only'>Filter by location</Span>
			</Label>
			<FormInput
				ref={locationRef}
				id='Filter by location'
				type='text'
				placeholder='Filter by location'
				name='location'
				value={value}
				onChange={onChange}
			/>
		</FieldContainer>
	)
}
export default LocationField
