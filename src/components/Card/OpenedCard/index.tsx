import { StyledOpenedCard } from './style';

export function OpenedCard({ src }: { src: string }) {
  return <StyledOpenedCard $src={src} />;
}
