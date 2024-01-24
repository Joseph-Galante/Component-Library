import Box from "@mui/material/Box";
import styles from "./styles.module.scss";

function App() {
  return (
    <Box
      className={styles.app}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      gap={2}
    >
      <Box display="flex" justifyContent="center">
        Welcome to my component library!
      </Box>
      <Box display="flex" justifyContent="center">
        Here I'll be pushing my personal boundaries for frontend development
        while creating stunning UI that is highly customizable.
      </Box>
    </Box>
  );
}

export default App;
