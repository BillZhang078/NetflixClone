import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Background = styled.section`
  background: url(${({ src }) => src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg'})
    top left / cover no-repeat;

  display: flex;
  flex-direction: column;
  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) =>
      dontShowOnSmallViewPort && `background: none;`}
  }
`;
export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Logo = styled.img`
  width: 108px;
  height: 32px;
  margin: 28px 45px;
  cursor: pointer;
  @media (max-width: 1440) {
    height: 45px;
    width: 167px;
  }
`;

export const Group = styled.div`
    display: flex;
    align-items: center;
`;

export const Text = styled.p`
    color: white;
    font-size: 22px;
    line-height: normal;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;
export const ButtonLink = styled(Link)`
  text-decoration: none;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  color: white;
  margin: 28px 45px;
  text-align: center;
  padding: 8px 17px;
  font-size: 16px;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  cursor: pointer;

  &:hover {
    background: #f40612;
  }
`;

export const Link = styled.p`
    color: #fff;
    text-decoration: none;
    margin-right: 30px;
    font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
    cursor: pointer;
    
    &:hover {
        font-weight: bold;
    }
    &:last-of-type {
        margin-right: 0;
    }
`;