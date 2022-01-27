import tw from 'twin.macro'
import CustomButton from './Button'

const ModalContainer = tw.div`fixed inset-0 z-40 overflow-hidden h-screen
flex md:hidden flex-col justify-center items-center`
const ModalOverlay = tw.div`fixed inset-0 z-50 bg-black bg-opacity-40`
const ModalContent = tw.main`z-50 w-11/12 mx-auto p-6 bg-white space-y-4 rounded-md`

type ModalProps = {
	children: React.ReactNode
	modal: boolean
	setModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = ({ children, modal, setModal }: ModalProps) => {
	const closeModal = () => {
		if (modal) {
			setModal(!modal)
		}
  document.documentElement.style.overflowY = 'scroll'
	}

	return (
		<ModalContainer>
			<ModalOverlay onClick={closeModal} />
			<ModalContent>
				{children}
				<CustomButton
					type='submit'
					text='Search'
					className='w-full'
					// onClick={closeModal}
				/>
			</ModalContent>
		</ModalContainer>
	)
}

export default Modal
