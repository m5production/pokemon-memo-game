import { useAppSelector } from '../../store/hooks';
import { StyledImageLoader } from './style';

export function ImageLoader() {
  const { cards } = useAppSelector((state) => state.cards);
  return (
    <StyledImageLoader>
      {cards.map(({ src , id}) => (
        <img src={src} key={id}/>
      ))}
    </StyledImageLoader>
  );
}
