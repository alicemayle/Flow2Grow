import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import logo from '../images/flow2grow_small.png'; 

class AppBarMenu extends Component {
    render() {
        const pages = [
            { title: 'Home', number: 0 },
            { title: 'About', number: 1 }, 
            { title: 'Personal', number: 2 }, 
            { title: 'Business', number: 3 },
            { title: 'Contact', number: 4 }
        ];
        const { changePage } = this.props;
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar color='info' position='static' style={{width: '100%'}}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <img src={logo} alt="Logo" height={50} className='g-m-15 g-mr-8' />
                        {pages.map((page) => (
                            <Button
                                key={page.number}
                                onClick={() => changePage(page.number)}
                                sx={{ my: 2, color: '#007136', display: 'block'}}
                            >
                                {page.title}
                            </Button>
                        ))}
                    </Box>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{marginLeft: 10}}>
                            Log In
                        </Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
    }
}

export default AppBarMenu;