import axios from "axios";
import { useEffect, useState } from "react";

export const useGetPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getPosts = async (url) => {
      try {
        const response = await axios.get(url);
        const datas = await response.data;

        if (datas) {
          setPosts(datas);
          setIsLoading(false);
        }
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
        setError(false);
      }
    };

    getPosts();
  }, []);

  return [posts, isLoading, error];
};
