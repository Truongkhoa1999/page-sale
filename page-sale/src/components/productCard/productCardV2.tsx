"use client";

import { Icon } from "@iconify/react";
import {
  Card,
  CardContent,
  Typography,
  Stack,
  Box,
  useTheme,
  // Button,
  Chip,
  ChipProps,
} from "@mui/material";
import { useMediaQuery } from "@mui/system";

// ----------------------------------------------------------------------
const NUMBERCHIPS = 3;

type ProductCardProps = {
  image: string;
  title?: string;
  description: string;
  price: string;
  category?: string;
  chips: {
    title: string;
    color?: ChipProps["color"];
    icon?: string;
  }[];
};

// ----------------------------------------------------------------------

export function ProductCardV2({
  image,
  title,
  description,
  price,
  chips,
}: ProductCardProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const CTA_HEIGHT = isMobile ? 36 : 40;

  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: { xs: 3, md: "41px" },
        color: theme.palette.primary.main,
        display: "flex",
        flexDirection: "column",
        overflow: "visible",
        width: "100%",
        minHeight: theme.spacing(40),
        height: { xs: theme.spacing(46), md: theme.spacing(58) },
        margin: 0,

        /* 🔥 LIQUID GLASS */
        backgroundImage: `
  linear-gradient(
    180deg,
    rgba(255,255,255,0.45),
    rgba(255,255,255,0.18)
  ),
  url('/noise.png')
`,
        background: `
      linear-gradient(
        180deg,
        rgba(255,255,255,0.45),
        rgba(255,255,255,0.18)
      )
    `,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.35)",
        boxShadow: `
      0 8px 32px rgba(0,0,0,0.18),
      inset 0 1px 0 rgba(255,255,255,0.35)
    `,
      }}
    >
      <Box
        sx={{
          borderRadius: "inherit",
          width: "100%",
          height: "100%",
        }}
      >
        {/* Image */}
        <Box
          sx={{
            position: "relative",
            top: {
              xs: theme.spacing(-9),
              sm: theme.spacing(-10),
              md: theme.spacing(-14),
            },
            mb: {
              xs: theme.spacing(-10),
              sm: theme.spacing(-12),
              md: theme.spacing(-14),
            },
            zIndex: 2,
          }}
        >
          <Box
            component="img"
            src={image}
            alt={title}
            sx={{
              // width: { xs: theme.spacing(15), md: theme.spacing(20) },
              width: {
                xs: theme.spacing(18),
                sm: theme.spacing(22),
                md: theme.spacing(26),
              },
              height: "auto",
              objectFit: "contain",
              mx: "auto",
              display: "block",
            }}
          />
        </Box>

        {/* Content */}
        <CardContent
          sx={{ paddingBottom: 6, paddingTop: 2, px: { xs: 2, md: 6 } }}
        >
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{
              mb: 1,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {title}
          </Typography>

          <Stack
            sx={{
              flexDirection: "row",
              flexWrap: "wrap",
              // maxHeight: theme.spacing(15),
              maxHeight: 52,
              overflow: "hidden",
              gap: 0.5,
              marginBottom: 2,
            }}
          >
            {chips.slice(0, NUMBERCHIPS).map((chip, index) => (
              <Chip
                key={index}
                label={chip.title}
                size="small"
                color={chip.color}
                {...(chip.icon ? { icon: <Icon icon={chip.icon} /> } : {})}
              />
            ))}
            {chips.length > NUMBERCHIPS && (
              <Chip
                label={`+${chips.length - 4} more`}
                size="small"
                variant="outlined"
              />
            )}
          </Stack>

          <Typography
            variant="body2"
            color="primary"
            sx={{
              mb: 2,
              lineHeight: 1.4,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {description}
          </Typography>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="stretch"
            gap={1}
          >
            <Stack
              sx={{
                height: CTA_HEIGHT,
                justifyContent: "center",
                lineHeight: 1,
              }}
            >
              <Typography variant="caption" sx={{ lineHeight: 1 }}>
                EUR
              </Typography>
              <Typography
                variant="subtitle1"
                fontWeight={700}
                sx={{ lineHeight: 1.1 }}
              >
                {price}
              </Typography>
            </Stack>
            {/* TODO: tempo disable */}
            {/* <Button
              variant="outlined"
              size={isMobile ? 'small' : 'medium'}
              sx={{
                height: CTA_HEIGHT,
                minHeight: CTA_HEIGHT,
                px: 2,
                minWidth: 110,
                textTransform: 'none',
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.secondary.main,
                borderRadius: 24,
              }}
            >
              {t('actions.learn-more')}
            </Button> */}
          </Stack>
        </CardContent>
      </Box>
    </Card>
  );
}
