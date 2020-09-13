import React from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import { Background, Container, Logo, ButtonLink, Group, Text, Link } from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, children, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps} />
    </ReachRouterLink>
  );
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

Header.Link = function HeaderText({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
}