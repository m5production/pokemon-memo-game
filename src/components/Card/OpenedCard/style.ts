import styled from 'styled-components';
import { StyledCardBasic } from '../style';

export const StyledOpenedCard = styled(StyledCardBasic)<{ $src: string }>`
  padding: 1rem;

  background-color: yellow;
  background-origin: content-box;
  background-image: ${({ $src }) => 'url(' + $src + ')'};
`;
