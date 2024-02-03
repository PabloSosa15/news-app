import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
  Grid,
} from "@mui/material";

export default function New({ noticia }) {
  const { urlToImage, url, title, description, source } = noticia;

  return (
    <Grid item md={6} lg={4}>
      <Card>
        {urlToImage && (
          <CardMedia
            component={"img"}
            alt={`Image of the New ${title}`}
            image={urlToImage}
            height={"250"}
          />
        )}

        <CardContent>
          <Typography
            variant="body1"
            color="error"
          >
            {source.name}
          </Typography>
          
          <Typography variant="h5" component={"div"}>
            {title}
          </Typography>
          
          <Typography variant="body2">
            {description}
          </Typography>
        </CardContent>

        <CardActions>
          <Link
            href={url}
            target="_blank"
            variant="button"
            color={"primary"}
            width={'100%'}
            textAlign={'center'}
            sx={{
              textDecoration: 'none'
            }}
          >
          Read New
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}
