import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';


const title = 'Store By Daylight';

const HeaderNav = () => {
    return (
        <AppBar color="primary" position='static'>
            <Toolbar>
                    <Typography noWrap variant="h6" sx={{ display: 'flex', flexGrow: 1, fontFamily: "monospace", fontWeight: 500, letterSpacing: '.1rem'}}>
                        <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
                            {title}
                        </Link>
                    </Typography>
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