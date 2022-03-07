import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Detail() {
  const navigate = useNavigate();
  function handleClick() {
    // path={`${process.env.PUBLIC_URL}/`}
    navigate(`${process.env.PUBLIC_URL}`, "/");
  }
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(id);
  return (
    <div>
      <h1>Detail</h1>
      <button onClick={handleClick}>홈으로</button>
    </div>
  );
}

export default Detail;
