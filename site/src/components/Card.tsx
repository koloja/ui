'use client';
import styled from 'styled-components';
import {styles} from '@/app/globals';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 21rem;
    min-height: 25rem;
    background-color: inherit;
    border: ${styles.colors.border} ${styles.values.border} solid;
    border-radius: ${styles.values.radius};
    box-shadow: ${styles.shadows.light};
    overflow: hidden;
    padding: 1.5rem;
`;

const Heading = styled.section`
    display: flex;
    flex-direction: column;
`;

const Content = styled.section`
    display: flex;
    flex-direction: column;
    margin-bottom: auto;
    padding: 1.5rem 0;
`;

const Footer = styled.section`
    display: flex;
    flex-direction: column;
    gap: .8rem;
`;

const Title = styled.h4`
    color: ${styles.colors.text.default};
`;

const Description = styled.small`
    color: ${styles.colors.text.muted};
`;


Container.displayName = 'CardContainer';
Heading.displayName = 'CardHeading';
Content.displayName = 'CardContent';
Footer.displayName = 'CardFooter';
Title.displayName = 'CardTitle';
Description.displayName = 'CardDescription';
export default {Container, Heading, Content, Footer, Title, Description};