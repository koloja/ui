'use client';
import styled from 'styled-components';
import {styles} from '@/app/globals';
import darken from '@/lib/darken';

const Input = styled.input`
    flex: 1;
    height: 2.4rem;
    width: 100%;
    border-radius: ${styles.values.radius};
    border: ${styles.colors.border} ${styles.values.border} solid;
    background-color: inherit;
    padding: 0.5rem 0.75rem;
    font-size: .88rem;
    color: ${styles.colors.text.default};
    transition: background-color 200ms ease;

    &::placeholder {color: ${styles.colors.text.muted}}
    &:hover, &:focus {background-color: ${darken(styles.colors.muted, 50)}}
`;

export default Input;