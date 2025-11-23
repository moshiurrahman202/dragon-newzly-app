import { FaShareAlt } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { Link } from "react-router";
export default function NewsCard({ news }) {
  return (
    <div className=" rounded-2xl p-4 shadow-md space-y-3">
      {/* Author */}
      <div className="flex items-center gap-3">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex justify-between w-full">
          <div>
            <h3 className="font-semibold text-sm">{news.author.name}</h3>
          <p className="text-xs text-gray-500">
            {new Date(news.author.published_date).toLocaleDateString()}
          </p>
          </div>
          <div className="flex gap-2">
            <BsBookmark />
            <FaShareAlt />
          </div>
        </div>
      </div>

      {/* Title */}
      <h2 className="font-bold text-lg leading-tight">{news.title}</h2>

      {/* Image */}
      <img
        src={news.image_url}
        alt={news.title}
        className="w-full rounded-xl object-cover"
      />

      {/* Details (shortened) */}
      <p className="text-sm text-gray-600">
        {news.details.slice(0, 180)}...
        <Link className="underline text-blue-500" to={`/newsDetails/${news.id}`}>See More</Link>
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center pt-2">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-500">
          <span className="text-xl">★</span>
          <span>{news.rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1 text-gray-600 text-sm">
          <span>👁</span>
          <span>{news.total_view}</span>
        </div>
      </div>
    </div>
  );
}
