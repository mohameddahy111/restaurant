import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Store } from "../context/DataStore";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import {
  AppBar,
  Box,
  List,
  ListItem,
  MenuItem,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import Logo from "../layout/header/components/Logo";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function BookTable() {
  const { bookTable, setBookTable } = Store();

  const handleClose = () => {
    setBookTable(false);
  };

  return (
    <div>
      <Dialog
        open={bookTable}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box sx={{ bgcolor: "#f8f8f8" }}>

        <Toolbar>
          <Logo />
        </Toolbar>
        <DialogTitle>{"Welcome in our Restaurant"}</DialogTitle>
        <DialogContent>
          <form>
            <List>
              <ListItem
                sx={{ display: "flex", justifyContent: "center", gap: 2 }}
              >
                <TextField
                  inputProps={{ type: "text" }}
                  label="Full Name"
                  name="fullName"
                  required
                  size="small"
                />
                <TextField
                  inputProps={{ type: "email" }}
                  label="Email"
                  name="email"
                  required
                  size="small"
                />
                <TextField
                  inputProps={{ type: "tel" }}
                  label="Phone Number"
                  name="phone"
                  required
                  size="small"
                />
              </ListItem>
              <ListItem
                sx={{ display: "flex", justifyContent: "center", gap: 1 }}
              >
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={1}
                >
                  <Typography textTransform={"capitalize"} fontSize={"14px"}>
                    number of Table
                  </Typography>
                  <Select defaultValue={1} size="small">
                    {[...Array(10).keys()].map((x, index) => (
                      <MenuItem key={index} value={x + 1}>
                        {x + 1}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={1}
                >
                  <Typography textTransform={"capitalize"} fontSize={"14px"}>
                    number of adults
                  </Typography>
                  <Select defaultValue={1} size="small">
                    {[...Array(10).keys()].map((x, index) => (
                      <MenuItem key={index} value={x + 1}>
                        {x + 1}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={1}
                >
                  <Typography textTransform={"capitalize"} fontSize={"14px"}>
                    Children
                  </Typography>
                  <Select size="small" defaultValue={0}>
                    {[...Array(11).keys()].map((x, index) => (
                      <MenuItem key={index} value={x}>
                        {x}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker />
                  </DemoContainer>
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["TimePicker"]}>
                    <TimePicker label="time attendance" />
                  </DemoContainer>
                </LocalizationProvider>
              </ListItem>
              <ListItem>
                <TextField variant="filled" label="Notes" fullWidth />
              </ListItem>
            </List>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Booking</Button>
          <Button onClick={handleClose}>cancel</Button>
        </DialogActions>
        </Box>

      </Dialog>
    </div>
  );
}
