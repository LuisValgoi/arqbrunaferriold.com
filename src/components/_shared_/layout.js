import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';

import Avatar from './avatar';
import Info from './info';

const Layout = ({ children }) => {
  return (
    <Container>
      <Content>
        <Avatar />
        <Info />
        {children}
      </Content>
    </Container>
  );
};

export default Layout;

Layout.displayName = 'Layout';

const ContainerTexture = styled.div`
  background-color: #fafafa;
  overflow-x: hidden;
  opacity: 0.8;
  background-size: 10px 10px;
  background-image: repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, #fafafa 0, #fafafa 50%);
`;

const Container = tw(ContainerTexture)`
  w-full
  h-screen
  flex
  flex-col
  content-center 
  items-center
`;

const Content = tw.div`
  flex
  flex-col
  justify-center
  items-center
  w-full
  max-w-320
  relative
  mt-8
`;
