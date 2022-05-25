import Image from "next/image";
import styled, { CSSProp } from "styled-components";

import logoIcon from "src/assets/img/Logo.svg";

const LogoIcon: React.FC<{ containerStyles?: CSSProp }> = ({
  containerStyles = {},
}): JSX.Element => (
  <LogoContainer $CSS={containerStyles}>
    <Image src={logoIcon} alt="Logo" />
  </LogoContainer>
);

export default LogoIcon;

const LogoContainer = styled.div<{ $CSS?: CSSProp }>`
  width: 171px;

  ${({ $CSS }) => $CSS}
`;
