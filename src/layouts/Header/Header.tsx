import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import LogoIcon from "src/assets/icons/LogoIcon";
import SettingIcon from "src/assets/icons/SetingIcon";
import LogoutIcon from "src/assets/icons/LogoutIcon";
import ChevronIcon from "src/assets/icons/ChevronIcon";
import { DropDown } from "src/components/DropDown";
import { useOutside } from "src/hooks/useOutside";
import { ILink } from "src/ui/ILink";
import { routes } from "src/types/routes";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { actions, selectors } from "src/store/ducks";
import Container from "../Container/Container";

const Header: React.FC<HeaderProps> = ({}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [userToken, setUserToken] = useState<string>();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectors.user.selectUser);
  const token = useAppSelector(selectors.user.selectToken);
  const ref = useRef<HTMLDivElement>(null);

  const handleOpen = () => setOpen(!open);

  useOutside(ref, () => setOpen(false));

  useEffect(() => {
    setUserToken(token);
  }, [token]);

  return (
    <Container>
      <HeaderContainer>
        <ILink url="/">
          <LogoIcon />
        </ILink>
        {userToken && (
          <UserContainer>
            <div>
              <ILink url={routes.SUBSCRIPTIONS}>My subscriptions</ILink>
            </div>
            <ContainerRelative ref={ref}>
              <UserNameContainer onClick={handleOpen}>
                <UserNameText>{user.username}</UserNameText>
                <ChevronIcon position={open ? "top" : "bottom"} />
              </UserNameContainer>
              {open && (
                <DropDown
                  items={[
                    {
                      id: 1,
                      title: "Settings",
                      url: routes.SETTINGS,
                      icon: <SettingIcon />,
                    },
                    {
                      id: 2,
                      title: "Logout",
                      icon: <LogoutIcon />,
                      func: () => {
                        dispatch(actions.user.logOut());
                        setOpen(false);
                      },
                    },
                  ]}
                />
              )}
            </ContainerRelative>
          </UserContainer>
        )}
      </HeaderContainer>
    </Container>
  );
};

interface HeaderProps {}

const HeaderContainer = styled.header`
  padding: 32px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContainerRelative = styled.div`
  margin-left: 32px;
  position: relative;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

const UserNameContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const UserNameText = styled.span`
  margin-right: 8px;
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
`;

export default Header;
