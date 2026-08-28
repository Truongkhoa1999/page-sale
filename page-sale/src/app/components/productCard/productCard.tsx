'use client';

import { Card, CardContent, Typography, Stack, Box, useTheme } from '@mui/material';

// ----------------------------------------------------------------------

type ProductCardProps = {
  image: string;
  title: string;
  description: string;
  price: string;
  ml: string;
  kj: string;
};

// ----------------------------------------------------------------------

export function ProductCard({ image, title, description, price, ml, kj }: ProductCardProps) {
  const theme = useTheme();
  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: { xs: 3, md: '41px' },
        bgcolor: theme.palette.secondary.light,
        color: theme.palette.primary.main,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        overflow: 'visible',
        maxWidth: theme.spacing(35),
        minHeight: theme.spacing(40),
        margin: 0,
      }}
    >
      {/* Image */}
      <Box
        sx={{
          position: 'relative',
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
            width: theme.spacing(25),
            height: 'auto',
            objectFit: 'contain',
            mx: 'auto',
            display: 'block',
          }}
        />
      </Box>

      {/* Content */}
      <CardContent sx={{ p: 0 }}>
        <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
          {title}
        </Typography>

        <Typography
          variant="body2"
          color={theme.palette.grey[400]}
          sx={{ mb: 2, lineHeight: 1.4, px: 1 }}
        >
          {description}
        </Typography>

        <Stack
          direction="row"
          spacing={3}
          justifyContent="center"
          alignItems="center"
          paddingBottom={5}
        >
          <Stack>
            <Typography variant="subtitle2">EUR </Typography>
            <Typography variant="subtitle2">{price}</Typography>
          </Stack>
          <Stack>
            <Typography variant="subtitle2">ML </Typography>
            <Typography variant="subtitle2">{ml}</Typography>
          </Stack>
          <Stack>
            <Typography variant="subtitle2">KJ </Typography>
            <Typography variant="subtitle2">{kj}</Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
