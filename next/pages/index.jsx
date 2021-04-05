import Page from '../components/Page'
import { Card, CardContent, CardMedia, Grid, makeStyles } from '@material-ui/core'
import Link from 'next/link'

const useStyles = makeStyles(themes => ({

}))

export default function Home({ products }) {
  const classes = useStyles()

  return (
    <Page categoriesTabs>
      <Grid
        container
        spacing={2}
      >
        {products.map(product => (
          <Link href={`/product/${product.slug}`}>
            <Grid
              item
              xl={2}
              lg={3}
              md={4}
              sm={6}
              xs={12}
            >
              <Card>
                <CardMedia src={`${process.env.NEXT_PUBLIC_API_URL}${product.featureImages[0].image}`} component="img" />
                <CardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>{product.title}</span>
                  <strong>${product.regular_price}</strong>
                </CardContent>
              </Card>
            </Grid>
          </Link>
        ))}
      </Grid>
    </Page>
  )
}

export async function getStaticProps() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api`)
  const products = await response.json()

  return {
    props: {
      products: products
    }
  }
}
