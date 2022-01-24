import tw from 'twin.macro'
import { ReactComponent as MoonIcon } from '../assets/desktop/icon-moon.svg'
import { ReactComponent as SunIcon } from '../assets/desktop/icon-sun.svg'
import { useDarkMode } from '../hooks/useDarkMode'

const ThemeSwitchContainer = tw.div`flex items-center `
const Labell = tw.label`flex items-center cursor-pointer mx-2 md:mx-3`
const InputContainer = tw.div`relative`
const Input = tw.input`sr-only`
const Block = tw.div`block bg-white w-10 h-6 rounded-full`
const Dot = tw.div`absolute left-1 top-1 bg-violet-dark w-4 h-4 rounded-full transition duration-100 ease-in-out`

const InputCheck = () => {
	const [isdarkMode, toggleMode] = useDarkMode(false)
	return (
		<Labell htmlFor='toggle'>
			<InputContainer>
				<Input
					type='checkbox'
					id='toggle'
					checked={isdarkMode}
					onChange={toggleMode}
				/>
				<Block></Block>
				<Dot className='dot bg-violet-dark'></Dot>
			</InputContainer>
		</Labell>
	)
}

const ThemeSwitch = () => {
	return (
		<ThemeSwitchContainer>
			<SunIcon />
			<InputCheck />
			<MoonIcon />
		</ThemeSwitchContainer>
	)
}

export default ThemeSwitch
