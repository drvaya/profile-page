import absoluteUrl from 'next-absolute-url';
import { differenceInCalendarYears } from 'date-fns';
import { fetcher } from 'Utils/fetcher';
import { GetServerSideProps } from 'next';
import styled from 'styled-components';
import { useState } from 'react';

import { IEducation, IJob } from '@Types';

import { Container } from 'Atoms/Container';
import { Education } from 'Atoms/Education';
import { Position } from 'Atoms/Position';
import { SeoHead } from 'Atoms/SeoHead';

interface IProps {
	jobs: IJob[];
	education: IEducation[];
}

function About({ jobs, education }: IProps) {
	const [loadedJobs, setLoadedJobs] = useState(2);

	const loadMore = () => {
		setLoadedJobs((prev) => prev + 3);
	};

	return (
		<>
			<SeoHead
				title="KloudZone"
				description="KloudZone - A blog by Dharmesh Vaya. Reviews, Tutorials and the latest on Cloud Technologies."
			/>

			<Container>
				<Headline>Hey, I&apos;m Dharmesh Vaya <span>👨‍🔧☁️⚙️🚀</span> </Headline>
				<h3>A Cloud Engineer/Architect from India 🇮🇳</h3>
				<p>
				I am a technologist known for my abilities of developing enterprise applications 
				on Cloud Platforms and fostering a spirit of innovation among teams, with a diverse 
				experience around Banking, e-Commerce, Media/Entertainment to name a few.
				</p>
				<p>
				In my professional journey I have close to 16 years of IT experience and I work as a 
				Senior Enterprise Architect for Cloud Application Modernization at VMware.
				</p>
				<p>
				I am a Google Developer Expert for Google Cloud Platform & Payments category and also 
				actively manage the Google Cloud Developers Community, Mumbai.
				</p>
				<p>
				I enjoy writing blogs, tutorials, tinkering with new Cloud products and share the same by 
				speaking at various conferences. I try and share my learnings/experiences with Students, 
				Young Professionals/Startups by being a Mentor to help them scale up on Cloud Technologies.
				</p>

				<Center>
					<a href="https://drive.google.com/file/d/1JT650R4vXZxLjs5m_ujwkSMSdWBzA9vY/view?usp=sharing" target="_blank">
						Download a copy of my CV
					</a>
				</Center>
			</Container>
		</>
	);
}

const Headline = styled.h2`
	font-size: 2rem;
	margin-bottom: 0;

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

const Center = styled.div`
	text-align: center;
	font-weight: bold;
	margin-top: 2rem;

	button {
		display: block;
		margin: 2rem auto;
		border: 2px solid ${({ theme }) => theme.text};
		color: ${({ theme }) => theme.text};
		padding: 0.5rem 3rem;
		border-radius: 5px;
		background: transparent;
	}
`;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const { origin } = absoluteUrl(req);
	const { positions } = await fetcher(`${origin}/api/jobs`);
	const { education } = await fetcher(`${origin}/api/education`);
	const skills = await fetcher(`${origin}/api/skills`);

	return {
		props: {
			jobs: positions,
			education,
			skills,
		},
	};
};

export default About;
