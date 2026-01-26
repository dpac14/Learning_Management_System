
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./Components/Admin/Style.css"
import { AppContextProvider } from './Context/AppContext';
import { BrowserRouter } from 'react-router-dom'
import "./index.css";
import { ClerkProvider } from '@clerk/clerk-react'


// Import your Publishable Key
const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

console.log("CLERK KEY:", process.env.REACT_APP_CLERK_PUBLISHABLE_KEY);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </ClerkProvider>
  </BrowserRouter>,
);


reportWebVitals();
