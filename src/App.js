import './App.css';
import ProsConsList from './Components/ProsConsList/ProsAndCons';
import { TalbleHeader } from './Components/TableHeader/TableHeader';
import { MainHeader } from './Components/MainHeader/MainHeader';

function App() {
	return (
		<div className='App'>
			<MainHeader />
			<TalbleHeader />
			<ProsConsList />
		</div>
	);
}

export default App;
