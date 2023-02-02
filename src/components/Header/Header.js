import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu'; 
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <Wrapper>
      <SuperHeader className="super-header" />
      <SuperHeaderRemoved />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="menu" strokeWidth={2} />
          </UnstyledButton>
        </Side>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </Wrapper>
  );
};

const SuperHeaderRemoved = styled.div`
  display: none;
  @media ${QUERIES.tabletAndDown} {
    display: revert;
  }

  background: ${COLORS.gray[900]};
  height: 4px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;
`;

const Side = styled.div`
  flex: 1;
  display: flex;

  gap: clamp(
    17px,
    5vw,
    34px
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
  @media ${QUERIES.tabletAndDown} {
    .super-header {
      display: none;
    }
    ${Side}:not(:first-of-type) {
      justify-content: flex-end;
    }
  }
`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${QUERIES.tabletAndDown} {
    > ${Nav} {
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
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
