import { useEffect, useState, useCallback, useRef } from "react";
import axios from "axios";
import PhotoGrid from "../components/PhotoGrid";
import LoadingSpinner from "../components/LoadingSpinner";

const HomePage = () => {
	const [photos, setPhotos] = useState([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const [hasMore, setHasMore] = useState(true);	

	const loadingRef = useRef(loading);
	const hasMoreRef = useRef(hasMore);

	// Cập nhật loading và hasMore trong ref để truy cập mới nhất
	useEffect(() => {
		loadingRef.current = loading;
		hasMoreRef.current = hasMore;
	}, [loading, hasMore]);

	const fetchPhotos = useCallback(async () => {
		if (loadingRef.current || !hasMoreRef.current) return;

		setLoading(true);
		try {
			const response = await axios.get("https://api.unsplash.com/photos", {
				params: { page, per_page: 10 },
				headers: {
					Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_API_KEY}`,
				},
			});

			const newPhotos = response.data;
			if (newPhotos.length > 0) {
				// Loại bỏ ảnh trùng lặp
				setPhotos((prev) => [
					...prev,
					...newPhotos.filter(
						(photo) => !prev.some((p) => p.id === photo.id)
					),
				]);
			} else {
				setHasMore(false); 
			}
		} catch (error) {
			console.error("Error fetching photos:", error);
		} finally {
			setLoading(false);
			setPage((prevPage) => prevPage + 1); // Cập nhật page sau khi tải xong
		}
	}, [page]);

	useEffect(() => {
		fetchPhotos();
	}, [fetchPhotos]);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = document.documentElement.scrollTop;
			const windowHeight = window.innerHeight;
			const scrollHeight = document.documentElement.scrollHeight;

			// Chỉ tải khi cuộn tới cuối trang
			if (scrollTop + windowHeight >= scrollHeight) {
				if (!loadingRef.current && hasMoreRef.current) fetchPhotos();
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [fetchPhotos]);

	return (
		<div>
			<PhotoGrid photos={photos} />
			{loading && <LoadingSpinner />}
		</div>
	);
};

export default HomePage;
