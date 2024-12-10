'use client';
import styled from 'styled-components';

const Section = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    padding: 2rem;
    background-size: cover;
    background-position: center;
    @media (max-width: 768px) {
        padding: 1.5rem;
        flex-direction: column;
    }
`;

export default Section;