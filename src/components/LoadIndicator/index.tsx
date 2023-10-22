import { WindowBlinder } from '../WindowBlinder';
import { StyledBall } from './style';

export function LoadIndicator() {
  return (
    <WindowBlinder>
      <StyledBall>Loading...</StyledBall>;
    </WindowBlinder>
  );
}
