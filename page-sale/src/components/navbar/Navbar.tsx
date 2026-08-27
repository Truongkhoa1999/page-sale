import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import AppTypography from "../typography/AppTypography";

// ----------------------------------------------------------------------

const navItems = [
  {
    label: "Tables",
    href: "#tables",
  },
  {
    label: "Chairs",
    href: "#chairs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

// ----------------------------------------------------------------------

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClose = () => {
    setMobileOpen(false);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "background.paper",
        color: "text.primary",
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 64, md: 76 },
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Box
            component="a"
            href="/"
            sx={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
            }}
          >
            <AppTypography
              variant="h6"
              sx={{
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              Page Sale
            </AppTypography>
          </Box>

          {/* Desktop Navigation */}
          <Box
            component="nav"
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: { md: 3, lg: 4 },
            }}
          >
            {navItems.map((item) => (
              <Box
                key={item.label}
                component="a"
                href={item.href}
                sx={{
                  textDecoration: "none",
                  color: "text.primary",
                  display: "flex",
                  alignItems: "center",
                  py: 1,

                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                <AppTypography
                  variant="body2"
                  sx={{
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </AppTypography>
              </Box>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            sx={{
              display: { xs: "flex", md: "none" },
              color: "text.primary",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleClose}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        <Box
          sx={{
            width: { xs: "80vw", sm: 360 },
            height: "100%",
            display: "flex",
            flexDirection: "column",
            p: 3,
          }}
        >
          {/* Drawer Header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 5,
            }}
          >
            <AppTypography
              variant="h6"
              sx={{
                fontWeight: 700,
              }}
            >
              Page Sale
            </AppTypography>

            <IconButton
              onClick={handleClose}
              aria-label="Close navigation menu"
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Mobile Navigation */}
          <Box
            component="nav"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            {navItems.map((item) => (
              <Box
                key={item.label}
                component="a"
                href={item.href}
                onClick={handleClose}
                sx={{
                  textDecoration: "none",
                  color: "text.primary",
                  py: 1.5,
                  px: 1,
                  borderRadius: 1,

                  "&:hover": {
                    backgroundColor: "action.hover",
                    color: "primary.main",
                  },
                }}
              >
                <AppTypography
                  variant="body1"
                  sx={{
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </AppTypography>
              </Box>
            ))}
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}
