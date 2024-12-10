'use client';
import styled from 'styled-components';
import {styles} from '@/app/globals';

const Input = styled.input<{ className?: string }>`
    flex: 1;
    height: 2.4rem;
    width: 100%;
    border-radius: ${styles.values.radius};
    border: ${styles.colors.border} ${styles.values.border} solid;
    background-color: inherit;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    color: ${styles.colors.text.default};

    &::placeholder {color: ${styles.colors.text.muted}}
    @media (min-width: 768px) {font-size: 0.875rem}
`;

export default Input;