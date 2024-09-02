import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {GabrielPage} from './GabrielPage.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
	
	<StrictMode>
		<BrowserRouter>
			<GabrielPage />
		</BrowserRouter>
	</StrictMode>
);
