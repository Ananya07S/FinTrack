import React, { useState, useEffect } from 'react';
import { authAPI, expensesAPI } from './services/api';
import { 
  DollarSign, 
  Plus, 
  Trash2, 
  Edit, 
  LogOut, 
  User, 
  Lock,
  TrendingUp,
  Calendar,
  Tags
} from 'lucide-react';
import './App.css';
import Fintrack from './fintrack';

function App() {
  return (
    <Fintrack />
  );
}


export default App;





