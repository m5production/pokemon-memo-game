export type ICardData = { src: string; id: string; status: ICardStatus};
export type ICardStatus = 'opened' | 'closed' | 'invisible';
export type ICardAnimationStatus = 'open' | 'close' | 'idle';