import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  InputAdornment,
  TablePagination,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// Sample Data
const orders = [
  { id: "#10421", name: "Antonio Christ", product: "Nike Shirt", category: "Shirt", time: "8:00 am", rate: "+0.3", duration: "23s", price: "$23", status: "ongoing" },
  { id: "#10422", name: "Angelina Jouli", product: "Titan Watch", category: "Accessories", time: "8:00 pm", rate: "+0.7", duration: "27s", price: "$100", status: "halted" },
  { id: "#10423", name: "Darab Ahmed", product: "Adidas Shoes", category: "Footwear", time: "2:00 am", rate: "-0.4", duration: "24s", price: "$40", status: "completed" },
  { id: "#10424", name: "Leonardis", product: "Spoon set", category: "Kitchenware", time: "12:00 pm", rate: "+0.9", duration: "35s", price: "$50", status: "halted" },
  { id: "#10425", name: "Antonio Christ", product: "Nike Shirt", category: "Shirt", time: "12:15 am", rate: "-0.9", duration: "23s", price: "$23", status: "completed" },
  { id: "#10426", name: "Maria Susan", product: "Leather Bag", category: "Accessories", time: "10:00 am", rate: "+0.5", duration: "20s", price: "$70", status: "ongoing" },
  { id: "#10427", name: "David Warner", product: "Puma Cap", category: "Accessories", time: "1:00 pm", rate: "+0.2", duration: "19s", price: "$10", status: "completed" },
  { id: "#10428", name: "John Doe", product: "Kitchen Set", category: "Kitchenware", time: "4:00 pm", rate: "-0.3", duration: "30s", price: "$90", status: "halted" },
];

const summary = [
  { title: "Total Order", value: 281, change: "+55%", color: "green" },
  { title: "Ongoing Orders", value: 30, change: "-65%", color: "red" },
  { title: "Successful", value: 200, change: "+55%", color: "green" },
  { title: "Cancelled", value: 51, change: "+5%", color: "green" },
];

const OrdersTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedOrders = orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

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
      {/* Summary Cards */}
      <Box display="flex" justifyContent="space-between" gap={2} mb={4}>
        {summary.map((item, index) => (
          <Card key={index} sx={{ flex: 1, textAlign: "center", boxShadow: 1 }}>
            <CardContent>
              <Typography variant="h6" color="textSecondary">
                {item.title}
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
                {item.value}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: item.color, fontWeight: "bold" }}
              >
                {item.change} than last week
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Orders Table */}
      <Box>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Orders Table
        </Typography>

        {/* Search Bar */}
        <Box display="flex" justifyContent="flex-end" mb={2}>
          <TextField
            placeholder="Search here"
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Table */}
        <TableContainer
          component={Paper}
          sx={{
            width: "100%", // Ensure it doesn't overflow
            overflowX: "hidden",
          }}
        >
          <Table sx={{ tableLayout: "fixed", width: "100%" }}>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Customer Name</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Start at</TableCell>
                <TableCell>Conversion Rate</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedOrders.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.product}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.time}</TableCell>
                  <TableCell
                    sx={{
                      color: row.rate.startsWith("-") ? "red" : "green",
                      fontWeight: "bold",
                    }}
                  >
                    {row.rate}
                  </TableCell>
                  <TableCell>{row.duration}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell
                    sx={{
                      color:
                        row.status === "completed"
                          ? "green"
                          : row.status === "halted"
                          ? "red"
                          : "orange",
                      fontWeight: "bold",
                    }}
                  >
                    {row.status}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <Box mt={2} display="flex" justifyContent="space-between">
          <Typography variant="body2">
            Showing {page * rowsPerPage + 1} to{" "}
            {Math.min((page + 1) * rowsPerPage, orders.length)} of {orders.length} entries
          </Typography>
          <TablePagination
            component="div"
            count={orders.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 20]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default OrdersTable;
