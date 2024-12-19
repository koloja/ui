import React from 'react';
import {styled} from 'styled-system/jsx';

const Span = styled.span`
    color: red;
    font-size: 1rem;
`;

const Page: React.FC = () => {
    return (<Span>page</Span>);
};
export default Page;