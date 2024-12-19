import React from "react";
import {
  Box,
  Button,
  Typography,
  Avatar,
  Grid,
  Divider,
} from "@mui/material";

const Profile = () => {
  return (
    <Box
      sx={{
        p: 3,
        maxWidth: "900px",
        margin: "auto",
       
      }}
    >   
    <Box
    sx={{
      display: "flex",
      justifyContent: "flex-start",
      mb: 3, 
    }}
  >
       <Avatar
              src="https://via.placeholder.com/150"
              alt="Profile Picture"
              sx={{
                width: 80,
                height: 80,
                mr: 2,
              }}
            />
      </Box>
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Box>
          <Button variant="contained" sx={{ mr: 1 }}>
            Profile
          </Button>
          <Button variant="outlined" sx={{ mr: 1 }}>
            Account
          </Button>
          <Button variant="outlined">Plans & Pricing</Button>
        </Box>
      </Box>

      {/* Content Section */}
      <Grid container spacing={3}>
        {/* Left Section: Company Information */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
            Company Information
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer
            is no. If two equally difficult paths, choose the one more painful
            in the short term (pain avoidance is creating an illusion of
            equality).
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Website:</strong> Alec M. Thompson
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Company LinkedIn:</strong> Alec M. Thompson
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Location:</strong> India
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Address:</strong> India
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Industry:</strong> E-commerce
          </Typography>
        </Grid>

        {/* Right Section: Profile Information */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 2,
            }}
          >
           
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Alec M. Thompson
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Full Name:</strong> Alec M. Thompson
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Mobile:</strong> (44) 123 1234 123
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Email:</strong> alecmthompson@mail.com
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Designation:</strong> CTO
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>LinkedIn:</strong> USA
          </Typography>
        </Grid>
      </Grid>

      <Divider sx={{ mt: 3, mb: 3 }} />

      {/* Update Information Button */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            textTransform: "none",
            borderRadius: "20px",
            px: 4,
          }}
        >
          Update Information
        </Button>
      </Box>
    </Box>
  );
};

export default Profile;
