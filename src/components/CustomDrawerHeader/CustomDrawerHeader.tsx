import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Divider } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import * as S from "./CustomDrawerHeader.styles";

interface CustomDrawerHeaderProps {
  handleDrawerClose: () => void;
}

export const CustomDrawerHeader = ({
  handleDrawerClose,
}: CustomDrawerHeaderProps) => {
  const theme = useTheme();

  return (
    <>
      <S.DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </S.DrawerHeader>
      <Divider />
    </>
  );
};
