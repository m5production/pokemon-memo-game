import { PropsWithChildren } from 'react';
import { StyledContentWrapper } from './style';

export function ContentWrapper({ children }: PropsWithChildren) {
  return <StyledContentWrapper>{children}</StyledContentWrapper>;
}
