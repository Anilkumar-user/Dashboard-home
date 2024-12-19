import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Divider,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Account = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Box
      sx={{
        p: 4,
        maxWidth: "600px",
        margin: "auto",
      
      }}
    >
      {/* Title */}
      <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold" }}>
        Account Settings
      </Typography>

      {/* Change Password Section */}
      <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: "bold" }}>
        Change Password
      </Typography>

      {/* Current Password Field */}
      <TextField
        fullWidth
        label="Current password"
        type={showPassword ? "text" : "password"}
        variant="outlined"
        sx={{ mb: 2 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleTogglePasswordVisibility}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {/* New Password Field */}
      <TextField
        fullWidth
        label="New password"
        type={showPassword ? "text" : "password"}
        variant="outlined"
        sx={{ mb: 2 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleTogglePasswordVisibility}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {/* Confirm Password Field */}
      <TextField
        fullWidth
        label="Confirm New password"
        type={showConfirmPassword ? "text" : "password"}
        variant="outlined"
        sx={{ mb: 2 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleToggleConfirmPasswordVisibility}>
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {/* Forgot Password Link */}
      <Typography
        variant="body2"
        sx={{
          textAlign: "right",
          color: "primary.main",
          mb: 3,
          cursor: "pointer",
        }}
      >
        Forgot the password?
      </Typography>

      {/* Password Requirements */}
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: "bold", mb: 1 }}
      >
        Password requirements
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Please follow this guide for a strong password:
      </Typography>
      <ul style={{ margin: "0 0 24px 16px", padding: 0 }}>
        <li>One special character</li>
        <li>Min 6 characters</li>
        <li>One number (2 are recommended)</li>
        <li>Change it often</li>
      </ul>

      <Divider sx={{ mb: 3 }} />

      {/* Update Password Button */}
      <Box sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ textTransform: "none", borderRadius: "20px", px: 4 }}
        >
          Update Password
        </Button>
      </Box>
    </Box>
  );
};

export default Account;
