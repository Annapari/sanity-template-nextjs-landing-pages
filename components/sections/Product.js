import client from '../../client'
import {useEffect} from 'react'
import Layout from '../Layout'

export default function Product() {
  const {
    state: {cart},
    dispatch,
  } = useContext(Store)
  const router = useRouter()
  const {enqueueSnackbar} = useSnackbar()
  const [state, setState] = useState({
    products: [],
    error: '',
    loading: true,
  })
  const {loading, error, products} = state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await client.fetch(`*[_type == "product"]`)
        setState({products, loading: false})
      } catch (err) {
        setState({loading: false, error: err.message})
      }
    }
    fetchData()
  }, [])

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Layout>
          {loading ? (
            <CircularProgress />
          ) : error ? (
            <Alert variant="danger">{error}</Alert>
          ) : (
            <Grid container spacing={3}>
              {products.map((product) => (
                <Grid item md={4} key={product.slug}>
                  <ProductItem product={product} addToCartHandler={addToCartHandler}></ProductItem>
                </Grid>
              ))}
            </Grid>
          )}
        </Layout>
      </div>
    </div>
  )
}
