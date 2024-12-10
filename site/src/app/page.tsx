'use client';
import React from 'react';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Input from '@/components/Input';
import Label from '@/components/Label';
import Checkbox from '@/components/Checkbox';
import Section from '@/components/Section';
import {ChevronRight, Loader2} from 'lucide-react';

const Page: React.FC = () => {
    return (<Container>

        <Section>

            <Card.Container>
                <Card.Heading>
                    <Card.Title>Login</Card.Title>
                    <Card.Description>Authenticate using your account</Card.Description>
                </Card.Heading>
                <Card.Content>
                    <Label style={{marginBottom: '.4rem'}}>Email</Label>
                    <Input placeholder='name@examle.domain' spellCheck={false} style={{marginBottom: '.8rem'}} type='email'/>

                    <Label style={{marginBottom: '.4rem', display: 'flex', justifyContent: 'space-between'}}><span style={{all: 'inherit'}}>Password</span><a>Forgot your password?</a></Label>
                    <Input spellCheck={false} type='password'/>
                </Card.Content>
                <Card.Footer>
                    <div style={{display: 'inherit', gap: '.8rem', alignItems: 'center', marginBottom: '.4rem'}}>
                        <Checkbox id='terms'/>
                        <Label style={{marginBottom: '.4rem', height: '1rem'}}>Accept terms and conditions</Label>
                    </div>
                    <Button style={{minWidth: '5.1rem'}} variant='disabled'>Login</Button>
                </Card.Footer>
            </Card.Container>

        </Section>
    </Container>);

};

export default Page;