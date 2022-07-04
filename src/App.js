import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Components/Client/Home/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SinglePost from './Components/Client/Post/SinglePost';
import Error404 from './Components/Error/Error';
import Navbar from './Components/Client/Navbar/Navbar';
import Footer from './Components/Client/Footer/Footer';
import Login from './Components/Client/LogIn/Login';
import DashBoard from './Components/Dashboard/DashBoard';
function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/article' element={<Home />}></Route>
					<Route path='/team' element={<Home />}></Route>
					<Route path='/contact' element={<Home />}></Route>
					<Route path='/:title' element={<SinglePost />} />
					<Route path='*' element={<Error404 />} />
					<Route path='/login' element={<Login />} />
				</Routes>
				<Footer />
			</BrowserRouter>

			<BrowserRouter>
				<Routes>
					<Route path='/dashBoard' element={<DashBoard />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
