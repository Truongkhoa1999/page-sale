import { SxProps, Theme, Typography } from "@mui/material";
import { TypographyProps } from "@mui/material/Typography";

type AppTypographyProps = {
  children: React.ReactNode;
  variant?: TypographyProps["variant"];
  color?: TypographyProps["color"];
  sx?: SxProps<Theme>;
};

export default function AppTypography({
  children,
  variant = "body2",
  color = "black",
  sx,
}: AppTypographyProps) {
  return (
    <Typography variant={variant} color={color} sx={sx}>
      {children}
    </Typography>
  );
}
