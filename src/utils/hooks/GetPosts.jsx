import axios from "axios";
import { useEffect, useState } from "react";

export const useGetPosts = (url) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getPosts = async () => {
      try {
        const response = await axios.get(url);
        const datas = await response.data;

        if (response.status) {
          setPosts(datas);
          console.log(posts);
          setIsLoading(false);
        } else {
          console.log("no data avaible");
        }
      } catch (e) {
        setError(true);
        console.log("an error occured", e);
      }
    };

    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [posts, isLoading, error];
};
