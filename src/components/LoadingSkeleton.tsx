
type CounterProps = {
  counter: number
}

const LoadingSkeleton = ({ counter }: CounterProps) => {
	const COUNTER = counter || 5
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 my-10'>
			{[...Array(COUNTER)].map((n, index) => (
				<div
					className='relative h-[12.5rem] max-w-[22rem] rounded-md px-[1.8rem] pt-[3.2rem] pb-[2rem] bg-slate-200 dark:bg-slate-700 '
					key={index}
				>
					<div className='w-[2.5rem] h-[2.5rem] p-1 bg-slate-300 dark:bg-slate-800 rounded-xl flex justify-center items-center absolute -top-4 left-[1.6rem]'></div>
					<div className='flex flex-col h-full'>
						<div className='w-32 h-2 rounded bg-slate-300 dark:bg-slate-800 animate-pulse'></div>
						<div className='w-48 h-3 rounded bg-slate-300 dark:bg-slate-800 my-3 animate-pulse'></div>
						<div className='w-28 h-2 rounded bg-slate-300 dark:bg-slate-800 animate-pulse'></div>
						<div className='w-32 h-2 rounded mt-auto bg-slate-300 dark:bg-slate-800 animate-pulse'></div>
					</div>
				</div>
			))}
		</div>
	)
}

export default LoadingSkeleton;
