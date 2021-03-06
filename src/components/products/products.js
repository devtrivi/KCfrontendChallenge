import { Card, Spinner, CardGroup } from 'react-bootstrap'

export default function ({products}) {
    console.log("products in displaycomp:", products)
    console.log("tricky ternary : ", products.length)
    return (
        <CardGroup>
            {products.products.length >= 1 
            ? 
           ( products.products.map((item) => (
          <Card key={item.id} style={{ width: '18rem' }} >
<Card.Body>
<Card.Title>{item.Product}</Card.Title>
<Card.Subtitle className="mb-2 text-muted">{item.brand}</Card.Subtitle>
<Card.Text>
  {item.desc}
</Card.Text>
<Card.Link href={`${item.order_url}`}>Order Size {item.size}</Card.Link>
</Card.Body>
</Card> 
        ))
            
            )
        : <Spinner animation="grow" />
        }
      
</CardGroup>
    )

}