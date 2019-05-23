import React, { useEffect, useState } from 'react';

interface HeaderProps {
  siteTitle: string;
}

import * as Styles from './Header.styled';

const Header: React.FunctionComponent<HeaderProps> = ({ siteTitle }) => {
  const [fixed, setFixed] = useState(window.scrollY > 0);
  const handleScroll = () => setFixed(window.scrollY > 0);

  window.addEventListener('scroll', handleScroll);
  useEffect(() => {
    return () => window.removeEventListener('scroll', handleScroll);
  }, [fixed]);

  return (
    <Styles.Header fixed={fixed}>
      <Styles.Wrapper>
        <Styles.HeaderLink to="/">{siteTitle}</Styles.HeaderLink>
        <Styles.Nav>Nav</Styles.Nav>
      </Styles.Wrapper>
    </Styles.Header>
  );
};

Header.defaultProps = {
  siteTitle: ''
};

export default Header;
