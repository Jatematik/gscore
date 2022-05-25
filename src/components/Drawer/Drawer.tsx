import React, { useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";

import { useOutside } from "src/hooks/useOutside";
import { colors } from "src/styles/colors";
import { ILink } from "src/ui/ILink";
import LogoIcon from "src/assets/icons/LogoIcon";
import CrossIcon from "src/assets/icons/CrossIcon";
import { routes } from "src/types/routes";
import SettingIcon from "src/assets/icons/SetingIcon";
import { IText } from "src/ui/IText";
import LogoutIcon from "src/assets/icons/LogoutIcon";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { actions, selectors } from "src/store/ducks";
import ChevronIcon from "src/assets/icons/ChevronIcon";

const Drawer: React.FC<DrawerProps> = ({ open, onClose }): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const [isClose, setIsClose] = useState<boolean>(false);
  const [openDropDown, isOpenDropDown] = useState<boolean>(false);
  const user = useAppSelector(selectors.user.selectUser);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    setIsClose(true);
    setTimeout(() => {
      onClose();
      setIsClose(false);
    }, 300);
  };

  const handleDropDown = () => {
    isOpenDropDown(!openDropDown);
  };

  const handleLogOut = () => {
    setIsClose(false);
    dispatch(actions.user.logOut());
  };

  useOutside(ref, () => handleClose());

  return (
    <>
      {open && (
        <DrawerContainer>
          <Content ref={ref} isClose={isClose}>
            <Head>
              <CrossIcon containerStyles={crossStyles} onClick={handleClose} />
              <ILink url="/" containerStyles={linkStyles}>
                <LogoIcon containerStyles={logoStyles} />
              </ILink>
            </Head>
            <List>
              <ListItem>
                <ILink url={routes.SUBSCRIPTIONS} containerStyles={textStyles}>
                  My subscriptions
                </ILink>
              </ListItem>
              <ListItem>
                <Flex onClick={handleDropDown}>
                  <IText containerStyles={textStyles}>{user.username}</IText>
                  <ChevronIcon position={openDropDown ? "top" : "bottom"} />
                </Flex>
                {openDropDown && (
                  <Drop>
                    <Box>
                      <SettingIcon color={colors.gray500} />
                      <ILink
                        url={routes.SETTINGS}
                        containerStyles={[textStyles, subTextStyles]}
                      >
                        Settings
                      </ILink>
                    </Box>
                    <Box>
                      <LogoutIcon color={colors.gray500} />
                      <IText
                        as="span"
                        containerStyles={[textStyles, subTextStyles]}
                        onClick={handleLogOut}
                      >
                        Logout
                      </IText>
                    </Box>
                  </Drop>
                )}
              </ListItem>
            </List>
          </Content>
        </DrawerContainer>
      )}
    </>
  );
};

interface DrawerProps {
  open: boolean;
  onClose: () => void;
}

export default Drawer;

const DrawerContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 1001;
`;

const Head = styled.div`
  display: flex;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const Drop = styled.div`
  margin-top: 28px;
`;

const drawer = keyframes`
    from {
        transform: translateX(260px)
    }

    to {
        transform: translateX(0px)
    }
`;

const closeDrawer = keyframes`
    from {
        transform: translateX(0)
    }

    to {
        transform: translateX(260px)
    }
`;

const Content = styled.div<{ isClose: boolean }>`
  position: absolute;
  right: 0;
  top: 0;
  padding: 32px 24px;
  height: 100%;
  width: 260px;
  background-color: ${colors.black27};
  transform: translateX(260px);
  animation: ${({ isClose }) => (isClose ? closeDrawer : drawer)} 0.3s forwards;
`;

const linkStyles = css`
  &::before {
    content: none;
  }
`;

const logoStyles = css`
  width: 130px;
  height: 32px;
`;

const crossStyles = css`
  margin-right: 35px;
  cursor: pointer;
`;

const List = styled.ul`
  margin-top: 28px;
`;

const ListItem = styled.li`
  padding: 20px 0;
  border-bottom: 1px solid ${colors.black700};
`;

const textStyles = css`
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  cursor: pointer;
  &::before {
    content: none;
  }
`;

const subTextStyles = css`
  margin-left: 8px;
  color: ${colors.gray500};
`;
