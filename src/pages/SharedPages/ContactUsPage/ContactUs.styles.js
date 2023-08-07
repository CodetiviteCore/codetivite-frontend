import styled from 'styled-components';
import { devices } from '../../../utils/MediaQueiyBreakPoints';

export const ContactUsContainer = styled.main`
	padding: 8%;
	display: flex;
	justify-content: space-between;
	@media ${devices.laptop} {
		flex-direction: column;
		gap: 1rem;
	}
`;
export const ButtonFlexContainer = styled.div`
	display: flex;
	justify-content: center;
	width: auto;
	gap: 1.3rem;
`;
export const ContactDetails = styled.aside`
	p {
		width: 80%;
	}
	h6 {
		color: var(--text-black);
		font-weight: 600;
		margin-bottom: 1.2rem;
	}
	h2 {
		margin-bottom: 1.2rem;
	}
	Button {
		margin-top: 1.5rem;
	}
	button:last-child {
		p {
			color: var(--primary);
			font-weight: 600;
			font-size: 1rem;
		}
	}
	@media ${devices.tablet} {
		button {
			width: inherit;
		}
		p {
			width: 100%;
			font-size: 1rem;
		}
	}
`;
