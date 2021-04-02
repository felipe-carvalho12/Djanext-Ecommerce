import Header from '../components/Header'
import { Card, CardContent, CardMedia, Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(themes => ({
  container: {
    padding: 20
  }
}))

export default function Home({ products }) {
  const classes = useStyles()

  return (
    <>
      <Header />
      <div className={classes.container}>
        <Grid
          container
          spacing={2}
        >
          {products.map(product => (
            <Grid
              item
              xl={2}
              lg={3}
              md={4}
              sm={6}
              xs={12}
            >
              <Card>
                <CardMedia src={product.featureImages[0].image} component="img" />
                <CardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{product.title}</span>
                    <strong>${product.regular_price}</strong>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://127.0.0.1:8000/api/')
  const products = await response.json()

  return {
    props: {
      products: products
    }
  }
}
