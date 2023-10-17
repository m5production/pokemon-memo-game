import { css, keyframes } from 'styled-components';
import { CARD_FLIP_ANIMATION_TIME_IN_MILLIS } from '../../constants';

const flipCard = keyframes`
  from {
    transform: scaleX(1);
  }

  to {
    transform: scaleX(0);
  }
`;

export const flipCardNormal = css`
  animation-name: ${flipCard};
  animation-duration: ${CARD_FLIP_ANIMATION_TIME_IN_MILLIS / 2}ms;
  animation-timing-function: linear;
  animation-direction: normal;
`;

export const flipCardReverse = css`
  ${flipCardNormal}
  animation-direction: reverse;
`;
