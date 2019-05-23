import styled from 'styled-components';
import media from '../../styles/functions/media';

export const Wrapper = styled.main`
  margin-top: 50px;
  background-color: #fff;
  min-height: 100%;

  ${media.tablet`
    height: 80px;
  `};
`;
