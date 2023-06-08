import Section from '@/components/parts/Section';
import Logo from '@/public/9d8.svg';
import Image from 'next/image';

const Hero = () => {
	return (
		<div className="h-screen max-h-screen w-screen relative bg-cover md:bg-center bg-[url('https://i.giphy.com/media/3og0INSAmR6cH4cbug/giphy.webp')]">
			<Section>
				<div className="flex flex-col gap-4">
					<h1 className="text-2xl md:text-4xl">9d8 Development Studio</h1>
					<h3 className="text-lg max-w-[720px]">
						We are a development studio that specializes in web and software development. Using
						Next.js, Svelte, React, Ruby on Rails, PHP, and Laravel.
					</h3>
					<a className="block border-b w-fit hover:text-yellow-100" href="mailto:9d8dev@gmail.com">
						Contact us
					</a>
				</div>
			</Section>
			<Image
				src={Logo}
				alt="9D8 Logo"
				width={1080}
				className="md:fixed absolute bottom-0 right-0"
			/>
		</div>
	);
};

export default Hero;
