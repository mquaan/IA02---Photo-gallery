import { useEffect, useState } from 'react';
import ImageList from '../components/ImageList';
import Loading from '../components/Loading';
import { useImageContext } from '../context/ImageContext';

const HomePage = () => {
    // const [images, setImages] = useState([]);
    const { images, setImages } = useImageContext();
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    // Hàm gọi API lấy ảnh từ Unsplash
    const fetchImages = async (page) => {
        setIsLoading(true);
        try {
            const response = await fetch(
                `https://api.unsplash.com/photos?page=${page}&per_page=20`, {
                headers: {
                    Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_API_KEY}`
                }
            }
            );

            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();
            setImages((prevImages) => [...prevImages, ...data]);
        } catch (error) {
            console.error("Error loading images:", error);
            alert(error.message); // Hiển thị lỗi cho người dùng
        } finally {
            setIsLoading(false);
        }
    };

    // Tải ảnh khi trang tăng lên
    useEffect(() => {
        fetchImages(page);
    }, [page]);

    // Xử lý sự kiện cuộn
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !isLoading) {
                setPage((prevPage) => prevPage + 1);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isLoading]);

    return (
        <div>
            <header style={{ padding: "1rem", textAlign: "center", backgroundColor: "#f8f9fa" }}>
                <h1> IA02 - Photo Gallery - 21127143</h1>
                <p>Explore stunning images from Unsplash</p>
            </header>
            <ImageList images={images}/>
            {isLoading && <Loading />}
        </div>
    );
};

export default HomePage;