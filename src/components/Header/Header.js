import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu'; 
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <Wrapper>
      <SuperHeader/>
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <MobileNav>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={2} />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={2} />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={2} />
            <VisuallyHidden>Menu</VisuallyHidden>
          </UnstyledButton>
        </MobileNav>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </Wrapper>
  );
};

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(
    2rem,
    14vw - 7rem,
    6rem
  );
  margin: 0px 48px;
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media(${QUERIES.tabletAndDown}) {
    flex: revert;
  }
`;

const Filler = styled.div`
  flex: 1;

  @media(${QUERIES.tabletAndDown}) {
    display: none;
  }
`;

const MobileNav = styled.div`
  display: flex;

  gap: clamp(
    16px,
    5vw,
    32px
  );

  > ${UnstyledButton} {
    display: none;
  }
  @media ${QUERIES.tabletAndDown} {
    > ${UnstyledButton} {
      display: inline;
    }
  }
`;

const Wrapper = styled.header`

`;

const MainHeader = styled.div`
  display: flex;
  overflow: auto;
  gap: 16px;
  align-items: baseline;
  padding: 18px 32px;
  border-top: 4px solid var(--color-gray-900);
  border-bottom: 1px solid var(--color-gray-300);
  justify-content: space-between;

  @media ${QUERIES.tabletAndDown} {
    justify-content: space-between;
    align-items: center;
    
    > ${DesktopNav} {
      display: none;
    }
  }
  @media ${QUERIES.phoneAndDown} {
    padding: 18px 16px;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--font-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
