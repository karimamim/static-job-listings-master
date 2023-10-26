import styled from "styled-components";

import React from "react";

function InfoWrapper(props) {
	const Div = styled.div`
		display: flex;
	`;
	return <Div>{props.children}</Div>;
}

export default InfoWrapper;
