import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { SidebarContext } from './SidebarContext'; // Adjust the path if needed

const Sidebar = () => {
  const { setSelectedItem } = useContext(SidebarContext); // Access the context to update the selected item

  const handleItemClick = (item) => {
    setSelectedItem(item); // Update the selected item in the context
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        '& .MuiDrawer-paper': {
          width: '200px',
          backgroundColor: '#2c2c2c',
          color: '#fff',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        },
      }}
    >
      <Box>
        {/* Sidebar Header */}
        <Typography
          variant="h6"
          sx={{
            color: '#fff',
            textAlign: 'center',
            padding: '20px 0',
            fontWeight: 'bold',
          }}
        >
          Bargenix
        </Typography>
        <Divider sx={{ backgroundColor: '#444' }} />

        {/* Sidebar Menu List */}
        <List>
          {/* Home */}
          <ListItem
            button
            component={Link}
            to="/"
            onClick={() => handleItemClick('Home')}
            sx={{
              '&:hover': {
                backgroundColor: '#1976d2',
              },
            }}
          >
            <ListItemIcon>
              <HomeIcon sx={{ color: '#fff' }} />
            </ListItemIcon>
            <ListItemText primary="Home" sx={{ color: '#fff' }} />
          </ListItem>

          {/* Inventory */}
          <ListItem
            button
            component={Link}
            to="/inventory"
            onClick={() => handleItemClick('Inventory')}
            sx={{
              '&:hover': {
                backgroundColor: '#1976d2',
              },
            }}
          >
            <ListItemIcon>
              <InventoryIcon sx={{ color: '#fff' }} />
            </ListItemIcon>
            <ListItemText primary="Inventory" sx={{ color: '#fff' }} />
          </ListItem>

          {/* Order */}
          <ListItem
            button
            component={Link}
            to="/order" // Navigate to the Order component
            onClick={() => handleItemClick('Order')}
            sx={{
              '&:hover': {
                backgroundColor: '#1976d2',
              },
            }}
          >
            <ListItemIcon>
              <ShoppingCartIcon sx={{ color: '#fff' }} />
            </ListItemIcon>
            <ListItemText primary="Order" sx={{ color: '#fff' }} />
          </ListItem>

          {/* Settings */}
          <ListItem
            button
            component={Link}
            to="/settings"
            onClick={() => handleItemClick('Settings')}
            sx={{
              '&:hover': {
                backgroundColor: '#1976d2',
              },
            }}
          >
            <ListItemIcon>
              <SettingsIcon sx={{ color: '#fff' }} />
            </ListItemIcon>
            <ListItemText primary="Settings" sx={{ color: '#fff' }} />
          </ListItem>

          {/* Contact */}
          <ListItem
            button
            component={Link}
            to="/contact"
            onClick={() => handleItemClick('Contact')}
            sx={{
              '&:hover': {
                backgroundColor: '#1976d2',
              },
            }}
          >
            <ListItemIcon>
              <ContactSupportIcon sx={{ color: '#fff' }} />
            </ListItemIcon>
            <ListItemText primary="Contact" sx={{ color: '#fff' }} />
          </ListItem>
        </List>
      </Box>

      {/* Footer Section */}
      <Box>
        <Divider sx={{ backgroundColor: '#444' }} />
        <List>
          <ListItem
            button
            onClick={() => handleItemClick('Log Out')}
            sx={{
              '&:hover': {
                backgroundColor: '#1976d2',
              },
            }}
          >
            <ListItemIcon>
              <ExitToAppIcon sx={{ color: '#fff' }} />
            </ListItemIcon>
            <ListItemText primary="Log Out" sx={{ color: '#fff' }} />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;










