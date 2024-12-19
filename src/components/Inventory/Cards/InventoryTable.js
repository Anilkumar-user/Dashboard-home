import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Select,
    MenuItem,
    Pagination,
    TextField,
    Button,
} from '@mui/material';

const InventoryTable = () => {
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [minPrices, setMinPrices] = useState({}); // State to hold min prices for each product

    const data = Array.from({ length: 12 }, (_, index) => ({
        id: `#1042${index + 1}`,
        price: "$140.69",
        status: index % 2 === 0 ? "Active" : "Inactive",
        category: "Shirts",
        product: "Nike Sport V2",
        behavior: index % 3 === 0 ? "Low" : index % 3 === 1 ? "High" : "Normal",
    }));

    const totalPages = Math.ceil(data.length / entriesPerPage);
    const startIndex = (currentPage - 1) * entriesPerPage;
    const currentData = data.slice(startIndex, startIndex + entriesPerPage);

    // Function to handle min price input
    const handleSetMinPrice = (id) => {
        const newPrice = prompt(`Set minimum price for ${id}:`);
        if (newPrice && !isNaN(newPrice)) {
            setMinPrices((prev) => ({ ...prev, [id]: `$${parseFloat(newPrice).toFixed(2)}` }));
        }
    };

    return (
        <Paper className="p-4">
            <div className="flex justify-end items-center gap-12 mb-4">
                <TextField
                    select
                    label="Entries per page"
                    value={entriesPerPage}
                    onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                    size="small"
                    variant="outlined"
                    style={{ width: 150 }}
                >
                    {[5, 10, 15].map((num) => (
                        <MenuItem key={num} value={num}>{num}</MenuItem>
                    ))}
                </TextField>

                <TextField
                    label="Search here"
                    variant="outlined"
                    size="small"
                    style={{ width: 300 }}
                    className="ml-auto"
                />
            </div>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Default Price</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Product</TableCell>
                            <TableCell>Behavior</TableCell>
                            <TableCell>Set Min Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentData.map((item, idx) => (
                            <TableRow key={idx}>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.price}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="outlined"
                                        color={item.status === "Active" ? "success" : "error"}
                                        size="small"
                                    >
                                        {item.status}
                                    </Button>
                                </TableCell>
                                <TableCell>{item.category}</TableCell>
                                <TableCell>{item.product}</TableCell>
                                <TableCell>
                                    <Select
                                        value={item.behavior}
                                        size="small"
                                        variant="outlined"
                                        style={{ width: 120 }}
                                    >
                                        {[{ label: "Low", value: "Low" },
                                          { label: "High", value: "High" },
                                          { label: "Normal", value: "Normal" },
                                        ].map((opt) => (
                                            <MenuItem key={opt.value} value={opt.value}>
                                                {opt.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </TableCell>
                                <TableCell>
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        onClick={() => handleSetMinPrice(item.id)}
                                    >
                                        {minPrices[item.id] || "Set min price"}
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <div className="flex justify-between items-center mt-4">
                <span className="text-gray-600">{`Showing ${startIndex + 1} to ${Math.min(
                    startIndex + entriesPerPage,
                    data.length
                )} of ${data.length} entries`}</span>

                <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={(e, value) => setCurrentPage(value)}
                    color="primary"
                />
            </div>
        </Paper>
    );
};

export default InventoryTable;

