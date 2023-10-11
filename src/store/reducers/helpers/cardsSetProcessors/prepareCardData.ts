import { ICardData } from '../../../../components/Card/type';

export function prepareCardData(src: string): ICardData {
  const id = `${src}${Math.random()}`;
  return { src, id, isOpen: false };
}
