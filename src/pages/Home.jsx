import FeaturedPost from '../components/FeaturedPost';
import PostCard from '../components/PostCard';

const posts = [
    {
        image: "/images/travel.jpg",
        date: "April 15, 2024",
        category: "Travel",
        title: "A Guide to Solo Travel in Japan"
    },
    {
        image: "/images/nature.jpg",
        date: "April 10, 2024",
        category: "Photography",
        title: "How to Capture Cinematic Nature Shots"
    },
    {
        image: "/images/drone.jpg",
        date: "April 5, 2024",
        title: "Nature from Above: Drone Perspectives"
    },
    {
        image: "/images/beach.jpg",
        date: "April 3, 2024",
        category: "Travel",
        title: "Exploring Hidden Beaches"
    },
];

const Home = () => (
    <main className="container mx-auto px-4 py-8">
        <FeaturedPost />
        <h2 className="text-xl font-semibold mb-6">Latest Posts</h2>
        <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
                <PostCard key={idx} {...post} />
            ))}
        </div>
    </main>
);

export default Home;
