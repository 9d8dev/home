import Section from './parts/Section';

const Hero = () => {
	return (
		<div className="h-screen w-screen relative">
			<Section>
				<div className="hero__content">
					<h1 className="hero__title">9d8 Development Studio</h1>
					<h3 className="hero__description">
						We are a development studio that specializes in web and software development. Using
						Next.js, Svelte, React, Ruby on Rails, PHP, and Laravel.
					</h3>
				</div>
			</Section>
		</div>
	);
};

export default Hero;
