import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "../components/BoxWithClassName/BoxWithStyledComponents.js";
import styled from "styled-components";

export default function HomePage() {
  return (
    <StyledWrapper>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents isBlack />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
`;
