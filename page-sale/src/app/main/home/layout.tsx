// ----------------------------------------------------------------------
"use client";
import Navbar from "@/app/components/navbar/Navbar";
import { ProductCardV2 } from "@/app/components/productCard/productCardV2";
import { mockProductsV1 } from "@/app/data/mockv1";
import { Box } from "@mui/material";

export default function HomeLayout() {
  return (
    <Box sx={{ position: "relative" }}>
      <Navbar />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, minmax(0, 1fr))",
            sm: "repeat(2, minmax(0, 1fr))",
            md: "repeat(3, minmax(0, 1fr))",
            lg: "repeat(4, minmax(0, 1fr))",
          },
          gap: {
            xs: 1.5,
            sm: 2,
            md: 2.5,
          },
          alignItems: "stretch",
          padding: 2,
        }}
      >
        {mockProductsV1.map((item) => (
          <ProductCardV2
            image={item.image}
            title={item.title}
            price={item.price}
            location={item.location}
            chips={item.chips}
          />
        ))}
      </Box>
    </Box>
  );
}
