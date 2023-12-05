import React, { useState } from 'react';
import '../Carousel.css';

import { Container, Row, Col, Button } from 'react-bootstrap';

const Carousel = ({ posts }) => {
    const [index, setIndex] = useState(0);

    const goToNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % posts.length);
    };

    const goToPrev = () => {
        setIndex((prevIndex) => (prevIndex - 1 + posts.length) % posts.length);
    };

    return (
        <Container>
            <div className="d-flex justify-content-center">

                <div className="custom-carousel">
                    <Button className="prev" onClick={goToPrev}>-</Button>

                    {posts.map((post, i) => (
                        <div
                            key={post.id}
                            className={`carousel-slide ${i === index ? 'active' : ''}`}
                        >
                            <img className="d-block w-100" src={post.image} alt={post.title} />
                            <div className="carousel-caption">
                                <h3>{post.title}</h3>
                                <p>{post.content}</p>
                            </div>
                        </div>
                    ))}
                    <Button className="next" onClick={goToNext}>+</Button>

                </div>

            </div>
        </Container >
    );
};

export default Carousel;
