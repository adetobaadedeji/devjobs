import tw from 'twin.macro'
import styled from 'styled-components'
// import { forwardRef } from 'react'

type InputProps = React.ComponentPropsWithoutRef<'input'>
// type InputProps = React.ComponentPropsWithRef<'input'>


const Input = styled.input(({ type }) => [
	tw`w-full flex h-[4.5rem] lg:h-[4rem] px-4 text-sm md:pl-[3.25rem] focus:outline-none focus:ring focus:ring-violet-light 
	focus:border-violet-dark focus:z-10 dark:bg-blue-dark rounded truncate placeholder-grey-med`,
	type === 'checkbox' && tw`w-5 h-5 rounded-none focus:ring-0`,
])

export const FormInput = ({type, ...props}: InputProps) => {
	return <Input type={type} {...props} />
}

// export const FormInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
// 	return <Input ref={ref} {...props} />
// })
// FormInput.displayName = 'Input'
