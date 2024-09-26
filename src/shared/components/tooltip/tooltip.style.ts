import styled from 'styled-components';

export const ContainerTooltip = styled.div`
  position: relative;
  :hover {
    div {
      display: block;
    }
  }
`;

export const ContainerExternalTooltip = styled.div`
  display: none;
  position: absolute;
  bottom: -110%;
  padding: 2px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;
