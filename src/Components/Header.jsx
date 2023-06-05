import styled from 'styled-components';

const HeaderUp = styled.header`
  background-color: black;
  padding: 20px;
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

export default function Header() {
  return (
    <HeaderUp>NachoFlix</HeaderUp>
  )
}
