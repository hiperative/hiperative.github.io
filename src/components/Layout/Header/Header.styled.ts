import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import { Link } from 'gatsby';

import media from '../../../styles/functions/media';

interface StyledHeader {
  fixed: boolean;
}

export const Header = styled.header<StyledHeader>`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 20;
  background: transparent;
  box-shadow: none;
  transition: box-shadow 150ms;

  ${ifProp(
    'fixed',
    css`
      background: #fff;
      box-shadow: rgba(0, 0, 0, 0.12) 0 5px 15px;
    `
  )}
`;

export const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  height: 50px;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.tablet`
    justify-content: justify;
    padding: 0 2rem;
    height: 80px;
    justify-content: space-between;
  `};
`;

export const HeaderLink = styled(Link)``;

export const Nav = styled.nav`
  flex: 1;
  display: flex;
  max-width: 500px;
  justify-items: center;
  justify-content: flex-end;
  white-space: nowrap;
`;
