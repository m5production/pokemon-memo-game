import styled from 'styled-components';
import { StyledCardBasic } from '../style';

export const StyledOpenCard = styled(StyledCardBasic)<{ $src: string }>`
  background-color: yellow;
  background-image: ${({ $src }) => 'url(' + $src + ')'};
`;
