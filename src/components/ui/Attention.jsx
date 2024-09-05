import React from "react";
import styled from "styled-components";
import useMediaQueries from "../../hooks/useMediaQueries";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: ${(props) => (props.$isMobile ? "24px" : "48px")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  padding: ${(props) => (props.$isDesktop ? "48px" : "36px")};
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  border-radius: 12px;
  border: 1.5px solid var(--main-neutral300, #ced7de);
  opacity: var(--sds-size-stroke-border);
`;
const MainText = styled.div`
  color: var(--Neutrals-Neutrals600, #726c6c);
  font-family: "MonSemiBold";
  font-size: 20px;
  font-style: normal;
  line-height: 24px; /* 120% */
  letter-spacing: 0.4px;
`;
const SubText = styled.div`
  color: var(--Neutrals-Neutrals600, #726c6c);
  font-family: "MonRegular";
  font-size: ${(props) => (props.$isDesktop ? "18px" : "16px")};
  font-style: normal;
  line-height: 30px; /* 166.667% */
  letter-spacing: -0.45px;
`;

const Attention = ({ attention1, attention2, attention3 }) => {
  const { isMobile, isTablet, isDesktop } = useMediaQueries();

  return (
    <Wrapper $isMobile={isMobile} $isTablet={isTablet} $isDesktop={isDesktop}>
      <Container
        $isMobile={isMobile}
        $isTablet={isTablet}
        $isDesktop={isDesktop}
      >
        <MainText
          $isMobile={isMobile}
          $isTablet={isTablet}
          $isDesktop={isDesktop}
        >
          유의사항
        </MainText>
        <SubText
          $isMobile={isMobile}
          $isTablet={isTablet}
          $isDesktop={isDesktop}
        >
          {attention1}
          <br />
          {attention2}
          <br />
          {attention3}
        </SubText>
      </Container>
    </Wrapper>
  );
};

export default Attention;
