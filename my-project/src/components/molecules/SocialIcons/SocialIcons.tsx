import { FC } from 'react';
import { StyledSocialIcons } from './styles';

import { Icon } from 'Atoms/Icon';

const SocialIcons: FC = () => {
	return (
		<StyledSocialIcons>
			<li>
				<a
					href="https://github.com/drvaya"
					target="_blank"
					rel="noopener noreferrer"
					title="Github"
				>
					<Icon icon="GITHUB" />
				</a>
			</li>
			<li>
				<a
					href="https://twitter.com/drvaya"
					target="_blank"
					rel="noopener noreferrer"
					title="Twitter"
				>
					<Icon icon="TWITTER" />
				</a>
			</li>
		</StyledSocialIcons>
	);
};

export { SocialIcons };
