import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
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
import ShoppingList from './pages/ShoppingList'; // Import ShoppingList component

// Import react-dnd
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* Wrap the whole app in DndProvider with HTML5Backend */}
      <DndProvider backend={HTML5Backend}>
        <Router>
          <Routes>
            <Route path="/" element={<SplashScreenWrapper />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/home" element={<Home />} />
            <Route path="/workday-todo" element={<WorkdayTodo />} />
            <Route path="/structured-todo" element={<StructuredTodo />} />
            <Route path="/period-todo" element={<PeriodTodo />} />
            <Route path="/relaxed-todo" element={<RelaxedTodo />} />
            <Route path="/weekly-wishlist" element={<WeeklyWishlist />} />
            <Route path="/monthly-goals" element={<MonthlyGoals />} />
            <Route path="/workout-routine" element={<WorkoutRoutine />} />
            <Route path="/shopping-list" element={<ShoppingList />} /> {/* Add route for ShoppingList */}
          </Routes>
        </Router>
      </DndProvider>
    </ThemeProvider>
  );
}

// A wrapper component for SplashScreen with redirect logic
function SplashScreenWrapper() {
  console.error("Splashscreen here");
  
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect after a short delay
    const timer = setTimeout(() => {
      navigate('/onboarding'); // You can change this to '/home' if you want the home page after splash screen
    }, 3000); // Show SplashScreen for 3 seconds

    return () => clearTimeout(timer); // Clean up timeout on component unmount
  }, [navigate]);

  return <SplashScreen />;
}

export default App;