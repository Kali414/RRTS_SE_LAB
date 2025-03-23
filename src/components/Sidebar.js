import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Assignment as AssignmentIcon,
  CheckCircle as CheckCircleIcon,
  HourglassEmpty as HourglassEmptyIcon,
  PendingActions as PendingActionsIcon,
  Person as PersonIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import LogoutModal from './LogoutModal';

const drawerWidth = 240;



function Sidebar({ open }) {
  const navigate = useNavigate();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const menuItems = [
    { text: 'All Requests', icon: <AssignmentIcon />, path: '/all-requests' },
    { text: 'Completed Requests', icon: <CheckCircleIcon />, path: '/completed-requests' },
    { text: 'Pending Requests', icon: <PendingActionsIcon />, path: '/pending-requests' },  // ✅ New Item
    { text: 'In Progress', icon: <HourglassEmptyIcon />, path: '/in-progress' },  // ✅ New Item
    { text: 'Profile', icon: <PersonIcon />, path: '/profile' },
  ];

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logging out...');
    setIsLogoutModalOpen(false);
    // Add navigation to login page or other logout logic
  };

  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            marginTop: '64px', // Move below navbar
            height: 'calc(100% - 64px)',
            paddingTop: '20px', // Move menu items down
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <List sx={{ paddingTop: 2 }}> {/* Moves all items downward */}
          {menuItems.map((item, index) => (
            <ListItem button key={item.text} onClick={() => navigate(item.path)} sx={{ mb: 2 }}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
          <ListItem 
            button 
            onClick={() => setIsLogoutModalOpen(true)}
            sx={{ 
              marginTop: 'auto',  // This will push it to the bottom
              '&:hover': {
                backgroundColor: '#f1f5f9'
              }
            }}
          >
            <ListItemIcon>
              <LogoutIcon sx={{ color: '#ef4444' }} />
            </ListItemIcon>
            <ListItemText 
              primary="Logout" 
              sx={{ 
                color: '#ef4444',
                '& .MuiTypography-root': {
                  fontWeight: 500
                }
              }} 
            />
          </ListItem>
        </List>
      </Drawer>

      <LogoutModal 
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onLogout={handleLogout}
      />
    </>
  );
}

export default Sidebar;
