import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import taj from "../assets/images/taj.jpg";
import eif from "../assets/images/eif.jpeg";
import burj from "../assets/images/burj.jpg";
import leh from "../assets/images/leh.jpg";

const HomeTour = () => {
  return (
<div className="row">
  <div className="col-md-3">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={taj} height={'200px'} />
      <Card.Body style={{textAlign:'justify'}}>
        <Card.Title>TAJ MAHAL</Card.Title>
        <Card.Text>
          The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <div className='text-center'>
          <a className='text-decoration-none text-info' href="https://en.wikipedia.org/wiki/Taj_Mahal">Know More...</a>
        </div>
      </Card.Body>
    </Card>
  </div>
  {/* Repeat the above div for the remaining three cards */}
  <div className="col-md-3">
    {/* Card 2 */}
    <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src={eif} height={'200px'}  />
      <Card.Body style={{textAlign:'justify'}}>
        <Card.Title>EIFFEL TOWER</Card.Title>
        <Card.Text>
        The Eiffel Tower, an iconic landmark in Paris, France, stands as a symbol of architectural brilliance and cultural significance. Completed in 1889 as the centerpiece of the World's Fair, it attracts millions of visitors annually, offering breathtaking views of the cityscape from its observation decks.        </Card.Text>
      </Card.Body>
      <Card.Body>
        <div className='text-center'>
          <a className='text-decoration-none text-info' href="https://en.wikipedia.org/wiki/Eiffel_Tower">Know More...</a>
        </div>
      </Card.Body>
    </Card>

  </div>
  <div className="col-md-3">
    {/* Card 3 */}
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={burj} height={'200px'}  />
      <Card.Body style={{textAlign:'justify'}}>
        <Card.Title>BURJ KHALIFA</Card.Title>
        <Card.Text>
        The Burj Khalifa, towering over the Dubai skyline, epitomizes modern engineering and architectural marvel. Standing at 828 meters, it's the world's tallest building, boasting luxurious residences, offices, and observation decks offering panoramic views of the city and beyond.        </Card.Text>
      </Card.Body>
      <Card.Body>
        <div className='text-center'>
          <a className='text-decoration-none text-info' href="https://en.wikipedia.org/wiki/Burj_Khalifa">Know More...</a>
        </div>
      </Card.Body>
    </Card>

  </div>
  <div className="col-md-3">
    {/* Card 4 */}
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={leh} height={'200px'}  />
      <Card.Body style={{textAlign:'justify'}}>
        <Card.Title>LEH</Card.Title>
        <Card.Text>
        Leh, nestled in the Himalayas, captivates with its serene beauty and rich cultural heritage. As the capital of Ladakh, India, it offers breathtaking landscapes, ancient monasteries, and opportunities for trekking, making it a paradise for adventurers and nature lovers alike , and it is very beutiful.        </Card.Text>
      </Card.Body>
      <Card.Body>
        <div className='text-center'>
          <a className='text-decoration-none text-info' href="https://en.wikipedia.org/wiki/Leh">Know More...</a>
        </div>
      </Card.Body>
    </Card>

  </div>
</div>
  )
}

export default HomeTour