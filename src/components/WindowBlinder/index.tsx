import { PropsWithChildren } from 'react';
import { StyledWindowBlinder } from './style';

export function WindowBlinder({ children }: PropsWithChildren) {
  return <StyledWindowBlinder>{children}</StyledWindowBlinder>;
}
