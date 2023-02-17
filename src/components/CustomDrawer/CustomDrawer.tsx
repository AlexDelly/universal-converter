import { CustomDrawerHeader } from "../CustomDrawerHeader/CustomDrawerHeader";
import { Menu } from "../Menu/Menu";
import * as S from "./CustomDrawer.styles";

interface CustomDrawerProps {
  open: boolean;
  toggleDrawer: () => void;
}

export const CustomDrawer = ({ open, toggleDrawer }: CustomDrawerProps) => {
  return (
    <S.Drawer variant="permanent" open={open}>
      <CustomDrawerHeader handleDrawerClose={toggleDrawer} />
      <Menu open={open} />
    </S.Drawer>
  );
};
