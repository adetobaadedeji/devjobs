import tw from 'twin.macro'

type SectionContainerProps = {
	children: React.ReactNode
}

const SectionContainer = ({ children }: SectionContainerProps) => {
	return <Container>{children}</Container>
}

const Container = tw.section`w-11/12 md:w-[90%] mx-auto max-w-[55.5rem] `

export default SectionContainer
