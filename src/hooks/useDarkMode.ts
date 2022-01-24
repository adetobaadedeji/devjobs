import { useEffect, useState } from 'react'

export const useDarkMode = (initialValue: boolean): [boolean, () => void] => {
	const [isdarkMode, setDarkMode] = useState(initialValue)


	useEffect(() => {
		setDarkMode(document.documentElement.classList.contains('dark'))
	}, [])

	useEffect(() => {
		if (isdarkMode) {
			window.document.documentElement.classList.add('dark')
			localStorage.setItem('darkTheme', 'true')
		} else {
			window.document.documentElement.classList.remove('dark')
			localStorage.setItem('darkTheme', 'false')
		}
	}, [isdarkMode])

	const toggleMode = () => {
		setDarkMode(!isdarkMode)
	}

	return [isdarkMode, toggleMode]
}
