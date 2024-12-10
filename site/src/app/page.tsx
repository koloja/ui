'use client';
import React, { useState } from 'react';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Input from '@/components/Input';
import Label from '@/components/Label';
import Checkbox from '@/components/Checkbox';
import Section from '@/components/Section';
import {ChevronRight, Loader2} from 'lucide-react';

const Page: React.FC = () => {
    const [TOS, setTOS] = useState(false);

    return (<Container>

        <Section>

            <Card.Container>
                <Card.Heading>
                    <Card.Title>Login</Card.Title>
                    <Card.Description>Authenticate using your account</Card.Description>
                </Card.Heading>
                <Card.Content>

                    {/* Email input */}
                    <Label htmlFor='email' style={{marginBottom: '.4rem'}}>Email</Label>
                    <Input
                        placeholder='name@examle.domain'
                        spellCheck={false}
                        style={{marginBottom: '.8rem'}} 
                        type='email'
                        id='email'
                    />

                    {/* Password input */}
                    <Label htmlFor='password' style={{marginBottom: '.4rem', display: 'flex', justifyContent: 'space-between'}}><span style={{all: 'inherit'}}>Password</span><a href='#'>Forgot your password?</a></Label>
                    <Input 
                        spellCheck={false}
                        type='password'
                        id='password'
                    />

                </Card.Content>
                <Card.Footer>

                    {/* TOS checkbox */}
                    <div style={{display: 'inherit', gap: '.8rem', alignItems: 'center', marginBottom: '.4rem'}}>
                        <Checkbox id='terms' onClick={() => setTOS(!TOS)}/>
                        <Label htmlFor='terms' style={{marginBottom: '.4rem', height: '1rem'}}>Accept terms and conditions</Label>
                    </div>
                    
                    {/* Login button */}
                    <Button style={{minWidth: '5.1rem'}} variant={TOS ?  'primary' : 'disabled'}>Login</Button>
                </Card.Footer>
            </Card.Container>

        </Section>
    </Container>);

};

export default Page;