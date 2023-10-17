import styled from 'styled-components';
import { StyledCardBasic } from '../style';
import {
  flipCardNormal,
  flipCardReverse,
} from '../../../shared-styles/animations/flipCard';
import { ICardAnimationStatus } from '../type';

export const StyledClosedCard = styled(StyledCardBasic)<{
  $animationStatus: ICardAnimationStatus;
}>`
  ${({ $animationStatus }) => {
    switch ($animationStatus) {
      case 'open':
        return flipCardNormal;
      case 'close':
        return flipCardReverse;
      default:
        return '';
    }
  }}
`;
