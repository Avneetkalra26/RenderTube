import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';

export default function VideoCard({ data }) {
  const link = data.id.videoId;
  return (
    <Col className="mt-5">
      <Link to={"/video?id=" + link} style={{textDecoration:"none"}}>
      <Card style={{ width: '100%', height: '100%' }}>
        <Card.Img variant="top" src={data.snippet.thumbnails.medium.url} />
        <Card.Body>
          <Card.Title>{data.snippet.title}</Card.Title>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </Link>
      </Col>
  );
}
