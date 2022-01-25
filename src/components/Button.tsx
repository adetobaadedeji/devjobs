import tw from 'twin.macro'

// we have access to the native <button/> props e.g type, children, onClick

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
// arialLabel?: string
// icon?: React.ReactNode
// text?: string
// }

// type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
// 	arialLabel?: string
// 	icon?: React.ReactNode
// 	text?: string
// }

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
	arialLabel?: string
	icon?: React.ReactNode
	text?: string
}

const Button = tw.button`focus:border-violet-dark bg-violet-dark text-white text-sm hover:bg-violet-light p-2.5 lg:px-4 rounded`

// const CustomButton: React.FC<ButtonProps> = ({icon, text, ...rest }) => {
const CustomButton = ({ icon, text, ...rest }: ButtonProps) => {
	return (
		<Button {...rest}>
			{icon}
			{text}
		</Button>
	)
}

export default CustomButton
 