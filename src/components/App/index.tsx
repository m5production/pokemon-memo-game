import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Header } from '../Header';
import { Main } from '../Main';
import { WinModal } from '../WinModal';
import { useEffect } from 'react';
import { setPokemonCards } from '../../store/reducers/gameSlice';

function App() {
  const isWin = useAppSelector((state) => state.isWin);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPokemonCards(2));
  }, []);

  return (
    <>
      <Header />
      <Main />
      {isWin && <WinModal />}
    </>
  );
}

export default App;
