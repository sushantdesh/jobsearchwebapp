
import './App.css';
import { BrowserRouter as Router,
  Switch,
  Route} from 'react-router-dom'
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import JobList from "./components/JobList";
import JobDetails from "./components/JobDetails";
import {useSelector} from "react-redux";


function App() {
    const lightTheme = createMuiTheme({
        type: "light",
        palette: {
            primary: {
                main: "#5865E0", // Purple
                dark: "#FFFFFF", // White
            },
            secondary: {
                main: "#5865E0", // Purple
                dark: "#F5F6F8", // Light grey
            },
        },
    });

    const darkTheme = createMuiTheme({
        palette: {
            type: "dark",
            primary: {
                main: "#5865E0", // Purple
                dark: "#19212d", // Light Blue
            },
            secondary: {
                main: "#5865E0", // Purple
                dark: "#131822", // Dark Blue
            },
        },
    });
    const isDark = useSelector(state =>
        state.darkModeToggle
    )


  return (

      <ThemeProvider theme={isDark ?darkTheme : lightTheme }>
          { console.log(isDark)}
      <Router>
        <Switch>
        <Route path="/" exact component={JobList}/>
        <Route path="/jobdetails" exact component={JobList}/>
        <Route path="/jobdetails/:id" component={JobDetails}/>
        </Switch>
      {/*<JobList/>*/}
      </Router>
      </ThemeProvider>

  );
}

export default App;
