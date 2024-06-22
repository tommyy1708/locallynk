import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Home() {
    return (
        <Container maxWidth="sm">
            <Typography variant="h2" component="h1" gutterBottom>
                Welcome to LocalLynk
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
                {'Start building your platform!'}
            </Typography>
            <Typography variant="body1">Your multi-functional information platform for local services.</Typography>
        </Container>
    );
}
