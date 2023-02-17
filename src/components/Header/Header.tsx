import Toolbar from "@mui/material/Toolbar";
import * as S from "./Header.styles";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

interface HeaderProps {
  open: boolean;
  handleDrawerOpen: () => void;
}

export const Header = ({ open, handleDrawerOpen }: HeaderProps) => {
  return (
    <S.AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Universal converter
        </Typography>
      </Toolbar>
    </S.AppBar>
  );
};
