import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;

  .option {
    margin-left: 25px;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
`;

export const OptionLink = styled(Link)`
  margin-left: 40px;
  cursor: pointer;
`;
