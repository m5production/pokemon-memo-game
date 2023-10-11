import { StyledOpenCard } from './style';

export function OpenedCard({ src }: { src: string }) {
  return <StyledOpenCard $src={src} />;
}
