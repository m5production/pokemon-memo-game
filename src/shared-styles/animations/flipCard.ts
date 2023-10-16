import { css, keyframes } from 'styled-components';
import { CARD_FLIP_ANIMATION_TIME_IN_MILLIS } from '../../constants';

const flipCard = keyframes`
  from {
    transform: translate(1);
  }

  to {
    transform: translate(0);
  }
`;

const flipCardAnimationBasic = css`
  animation-name: ${flipCard};
  animation-duration: ${CARD_FLIP_ANIMATION_TIME_IN_MILLIS / 2};
  animation-direction: normal;
`;

export const flipCardNormal = css`
  ${flipCardAnimationBasic}
  animation-direction: normal;
`;

export const flipCardReverse = css`
  ${flipCardAnimationBasic}
  animation-direction: reverse;
`;
