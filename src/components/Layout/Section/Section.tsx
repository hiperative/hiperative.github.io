import React from 'react';

interface SectionProps {
  children: React.ReactNode;
}

const Section: React.FunctionComponent<SectionProps> = ({ children }) => (
  <section>{children}</section>
);

export default Section;
