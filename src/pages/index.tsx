import absoluteUrl from 'next-absolute-url';
import { fetcher } from 'Utils/fetcher';
import { GetServerSideProps } from 'next';
import { ISkills } from '@Types';
import styled from 'styled-components';
import Typed from 'react-typed';

import { Container } from 'Atoms/Container';
import { SeoHead } from 'Atoms/SeoHead';

interface IProps {
	skills: ISkills;
}

function Home({ skills }: IProps) {
	const { technologies, frameworks } = skills;

	const talkAbout = [...technologies, ...frameworks];

	return (
		<>
			<SeoHead
				title="KloudZone"
				description="KloudZone - A blog by Dharmesh Vaya. Reviews, Tutorials and the latest on Cloud Technologies."
			/>

			<Container>
				<Headline>
					Hey, I&apos;m
					<wbr /> Dharmesh Vaya <span>👋</span>
				</Headline>
				<p>
					I am a Cloud Architect, specialised in Cloud Infrastructure and Automation
					solutions using public cloud platforms. I have a diverse experience around
					Banking/FinTech, e-Commerce, Retail, Media to name a few.
					<br /><br />
					You can talk to me about{' '}
					<Typed
						loop
						typeSpeed={80}
						backSpeed={20}
						strings={talkAbout}
						smartBackspace
						backDelay={1000}
						loopCount={0}
						showCursor
						cursorChar="|"
					/>
					.
				</p>
				<p>
					Read my {' '}
					<a
						href="https://blog.kloudzone.co.in"
						title="Link to Blog KloudZone"
						target="_blank"
						rel="noopener noreferrer"
					>
						Blog - KloudZone
					</a>
					&nbsp;to know the latest around Cloud Technologies.
				</p>
				<p>
					P.S. this website is open-source and available on{' '}
					<a
						href="https://github.com/drvaya"
						title="Link to Github repository"
						target="_blank"
						rel="noopener noreferrer"
					>
						Github
					</a>
					.
				</p>
			</Container>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const { origin } = absoluteUrl(req);
	const skills = await fetcher(`${origin}/api/skills`);

	return {
		props: {
			skills,
		},
	};
};

const Headline = styled.h2`
	font-size: 2rem;

	span {
		display: none;
	}

	@media screen and (min-width: 768px) {
		font-size: 3rem;

		span {
			display: inline-block;
		}

		@keyframes wave {
			0% {
				transform: rotate(0);
			}
			50% {
				transform: rotate(-10deg);
			}
			100% {
				transform: rotate(10deg);
			}
		}

		&:hover span {
			animation: wave 0.5s ease infinite;
		}
	}
`;

export default Home;