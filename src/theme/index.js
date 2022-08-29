import { ThemeProvider as ReactThemeProvider } from "styled-components";
import palette from "./palette";

export default ThemeProvider = ({ children }) => {
  const theme = {
    name: "defualt",
    colors: palette,
  };

  return <ReactThemeProvider theme={theme}>{children}</ReactThemeProvider>;
};
