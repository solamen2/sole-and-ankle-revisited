/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
        <UnstyledButtonClose onClick={onDismiss}>
          <Icon id="close" strokeWidth={2} />
          <VisuallyHidden>
            Dismiss menu
          </VisuallyHidden>
        </UnstyledButtonClose>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: var(--color-dimmed-gray);
  opacity: 1.0;
`;

const Content = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  padding: 0px 0px 0px 32px;

  position: fixed;
  height: 100%;
  width: 300px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  background: var(--color-white);
  opacity: 1.0;
  z-index: 2;
`;

const UnstyledButtonClose = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0px;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex: 1 1000000 auto;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
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

const Footer = styled.footer`
  position: absolute;
  right: 0px;
  bottom: 32px;
  left: 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
`;

const FooterLink = styled.a`
  font-size: 0.875rem;
  text-decoration: none;
  color: var(--color-gray-700);
  font-weight: var(--font-medium);
`;

export default MobileMenu;
