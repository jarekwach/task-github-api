import styled from 'styled-components';

const StyledAlert = styled.div`
	position: absolute;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 25px;
	padding: 20px;
	background-color: white;
`;

const StyledAlertMessage = styled.p`
	margin-bottom: 2rem;
	padding: 30px;
	text-align: center;
`;

export { StyledAlert, StyledAlertMessage };
