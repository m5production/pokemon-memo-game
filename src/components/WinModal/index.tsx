import { WindowBlinder } from '../WindowBlinder';
import { StyledModal } from './style';

export function WinModal() {
  return (
    <WindowBlinder>
      <StyledModal>Congratulations! You win!</StyledModal>
    </WindowBlinder>
  );
}
