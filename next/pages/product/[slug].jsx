import Page from '../../components/Page'
import { Card, CardContent, CardMedia, makeStyles } from '@material-ui/core'
import { useRouter } from 'next/router'

const useStyles = makeStyles(themes => ({
    container: {
        height: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start'
    },
    card: {
        width: '400px',
        height: '100%',
        marginRight: 20
    },
    featureImage: {
        width: '100%'
    },
    productDescription: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: 20
    }
}))

export default function Product({ product }) {
    const router = useRouter()
    const classes = useStyles()

    if (router.isFallback) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <Page>
            <div className={classes.container}>
                <Card className={classes.card}>
                    <CardMedia
                        src={`${process.env.NEXT_PUBLIC_API_URL}${product.featureImages[0].image}`}
                        component="img"
                        className={classes.featureImage}
                    />
                    <CardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>{product.title}</span>
                        <strong>${product.regular_price}</strong>
                    </CardContent>
                </Card>
                <div className={classes.productDescription}>
                    <div>
                        <h2>{product.title}</h2>
                        <span>{product.description}</span>
                    </div>
                    <button>Add to cart</button>
                </div>
            </div>
        </Page>
    )
}

export function getStaticPaths() {
    return {
        paths: [],
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product/${params.slug}`)
    const product = await response.json()

    if (!product) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            product: product
        },
        revalidate: 5
    }
}
