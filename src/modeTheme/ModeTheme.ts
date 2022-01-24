import { useLayoutEffect } from 'react'

const ModeTheme = () => {
	useLayoutEffect(() => {
		if (
			localStorage.getItem('darkTheme') === 'true' ||
			(!('darkTheme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [])
  return null
}

export default ModeTheme
