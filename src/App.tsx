import { Grid, GridItem, Show } from '@chakra-ui/react';
import './App.css';
import Navbar from './components/NavBar';
import GameGrid from './components/GameGrid';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav"
        "aside main"
        `,
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem bg="pink.300" area="aside">
          Aside
        </GridItem>
      </Show>

      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
