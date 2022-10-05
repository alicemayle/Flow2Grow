import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import logo from '../images/flow2grow_small.png';
import ChangeLang from './ChangeLang';
import { Menu, MenuItem, Toolbar } from '@mui/material';
class AppBarMenu extends Component {
    state = {
        anchorElNav: null,
        pageSelected: 0
    }
    handleOpenNavMenu = (event) => {
        this.setState({
            anchorElNav: event.currentTarget
        });
    };
    handleCloseNavMenu = () => {
        this.setState({
            anchorElNav: null
        })
      };
    handleChangePage = (page) => {
        const { changePage } = this.props;
        this.setState({
            pageSelected: page
        });

        this.handleCloseNavMenu();
        changePage(page);
    };
    render() {
        const pages = [
            { title: 'Home', number: 0 },
            { title: 'About', number: 1 }, 
            { title: 'Personal', number: 2 }, 
            { title: 'Business', number: 3 },
            { title: 'Contact', number: 4 }
        ];
        const { changePage, t } = this.props;
        const { anchorElNav, pageSelected } = this.state;
    return (
        <AppBar color='bar' className='app-bar-menu' >
            <Toolbar>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'space-between', marginLeft: '100px', marginRight: '130px' } }}>
                <img src={logo} alt="Logo" className='g-m-15 g-mr-8 app-bar-logo' onClick={() => changePage(0)}/>
                {pages.map((page) => (
                    <Button
                        style={{fontFamily: 'Raleway'}}
                        key={page.number}
                        onClick={() => changePage(page.number)}
                        sx={{ my: 2, display: 'block' }}
                        >
                        {t(page.title)}
                    </Button>
                ))}
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                onClick={this.handleOpenNavMenu}
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={this.handleCloseNavMenu}
                    sx={{ display: { xs: 'block', md: 'none' }}}
                    >
                    {pages.map((page) => (
                        <MenuItem key={page.number}
                            selected={page.number === pageSelected}
                            onClick={() => this.handleChangePage(page.number)}>
                            <Typography textAlign="center" fontFamily={'Raleway'}>{t(page.title)}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
                <img src={logo} alt="Logo" height={50} className='g-m-15 g-mr-8' onClick={() => changePage(0)} />
            </Box>
            <ChangeLang t={t} />
                    {/* <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{marginLeft: 10}}>
                            {t("LogIn")}
                        </Typography>
                    </IconButton> */}
                </Toolbar>
            </AppBar>
    );
    }
}

export default AppBarMenu;