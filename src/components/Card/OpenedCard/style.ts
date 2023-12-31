import styled from 'styled-components';
import { StyledCardBasic } from '../style';
import { ICardAnimationStatus } from '../type';
import {
  flipCardNormal,
  flipCardReverse,
} from '../../../shared-styles/animations/flipCard';

export const StyledOpenedCard = styled(StyledCardBasic)<{
  $src: string;
  $animationStatus: ICardAnimationStatus;
}>`
  padding: 1rem;

  background-color: yellow;
  background-origin: content-box;
  background-image: ${({ $src }) => 'url(' + $src + ')'};

  ${({ $animationStatus }) => {
    switch ($animationStatus) {
      case 'open':
        return flipCardReverse;
      case 'close':
        return flipCardNormal;
      default:
        return '';
    }
  }}
`;
