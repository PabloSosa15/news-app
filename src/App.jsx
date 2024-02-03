import { Container, Grid, Typography } from "@mui/material"
import Formulary from "./components/Formulary"
import ListNews from "./components/ListNews"
import { NewsProvider } from "./context/NewsProvider"
function App() {

  return (

    <NewsProvider>
    <Container>
      <header>
        <Typography align="center" marginY={5} component="h1" variant="h3">
        News Search Engine
        </Typography>
      </header>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={6} lg={4}>

          <Formulary />
          </Grid>
        </Grid>

        <ListNews/>
      </Container>
      </NewsProvider>
  )
}

export default App
