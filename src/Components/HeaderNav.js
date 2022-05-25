import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const pages = ['Survivors', 'Killers'];
const title = 'Store By Daylight';

const HeaderNav = () => {
    return (
        <AppBar color="primary" position='static'>
            <Toolbar>
                <Typography noWrap variant="h6" component="a" sx={{ display: 'flex', flexGrow: 1, fontFamily: "monospace", fontWeight: 500, letterSpacing: '.1rem' }}>
                    {title}
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                    <Button
                    key={page}
                    sx={{ my: 2, color: 'white', display: 'block' }}>
                        {page}
                    </Button>
                    ))}
                </Box>
                <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, mr: 4 }}>
                    <ShoppingCartIcon/>
                </Box>
                <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, mr: 2 }}>
                    <AccountCircleIcon/>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default HeaderNav;