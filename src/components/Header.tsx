import tw from 'twin.macro'
import SectionContainer from './SectionContainer'
import ThemeSwitch from './ThemeSwitch'
import { Link } from 'react-router-dom'

const HeaderWrapper = tw.header`bg-violet-dark bg-cover bg-header-mobile sm:bg-header-tablet 
lg:bg-header-desktop bg-no-repeat h-[6.8rem] md:h-[8.1rem] md:rounded-bl-[5rem]
flex justify-between pt-6 md:pt-8`

const HeaderContent = tw.div`w-full flex items-center justify-between`
const Title = tw.h1`text-white text-3xl font-extrabold`

const Header = () => {
	return (
		<HeaderWrapper>
			<SectionContainer>
				<HeaderContent>
					<Link to='/'>
						<Title>devjobs</Title>
					</Link>
					<ThemeSwitch />
				</HeaderContent>
			</SectionContainer>
		</HeaderWrapper>
	)
}

export default Header
