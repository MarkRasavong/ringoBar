import { useState } from 'react';
import { AppBar, Container, IconButton, Toolbar, Typography, Box, Menu, MenuItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import PhoneInTalk from '@mui/icons-material/PhoneInTalk';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import styles from '../../styles/NavBar.module.css';

const pages = [
    { title: 'Carta', link: '/carta' },
    { title: 'Galería', link: '/#galeria' },
    { title: 'Horarios', link: '/#horarios' },
    { title: 'Contactar', link: '/#contactar' }
];

const socialMedia = [
    {
        key: 'companyPhone',
        icon: <PhoneInTalk sx={{ color: 'var(--contrast-text)' }} />,
        link: 'tel:+34-624-41-45-18'
    },
    {
        key: 'facebookSocialMediaLink',
        icon: <Facebook sx={{ color: 'var(--contrast-text)' }} />,
        link: 'https://facebook.com/'
    },
    {
        key: 'instagramSocialMediaLink',
        icon: <Instagram sx={{ color: 'var(--contrast-text)' }} />,
        link: 'https://www.instagram.com/ringobar_/'
    }
];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar className={styles.navBarObj}>
            <Container maxWidth='xl'>
                <Toolbar disableGutters={true}>
                    <a href='/' className={styles.navLogo}>RingoBar</a>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-evenly' }}>
                        {pages.map((page) => (
                            <Button
                                key={page.title}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                href={page.link}
                            >
                                <Typography variant="button" sx={{ fontFamily: 'Oleo Script' }}>{page.title}</Typography>
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0.1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', }}>
                        {socialMedia.map((media) =>
                            <IconButton key={`${media.key}`} href={media.link} target="_blank">
                                {media.icon}
                            </IconButton>
                        )}
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
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
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.title} onClick={handleCloseNavMenu} key={`m${page.title}`}>
                                    <a href={page.link} style={{ textDecoration: 'none' }}><Typography textAlign="center">{page.title}</Typography></a>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar >
    )
};

export default Navbar
