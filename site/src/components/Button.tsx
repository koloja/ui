'use client';
import styled, {css} from 'styled-components';
import {styles} from '@/app/globals';
import darken from '@/lib/darken';

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'disabled';
    size?: 'small' | 'medium' | 'large';
};

const variants: {[key in Exclude<ButtonProps['variant'], undefined>]: ReturnType<typeof css>} = {
    primary: css`
        background-color: ${styles.colors.text.default};
        color: ${styles.colors.background};
        &:hover {background-color: ${darken(styles.colors.text.default, 10)}}
    `,
    secondary: css`
        background-color: ${styles.colors.muted};
        color: ${styles.colors.text.default};
        &:hover {background-color: ${darken(styles.colors.muted, 10)}}
    `,
    destructive: css`
        background-color: ${styles.colors.destructive};
        color: ${styles.colors.text.default};
        &:hover {background-color: ${darken(styles.colors.destructive, 10)}}
    `,
    outline: css`
        background-color: inherit;
        color: ${styles.colors.text.default};
        border-color: ${styles.colors.border};
        &:hover {background-color: ${styles.colors.muted}}
    `,
    ghost: css`
        background-color: inherit;
        color: ${styles.colors.text.default};
        &:hover {background-color: ${styles.colors.muted}}
    `,
    disabled: css`
        background-color: ${darken(styles.colors.text.default, 50)};
        color: ${darken(styles.colors.background, 50)};
        cursor: default;
    `
};

const sizes: {[key in Exclude<ButtonProps['size'], undefined>]: ReturnType<typeof css>} = {
    small: css`
        height: 1.4rem;
        padding: 0 .13rem;
    `,
    medium: css`
        height: 2.4rem;
        padding: 0 .64rem;
    `,
    large: css`
        height: 2.8rem;
        padding: 0 .82rem;
    `,
};

const Button = styled.button<ButtonProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    white-space: nowrap;
    border-radius: ${styles.values.radius};
    border: transparent ${styles.values.border} solid;
    font-size: .88rem;
    transition: all 200ms ease;

    svg {
        stroke-width: ${styles.values.line};
        pointer-events: none;
        width: 1rem;
        height: 1rem;
        flex-shrink: 0;
    }

    ${(props) => variants[props.variant || 'primary']};
    ${(props) => sizes[props.size || 'medium']};
`;
Button.displayName = 'Button';

export default Button;