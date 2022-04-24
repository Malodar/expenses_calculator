import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import ExpensesCategoriesScreen from './screens/ExpensesCategoriesScreen'
import IncomeCategoriesScreen from './screens/IncomeCategoriesScreen'
import PlacesMoneySavingScreen from './screens/PlacesMoneySavingScreen'
import BudgetPlanningScreen from './screens/BudgetPlanningScreen'
import Currencies from './screens/Currencies';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';


function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact/>
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/contact' element={<ContactScreen />} />
            <Route path='/currencies' element={<Currencies />} />
            <Route path='/expenses-categories' element={<ExpensesCategoriesScreen />} />
            <Route path='/income-categories' element={<IncomeCategoriesScreen />} />
            <Route path='/places-money-saving' element={<PlacesMoneySavingScreen />} />
            <Route path='/budget-planning' element={<BudgetPlanningScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
