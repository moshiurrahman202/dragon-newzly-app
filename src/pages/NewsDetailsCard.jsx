
import { Link } from "react-router";


const NewsDetailsCard = ({ detailNews }) => {
    console.log(detailNews);
    
    return (
        <div className="space-y-5">
            <img className="w-full object-cover" src={detailNews.image_url} alt="details news image" />
            <h1 className="font-bold">{detailNews.title}</h1>
            <p>{detailNews.details
            }</p>
            <Link to={`/category/${detailNews.category_id}`} className="bg-secondary text-white py-2 px-4 rounded">Back to Category</Link>

        </div>
    );
};

export default NewsDetailsCard;