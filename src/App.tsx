import tw from 'twin.macro'
import { Navigate, Route, Routes } from 'react-router-dom'
import ModeTheme from './modeTheme/ModeTheme'
import JobDetail from './pages/JobDetail'
import Jobs from './pages/Jobs'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import SectionContainer from './components/SectionContainer'

function App() {
	return (
		<AppContainer>
			<ModeTheme />
			<Header />
			<SectionContainer>
				<Routes>
					<Route path='/' element={<Navigate replace to='/jobs' />} />
					<Route path='jobs' element={<Jobs />} />
					<Route path='job-detail/:id' element={<JobDetail />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</SectionContainer>
		</AppContainer>
	)
}

const AppContainer = tw.div`font-KumbhSans bg-grey-light dark:bg-blue-midnight dark:text-white min-h-screen`

export default App
