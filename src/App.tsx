import RootLayout from "./layouts/RootLayout.tsx";
import {theme} from "./theme";
import {Outlet} from 'react-router-dom';
import {ThemeProvider} from '@aws-amplify/ui-react';


// const client = generateClient<Schema>();

function App() {
	return (
		<ThemeProvider theme={theme}>
			<RootLayout>
				<Outlet/>
			</RootLayout>
		</ThemeProvider>
	)
}

export default App;
