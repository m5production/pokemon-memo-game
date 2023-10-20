import { useAppDispatch, useAppSelector } from '../store/hooks';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { WinModal } from '../components/WinModal';
import { useEffect } from 'react';
import { GlobalStyles } from '../shared-styles/GlobalStyles';
import { StyledApp } from './style';
import { initializeCards } from './initializeCards';

function App() {
  const { isWin } = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeCards());
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
