import React from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components";

export default function Layout({ children }) {
  return (
    <Container>
      <Content>
        <InnerContent>{children}</InnerContent>
      </Content>
    </Container>
  );
}

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
  top-14 sm:top-24
`;

const InnerContent = tw.div`
  align-center
`;

