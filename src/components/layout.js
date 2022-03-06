import React from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components";

import { useApp } from '../context/AppContext';

const Layout = ({ children }) => {
  const { selectedMenu } = useApp();

  return (
    <Container>
      <Content $isOrcamento={selectedMenu === "ORCAMENTO"}>
        <InnerContent>{children}</InnerContent>
      </Content>
    </Container>
  );
}

export default Layout;

Layout.displayName = "Layout";

const ContainerTexture = styled.div`
  background-color: #fafafa;
  opacity: 0.8;
  background-size: 10px 10px;
  background-image: repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, #fafafa 0, #fafafa 50%);
`;

const Container = tw(ContainerTexture)`
  w-screen
  h-screen
  flex 
  flex-col
  justify-center
  content-center 
  items-center
  z-10
`;

const Content = tw.div`
  align-center
  max-w-screen-sm	
  absolute
  transform transition duration-300 ease-in-out
  top-12
`;

const InnerContent = tw.div`
  align-center
`;

