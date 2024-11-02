import Image from 'next/image'

export default function HowItWorks() {
  return (
    <>
      
			<div className='opacity-50 z-0 absolute'>
				<Image
				src="/background copy.jpg"
				width={2000}
				height={100}
				alt="Picture of the author"
				/>
			</div>
			<div className='mt-20 relative z-1 place-content-center grid'>
				<div className='mt-20 mb-20 text-center text-5xl font-bold'>
					How It Works
				</div>
				<div className='grid grid-cols-3 gap-x-8'>
				<div className='bg-white/80 w-80 h-96 grid grid-rows-[auto_1fr_auto] rounded-2xl
					gap-y-0 place-content-center font-semibold'>
						<div className='text-center mt-5 h-8 text-2xl'>User Input</div>
						<div className='h-48 mt-5 flex justify-center'>
							<div className='w-52 h-52 bg-slate-200 rounded-full flex justify-center'>
								<Image
								src="/userinput.png"
								width={110}
								height={10}
								alt="Picture of the author"/>
							</div>
						</div>
						<div className='text-center mb-10 mt-5'>
							User inputs ingredients that<br></br> they have on hand
						</div>
					</div>
					<div className='bg-white/80 w-80 h-96 grid grid-rows-[auto_1fr_auto] rounded-2xl
					gap-y-0 place-content-center font-semibold'>
						<div className='text-center mt-5 h-8 text-2xl'>AI API</div>
						<div className='h-48 mt-5 flex justify-center'>
							<Image
							src="/api-modified.png"
							width={200}
							height={200}
							alt="Picture of the author"/>
						</div>
						<div className='text-center mb-16'>
							API will scan the list of ingredients
						</div>
					</div>
					<div className='bg-white/80 w-80 h-96 grid grid-rows-[auto_1fr_auto] rounded-2xl
					gap-y-0 place-content-center font-semibold'>
						<div className='text-center mt-5 h-8 text-2xl'>Recipe Creation</div>
						<div className='h-48 mt-5 flex justify-center'>
							<Image
							src="/recipe-icon.png"
							width={200}
							height={200}
							alt="Picture of the author"/>
						</div>
						<div className='text-center mb-10'>
							A recipe will be generated using available ingredients
						</div>
					</div>
				</div>
			</div>
    </>
  );
}
