import React from 'react';
import Container from '@/components/Container';
import Button from '@/components/Button';
import {ChevronRight, Loader2} from 'lucide-react';

const Page: React.FC = () => {

    return (<Container style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <div style={{display: 'flex', gap: '.8rem'}}>
            <Button size='medium' variant='primary'>Primary</Button>
            <Button size='medium' variant='secondary'>Secondary</Button>
            <Button size='medium' variant='destructive'>Destructive</Button>
            <Button size='medium' variant='outline'><ChevronRight/></Button>
            <Button size='medium' variant='ghost'>Ghost</Button>
            <Button size='medium' variant='disabled'>Disabled</Button>
            <Button size='medium' variant='disabled'><Loader2 className='spin'/>Loading</Button>
        </div>
    </Container>);

};

export default Page;