'use client';
import React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import {Check} from 'lucide-react';
import styled from 'styled-components';
import {styles} from '@/app/globals';

const StyledCheckbox = styled(CheckboxPrimitive.Root)`
    height: 1rem;
    width: 1rem;
    border-radius: ${styles.values.line};
    border: ${styles.colors.text.default} ${styles.values.border} solid;
    background-color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 200ms ease;

    &[data-state='checked'] {
        background-color: ${styles.colors.text.default};
        color: ${styles.colors.background};
    }

    svg {
        stroke-width: ${styles.values.line};
        pointer-events: none;
        width: 1rem;
        height: 1rem;
        flex-shrink: 0;
    }
`;

const StyledIndicator = styled(CheckboxPrimitive.Indicator)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: currentColor;
`;

const Checkbox: React.FC<React.ComponentProps<typeof CheckboxPrimitive.Root>> = ({...props}) =>
(<StyledCheckbox {...props}><StyledIndicator><Check/></StyledIndicator></StyledCheckbox>);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
export default Checkbox;