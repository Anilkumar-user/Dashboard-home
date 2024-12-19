import React from "react";
import { Box, Card, CardContent, Typography, Button, } from "@mui/material";
import Profile from "../Settings/Cards/Profile";
import Account from "../Settings/Cards/Account"; 
import PricingAndPlans from "./Cards/PricingAndPlans"; // Import your Pricing component

const Settings = () => {
  return (
    <Box
    sx={{
        padding: '20px 42px', // Adds space on left and right
        margin: 0,
        marginTop: '64px',
        marginLeft: '191px', // Sidebar width adjustment
        backgroundColor: '#F5F6FA',
        minHeight: '100vh',
        boxSizing: 'border-box',
        overflow: 'hidden', // Completely removes scrollbars
        width: 'calc(101vw - 229px)', // Adjust for sidebar and padding
      }}
    >

      {/* Profile Card */}
      <Card sx={{ mb: 4, boxShadow: 3, borderRadius: 3 }}>
        <CardContent>
          <Profile />
        </CardContent>
      </Card>

      {/* Account Settings Card */}
      <Card sx={{ mb: 4, boxShadow: 3, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold" }}>
            Account Settings
          </Typography>
          <Account />
        </CardContent>
      </Card>

      {/* Plans and Pricing Card */}
      <Card sx={{ mb: 4, boxShadow: 3, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold" }}>
            Plans & Pricing
          </Typography>
          <PricingAndPlans />
        </CardContent>
      </Card>
      <Card >
        {/* Delete Subscription Section */}
      <Box>
        <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: "bold" }}>
          Delete Subscription
        </Typography>
        <Typography variant="body2" sx={{ mb: 3, color: "#6c757d" }}>
          Once you delete your account, there is no going back. Please be
          certain.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
          <Button
            variant="outlined"
            color="warning"
            sx={{
              textTransform: "none",
              borderRadius: "20px",
              px: 3,
            }}
          >
            Deactivate
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{
              textTransform: "none",
              borderRadius: "20px",
              px: 3,
            }}
          >
            Delete Account
          </Button>
        </Box>
      </Box>
      </Card>
    </Box>
  );
};

export default Settings;
