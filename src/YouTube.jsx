import axios from 'axios'
import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function YouTube() {
    const [videos, setVideo] = useState([])
    //using useEffect function to call api

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await axios.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyBeAdrlHWZEghTa8Cc0TDDnGnJL5X8_H6A&part=snippet&type=video&q=music")
                setVideo(response.data.items);
            } catch (error) {
                console.error("error", error)
            }
        }
        fetchdata();
    },[]);
    return (
        <Container className='mb-5'>
        <Row md={3}>
       
            {videos.map((value, index) => (
                <VideoCard key={index} data={value} />
            ))}
        </Row>
        </Container>
        
    )
}
