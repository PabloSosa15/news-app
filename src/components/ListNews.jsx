import { Grid, Typography } from "@mui/material";
import useNews from "../hooks/useNews";
import New from "./New";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function ListNews() {
    const { noticias, totalNews, handleChangePage, page } = useNews();
    
    const totalPages = Math.ceil(totalNews / 20)
  return (
    <>
      <Typography
        textAlign={"center"}
        marginY={5}
        variant="h3"
        component={"h2"}
      >
        Latest News
      </Typography>

      <Grid container spacing={2}>
        {noticias?.map((noticia) => (
          <New key={noticia?.url} noticia={noticia} />
        ))}
      </Grid>

      <Stack
        sx={{
          marginY: 5,
        }}
        spacing={2}
        direction={'row'}
        justifyContent={'center'}
        alignContent={'center'}
      >
        <Pagination count={totalPages} color="primary" onChange={handleChangePage} page={page}/>
      </Stack>
    </>
  );
}
