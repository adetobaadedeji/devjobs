import tw from 'twin.macro'
import styled from 'styled-components'

type InputProps = React.ComponentPropsWithoutRef<'input'>

const Input = styled.input(({ type }) => [
	tw`w-full flex h-[4.5rem] px-4 text-sm md:pl-[3.25rem] focus:outline-none focus:ring focus:ring-violet-light 
	focus:border-violet-dark focus:z-10 dark:bg-blue-dark rounded truncate placeholder-grey-med`,
	type === 'checkbox' && tw`w-5 h-5 rounded-none`,
])

export const TextInput = ({type, ...props}: InputProps) => {
	return <Input type={type} {...props} />
}

