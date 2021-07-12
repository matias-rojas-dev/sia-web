import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: 'light-gray',
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: '',
            },
        },
    },
}))(MenuItem);

const MenuResponsive = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
                <MenuIcon className="icon-white" />
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem>
                    <Link to='/products'>
                        <ListItemText primary="Productos" />
                    </Link>
                </StyledMenuItem>

                <StyledMenuItem>
                    <Link to='/featured'>
                        <ListItemText primary="Destacados" />
                    </Link>
                </StyledMenuItem>

                <StyledMenuItem>
                    <Link to='/about-us'>
                        <ListItemText primary="Nosotros" />

                    </Link>
                </StyledMenuItem>

                <StyledMenuItem>
                    <Link to='/contact'>
                        <ListItemText primary="Contacto" />

                    </Link>
                </StyledMenuItem>
            </StyledMenu>
        </div>
    );
}

export default MenuResponsive;