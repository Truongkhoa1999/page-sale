// ----------------------------------------------------------------------
"use client";
import Navbar from "@/components/navbar/Navbar";
import { Box } from "@mui/material";

export default function HomeLayout() {
  return (
    <Box sx={{ position: "relative" }}>
      <Navbar />
    </Box>
  );
}
