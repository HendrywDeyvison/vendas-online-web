import styled from 'styled-components';

interface DisplayFlexProps {
  margin?: string;
}

export const DisplayFlex = styled.div`
  display: flex;
`;

export const DisplayFlexJustifyLeft = styled(DisplayFlex)<DisplayFlexProps>`
  justify-content: left;
  margin: ${(props) => props.margin};
`;

export const DisplayFlexJustifyRight = styled(DisplayFlex)<DisplayFlexProps>`
  justify-content: right;
  margin: ${(props) => props.margin};
`;

export const DisplayFlexJustifyCenter = styled(DisplayFlex)<DisplayFlexProps>`
  justify-content: center;
  margin: ${(props) => props.margin};
`;

export const DisplayFlexJustifyBetween = styled(DisplayFlex)<DisplayFlexProps>`
  justify-content: space-between;
  margin: ${(props) => props.margin};
`;
