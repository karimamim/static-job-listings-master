import { ThemeProvider } from "styled-components";
import JobBoard from "./JobBoard/JobBoard";
import MainLayout from "./MainLayout";

const theme = {
	colors: {
		primary: "hsl(180, 29%, 50%)",
		background: "hsl(180, 52%, 96%)",
		filterTablets: "hsl(180, 31%, 95%)",
		darkGrayishCyan: "hsl(180, 8%, 52%)",
		veryDarkGrayishCyan: "hsl(180, 14%, 20%)",
	},
	media: {
		tablet: "768px",
		desktop: "1260px",
	},
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<MainLayout>
				<JobBoard />
			</MainLayout>
		</ThemeProvider>
	);
}

export default App;
