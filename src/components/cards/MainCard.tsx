import { ReactNode, useMemo } from "react";
import { useTheme, Theme } from "@mui/material/styles";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";

const headerSX = {
  "& .MuiCardHeader-action": { mr: 0 },
};

interface IMainCard {
  border?: Boolean;
  boxShadow?: Boolean;
  children?: string | JSX.Element | JSX.Element[];
  content?: Boolean;
  contentClass?: string;
  contentSX?: object;
  darkTitle?: Boolean;
  secondary?: ReactNode | string | object;
  shadow?: string;
  sx?: object;
  title?: ReactNode | string;
}

// ==============================|| CUSTOM MAIN CARD ||============================== //

const MainCard = ({
  children,
  content = true,
  contentClass = "",
  contentSX = {},
  sx = {},
  title,
  // ref,
  ...others
}: IMainCard) => {
  const theme: Theme = useTheme();
  const isTitleString = useMemo(() => {
    return typeof title === "string";
  }, [title]);
  return (
    <Card
      {...others}
      sx={{
        backgroundColor: "primary.main",
        ...sx,
      }}
    >
      {title && (
        <CardHeader
          sx={headerSX}
          title={
            isTitleString ? (
              <Typography variant="h3">{title}</Typography>
            ) : (
              title
            )
          }
        />
      )}
      {title && (
        <Divider
          sx={{
            opacity: 1,
            borderColor: theme.palette.primary.dark,
          }}
        />
      )}
      {content && (
        <CardContent sx={contentSX} className={contentClass}>
          {children}
        </CardContent>
      )}
      {!content && children}
    </Card>
  );
};

export default MainCard;
