import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setPokemonCards } from '../store/reducers/gameSlice';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { WinModal } from '../components/WinModal';
import { useEffect } from 'react';
import { GlobalStyles } from '../GlobalStyles';
import { StyledApp } from './style';

function App() {
  const isWin = useAppSelector((state) => state.isWin);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPokemonCards());
  }, []);

  return (
    <StyledApp>
      <GlobalStyles />
      <Header />
      <Main />
      {isWin && <WinModal />}
    </StyledApp>
  );
}

export default App;
