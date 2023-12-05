import TheHeader from './components/TheHeader';
import TheFooter from './components/TheFooter';
import Carousel from './components/Carousel';
import { useState } from 'react';
import { number } from 'prop-types';
import './App.css';

const posts = [
  {
    id: 1,
    title: "Titolo del Post",
    image: "https://picsum.photos/id/1/600/400",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["html", "css"],
    published: true,
  },
  {
    id: 2,
    title: "Titolo del Post",
    image: "https://picsum.photos/id/2/600/400",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["js", "css"],
    published: true,
  },
  {
    id: 3,
    title: "Titolo del Post",
    image: "https://picsum.photos/id/3/600/400",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["js", "php"],
    published: true,
  },
  {
    id: 4,
    title: "Titolo del Post",
    image: "https://picsum.photos/id/4/600/400",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["html"],
    published: false,
  },
];

function App() {
  const [numero, setNumero] = useState(0);

  return (
    <>
      <div id='layout'>
        <TheHeader />
        <Carousel posts={posts} />
        <TheFooter />
      </div>

    </>
  );
}

export default App;