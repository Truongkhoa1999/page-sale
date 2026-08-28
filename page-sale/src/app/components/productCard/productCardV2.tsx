"use client";

import { Icon } from "@iconify/react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  ChipProps,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

// ----------------------------------------------------------------------

type ProductCardProps = {
  image: string;
  title?: string;
  price: string;
  location?: string;
  category?: string;

  chips?: {
    title: string;
    color?: ChipProps["color"];
    icon?: string;
  }[];
};

// ----------------------------------------------------------------------

export function ProductCardV2({
  image,
  title,
  price,
  location,
  chips = [],
}: ProductCardProps) {
  const theme = useTheme();

  const badge = chips[0];

  return (
    <Card
      elevation={0}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",

        borderRadius: {
          xs: 2,
          sm: 2.5,
        },

        overflow: "hidden",

        backgroundColor: theme.palette.background.paper,

        border: `1px solid ${theme.palette.divider}`,

        transition: "transform 180ms ease, box-shadow 180ms ease",

        "&:hover": {
          transform: {
            xs: "none",
            sm: "translateY(-2px)",
          },

          boxShadow: {
            xs: "none",
            sm: theme.shadows[4],
          },
        },
      }}
    >
      {/* ---------------------------------------------------------------- */}
      {/* Product image */}
      {/* ---------------------------------------------------------------- */}

      <Box
        sx={{
          position: "relative",
          width: "100%",

          // Square on mobile, landscape on desktop.
          aspectRatio: {
            xs: "1 / 1",
            sm: "4 / 3",
          },

          overflow: "hidden",

          backgroundColor: theme.palette.grey[100],
        }}
      >
        <Box
          component="img"
          src={image}
          alt={title || "Product"}
          loading="lazy"
          sx={{
            width: "100%",
            height: "100%",
            display: "block",

            objectFit: "cover",

            transition: "transform 300ms ease",

            ".MuiCard-root:hover &": {
              transform: {
                xs: "none",
                sm: "scale(1.025)",
              },
            },
          }}
        />

        {/* Product badge */}
        {badge ? (
          <Chip
            label={badge.title}
            size="small"
            color={badge.color}
            icon={
              badge.icon ? (
                <Icon icon={badge.icon} width={14} height={14} />
              ) : undefined
            }
            sx={{
              position: "absolute",

              top: {
                xs: 8,
                sm: 10,
              },

              left: {
                xs: 8,
                sm: 10,
              },

              height: {
                xs: 24,
                sm: 26,
              },

              fontSize: {
                xs: "0.7rem",
                sm: "0.75rem",
              },

              fontWeight: 600,

              backgroundColor:
                badge.color === "success"
                  ? theme.palette.success.light
                  : undefined,

              border: "1px solid",
              borderColor:
                badge.color === "success"
                  ? theme.palette.success.main
                  : theme.palette.divider,

              "& .MuiChip-icon": {
                marginLeft: 0.75,
              },
            }}
          />
        ) : null}
      </Box>

      {/* ---------------------------------------------------------------- */}
      {/* Product information */}
      {/* ---------------------------------------------------------------- */}

      <CardContent
        sx={{
          flex: 1,

          display: "flex",
          flexDirection: "column",

          p: {
            xs: 1.5,
            sm: 2,
          },

          "&:last-child": {
            pb: {
              xs: 1.5,
              sm: 2,
            },
          },
        }}
      >
        {/* Title */}

        <Typography
          variant="body1"
          fontWeight={600}
          color="text.primary"
          sx={{
            lineHeight: 1.4,

            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",

            wordBreak: "break-word",
          }}
        >
          {title || "Untitled product"}
        </Typography>

        {/* Price */}

        <Typography
          variant="h6"
          fontWeight={700}
          color="success.main"
          sx={{
            mt: {
              xs: 0.75,
              sm: 1,
            },

            fontSize: {
              xs: "1rem",
              sm: "1.1rem",
            },

            lineHeight: 1.3,
          }}
        >
          {price}
        </Typography>

        {/* Location */}

        {location ? (
          <Stack
            direction="row"
            alignItems="center"
            spacing={0.5}
            sx={{
              mt: {
                xs: 1,
                sm: 1.25,
              },

              minWidth: 0,
            }}
          >
            <Icon
              icon="solar:map-point-outline"
              width={15}
              height={15}
              color={theme.palette.text.secondary}
            />

            <Typography
              variant="caption"
              color="text.secondary"
              noWrap
              sx={{
                minWidth: 0,
              }}
            >
              {location}
            </Typography>
          </Stack>
        ) : null}
      </CardContent>
    </Card>
  );
}
