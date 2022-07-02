import React from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components";

import Avatar from "./avatar";
import Info from "./info";

const Layout = ({ children }) => {
  return (
    <Container>
      <Content>
        <InnerContent>
          <Avatar />
          <Info />
          {children}
        </InnerContent>
      </Content>
    </Container>
  );
};

export default Layout;

Layout.displayName = "Layout";

const ContainerTexture = styled.div`
  background-color: #fafafa;
  overflow-x: hidden;
  opacity: 0.8;
  background-size: 10px 10px;
  background-image: repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, #fafafa 0, #fafafa 50%);
`;

const Container = tw(ContainerTexture)`
  w-screen
  h-screen
  flex 
  flex-col
  content-center 
  items-center
`;

const Content = tw.div`
  align-center
  max-w-screen-sm	
  transform transition duration-300 ease-in-out
  mt-10
`;

const InnerContent = tw.div`
  flex
  flex-col
  justify-center
  items-center
`;
