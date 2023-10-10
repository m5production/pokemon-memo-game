import { useAppSelector } from '../../store/hooks';
import { Header } from '../Header';
import { Main } from '../Main';
import { WinModal } from '../WinModal';

function App() {
  const isWin = useAppSelector((state) => state.isWin);
  return (
    <>
      <Header />
      <Main />
      {isWin && <WinModal />}
    </>
  );
}

export default App;
