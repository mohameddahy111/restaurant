import { SendOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  List,
  ListItem,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import React from "react";
import { Store } from "../../context/DataStore";

const ContactMoodel = () => {
  const { setBookTable } = Store();
  const userInfo = {
    name: "",
    email: "",
    message: "",
  };
  const handleChange = (e) => {
    userInfo[e.target.name] = e.target.value;
  };
  return (
    <Box maxWidth={"100%"} width={"800px"} margin={"auto"} p={2}>
      <form>
        <List>
          <ListItem sx={{ display: "flex ", gap: "10px" }}>
            <TextField
              name="name"
              inputProps={{ type: "text" }}
              label="Full Name"
              size="small"
              onChange={(e) => handleChange(e)}
              fullWidth
            />
            <TextField
              name="email"
              inputProps={{ type: "email" }}
              label="Email"
              size="small"
              onChange={(e) => handleChange(e)}
              fullWidth
            />
          </ListItem>
          <ListItem>
            <TextareaAutosize
              style={{ padding: "10px" }}
              placeholder="Massage"
              label="Massage"
              cols={100}
              minRows={8}
              name="message"
              onChange={(e) => handleChange(e)}
            />
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              justifyContent: "space-between",
              px: "20px",
            }}
          >
            <Button variant="contained" endIcon={<SendOutlined />}>
              Send
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => 
                setBookTable(true)
              }
            >
              Book a table now
            </Button>
          </ListItem>
        </List>
      </form>
    </Box>
  );
};

export default ContactMoodel;
