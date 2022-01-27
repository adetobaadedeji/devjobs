import tw from 'twin.macro'
import { ReactComponent as CheckIcon } from '../assets/desktop/icon-check.svg'
import { FormInput } from './Input'

const CheckBox = tw.span`relative flex items-center mr-auto font-semibold text-[0.8rem]`

type FieldProps = {
	checked: boolean
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}


const CheckField = ({checked, onChange}: FieldProps) => {
	return (
		<CheckBox>
			<FormInput
				type='checkbox'
				name='contractType'
				checked={checked}
				onChange={onChange}
				className='checkbox block opacity-0 h-0 w-0 z-10 mr-2'
			/>
			<span className='absolute h-[1.2rem] w-[1.2rem] rounded-sm bg-gray-200 dark:bg-gray-700 flex justify-center items-center'>
				<CheckIcon className='hidden' />
			</span>
			Full Time
		</CheckBox>
	)
}

export default CheckField
