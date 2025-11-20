import { useLoaderData, useParams } from "react-router";


const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
    let news = [];

  if (id == "0") {
    news = data;
  } 
  else if (id == "1") {
    news = data.filter(item => item.others.is_today_pick === true);
  } 
  else {
    news = data.filter(item => item.category_id == id);
  }

    return (
        <div>

            <h1>category news{news.length}</h1>

        </div>
    );
};

export default CategoryNews;