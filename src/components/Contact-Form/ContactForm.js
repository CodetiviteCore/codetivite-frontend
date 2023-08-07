import { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../ui_elements/Button/Button';
import { Input } from '../../ui_elements';
import { devices } from '../../utils/MediaQueiyBreakPoints';

export const ContactForm = () => {
	const [ privacyChecked, setPrivacyChecked ] = useState(false);

	const handlePrivacyClick = () => {
		setPrivacyChecked(!privacyChecked);
	};

	return (
		<FormContainer>
			<NameContainer>
				<div>
					<label>Last name</label>
					<Input type={'text'} width={'12rem'} />
				</div>

				<div>
					<label>First name</label>
					<Input type={'text'} width={'12rem'} />
				</div>
			</NameContainer>

			<EmailContainer>
				<label>Email</label>
				<Input width={'93.3%'} type={'email'} />
			</EmailContainer>

			<MessageContainer>
				<label>Message</label>
				<textarea />
			</MessageContainer>

			<PrivacyContainer>
				<PrivacyCheckbox checked={privacyChecked} onClick={handlePrivacyClick} />
				<p>
					You agree to our friendly <span>privacy policy</span>
				</p>
			</PrivacyContainer>

			<Button primary>Send Message</Button>
		</FormContainer>
	);
};

const PrivacyCheckbox = ({ checked, onClick }) => {
	return <Checkbox checked={checked} onClick={onClick} />;
};

const FormContainer = styled.aside`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 2% !important;
	background-color: "#F7FDF9";
	width: 55%;
	height: 35rem;
	box-shadow: 1px 4px 60px -10px rgba(0, 0, 0, 0.03);
	-webkit-box-shadow: 1px 4px 60px -10px rgba(0, 0, 0, 0.03);
	-moz-box-shadow: 1px 4px 60px -10px rgba(0, 0, 0, 0.03);
	input {
		display: block;
	}
	label {
		margin-bottom: 2rem;
	}
	@media ${devices.laptop} {
		width: 100%;
	}
`;

const NameContainer = styled.div`
	display: flex;
	gap: 2rem;
	justify-content: space-between;
	div {
		width: fit-content !important;
	}
	@media ${devices.tablet} {
		input {
			width: 80%;
		}
	}
`;
const EmailContainer = styled.div`
	@media ${devices.laptop} {
		input {
			width: 94%;
		}
	}
`;
const MessageContainer = styled.div`
	width: 100%;
	textarea {
		display: block;
		outline: none;
		border: 1px solid #d0d5dd;
		border-radius: 4px;
		width: 95%;
		height: 8rem;
		padding: 2%;
		:focus {
			border: 1px solid var(--primary);
		}
	}
`;

const PrivacyContainer = styled.div`
	display: flex;
	align-items: center;
	margin-top: 1rem;
`;

const Checkbox = styled.div`
	display: inline-block;
	width: 1rem;
	height: 1rem;
	margin-right: 0.5rem;
	border: 2px solid var(--primary);
	border-radius: 0.2rem;
	background-color: ${(props) => (props.checked ? 'var(--primary)' : 'transparent')};
	cursor: pointer;
	transition: background-color 0.2s ease-in-out;

	&::after {
		content: '';
		display: block;
		width: 0.5rem;
		height: 0.25rem;
		margin: 0.2rem 0.25rem;
		border-right: 2px solid #fff;
		border-bottom: 2px solid #fff;
		transform: rotate(130deg) scaleY(-1);
		opacity: ${(props) => (props.checked ? '1' : '0')};
		transition: opacity 0.2s ease-in-out;
	}
`;
