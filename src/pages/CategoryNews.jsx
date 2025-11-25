import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";


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
// console.log(news);

    return (
        <div>
            <h1 className="font-bold">Dragon News Home</h1>
            <div className="grid grid-cols-1 gap-2">
              {
                  news.map(mnews => <NewsCard key={mnews.id} news={mnews}></NewsCard>)
              }
            </div>

        </div>
    );
};

export default CategoryNews;