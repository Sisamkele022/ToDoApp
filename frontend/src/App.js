import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route from react-router-dom
import { GlobalStyle, theme } from './styles/theme';
import SplashScreen from './pages/SplashScreen';
import Onboarding from './pages/Onboarding';
import Home from './pages/Home';
import WorkdayTodo from './pages/WorkdayTodo';
import StructuredTodo from './pages/StructuredTodo';
import PeriodTodo from './pages/PeriodTodo';
import RelaxedTodo from './pages/RelaxedTodo';
import WeeklyWishlist from './pages/WeeklyWishlist';
import MonthlyGoals from './pages/MonthlyGoals';
import WorkoutRoutine from './pages/WorkoutRoutine';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<SplashScreen />} /> {/* Use element prop and pass the component as JSX */}
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/home" element={<Home />} />
          <Route path="/workday-todo" element={<WorkdayTodo />} />
          <Route path="/structured-todo" element={<StructuredTodo />} />
          <Route path="/period-todo" element={<PeriodTodo />} />
          <Route path="/relaxed-todo" element={<RelaxedTodo />} />
          <Route path="/weekly-wishlist" element={<WeeklyWishlist />} />
          <Route path="/monthly-goals" element={<MonthlyGoals />} />
          <Route path="/workout-routine" element={<WorkoutRoutine />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
