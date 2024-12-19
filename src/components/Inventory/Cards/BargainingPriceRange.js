


import React, { useState } from "react";
import {
    Box,
    Grid,
    Card,
    Typography,
    TextField,
    Slider,
    Switch,
    FormControlLabel,
    ToggleButton,
    ToggleButtonGroup,
    Button,
    Divider,
    MenuItem
} from "@mui/material";

const BargainingPriceRange = () => {
    const [bargaining, setBargaining] = useState("Normal");
    const [priceRange, setPriceRange] = useState([200, 500]);
    const [minPrice, setMinPrice] = useState(200);
    const [setForAll, setSetForAll] = useState(true);
    const [percentage] = useState({ increase: "+2.7%", decrease: "-2.7%" });

    // Price Slider Update
    const handlePriceChange = (event, newValue) => {
        setPriceRange(newValue);
    };

    const handleBargainingChange = (event, newBargaining) => {
        if (newBargaining !== null) setBargaining(newBargaining);
    };

    const handleSwitchChange = () => {
        setSetForAll(!setForAll);
    };

    return (
        <Grid item xs={12}>
            <Box mt={4} display="flex" justifyContent="center">
                <Card
                    sx={{
                        width: "100%",
                        maxWidth: "900px",
                        padding: "20px",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    {/* Header Section */}
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={6}>
                            <Typography variant="h6" fontWeight="bold">
                                For all the products
                            </Typography>
                            <Typography variant="subtitle2" color="#344767">
                                Set the minimum and maximum values for all the products.
                            </Typography>
                        </Grid>
                        <Grid item xs={6} textAlign="right">
                            <Typography variant="h6" fontWeight="bold">
                                Bargaining behaviour
                            </Typography>
                            <ToggleButtonGroup
                                value={bargaining}
                                exclusive
                                onChange={handleBargainingChange}
                                sx={{
                                    mt: 1,
                                    gap: 2, // Adds space between buttons
                                    "& .MuiToggleButton-root": {
                                        borderRadius: "20px",
                                        textTransform: "none",
                                        padding: "6px 16px",
                                        fontSize: "0.875rem",
                                        "&.Mui-selected": {
                                            backgroundColor: "#000",
                                            color: "#fff",
                                        },
                                    },
                                }}
                            >
                                <ToggleButton value="Low">Low</ToggleButton>
                                <ToggleButton value="Normal">Normal</ToggleButton>
                                <ToggleButton value="High">High</ToggleButton>
                            </ToggleButtonGroup>
                        </Grid>
                    </Grid>

                    <Divider sx={{ my: 2 }} />

                    {/* Min Price and Max Price */}
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                label="Set the min price of the product"
                                type="number"
                                fullWidth
                                value={minPrice}
                                onChange={(e) => setMinPrice(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Changing max price is unavailable right now"
                                disabled
                                fullWidth
                            />
                        </Grid>
                    </Grid>

                    <Box
                        display="flex"
                        justifyContent="flex-start"
                        gap={4}  // Adjust the gap value as needed
                        mt={2}
                        alignItems="center"
                    >
                        {/* Increase percentage */}
                        <Typography sx={{ color: "green", fontWeight: "bold" }}>
                            {` ${percentage.increase}`}
                        </Typography>

                        {/* Decrease percentage */}
                        <Typography sx={{ color: "red", fontWeight: "bold" }}>
                            {` ${percentage.decrease}`}
                        </Typography>
                    </Box>
                    <Divider sx={{ my: 2 }} />

                    {/* Product Count and Slider */}
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={setForAll}
                                        onChange={handleSwitchChange}
                                    />
                                }
                                label="Set for all products"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                select
                                fullWidth
                                label="Select products up to"
                                defaultValue={100}
                                disabled={!setForAll}
                            >
                                {[10, 50, 100, 200].map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                    </Grid>

                    <Box mt={4}>
                        <Typography variant="body1" fontWeight="bold">
                            Select products priced between
                        </Typography>
                        <Slider
                            value={priceRange}
                            onChange={handlePriceChange}
                            valueLabelDisplay="auto"
                            min={0}
                            max={1000}
                            sx={{ color: "#ff1744", mt: 2 }}
                        />
                        <Box display="flex" justifyContent="space-between">
                            <Typography>{priceRange[0]}</Typography>
                            <Typography>{priceRange[1]}</Typography>
                        </Box>
                    </Box>

                    {/* Save Button */}
                    <Box display="flex" justifyContent="flex-end" mt={3}>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "#000",
                                color: "#fff",
                                textTransform: "none",
                                "&:hover": { backgroundColor: "#333" },
                            }}
                        >
                            Save
                        </Button>
                    </Box>
                </Card>
            </Box>
        </Grid>
    );
};

export default BargainingPriceRange;


