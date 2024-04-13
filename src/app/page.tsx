import Image from 'next/image';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center w-full max-md:w-10/12">
			<div className="bg-white flex flex-col items-center justify-center w-96 max-md:w-auto rounded-xl p-3">
				<div className="flex flex-col items-center justify-center">
					<Image
						src="/images/image-qr-code.png"
						alt="Illustration"
						width={400}
						height={400}
						className="rounded-lg"
					/>
				</div>
				<div className="flex flex-col items-center justify-center p-2">
					<h3 className="text-center text-2xl font-bold text-gray-800 mt-4">
						Improve your front-end skills by building projects
					</h3>
					<p className="text-center text-gray-400 mt-4">
						Scan the QR code to visit Frontend Mentor and take your
						coding skills to the next level
					</p>
				</div>
			</div>
		</main>
	);
}
