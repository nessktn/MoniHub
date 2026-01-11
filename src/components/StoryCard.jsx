export function StoryCard({ id, photo, title, duration, excerpt, onSelect }) {
  return (
    <button
      onClick={() => onSelect(id)}
      className="flex-shrink-0 w-72 h-96 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-gray-200"
    >
      {/* Image */}
      <div className="w-full h-40 bg-gradient-to-br from-navy-100 to-navy-200 flex items-center justify-center overflow-hidden">
        {photo ? (
          <img src={photo} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-6xl">📸</div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col justify-between h-56">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-navy-900 text-base text-left">{title}</h3>
            <span className="text-xs bg-navy-100 text-navy-900 px-2 py-1 rounded-full whitespace-nowrap ml-2">
              {duration}
            </span>
          </div>
          <p className="text-gray-600 text-sm text-left line-clamp-3">{excerpt}</p>
        </div>
        <button className="w-full bg-navy-900 text-white py-2 rounded font-medium text-sm hover:bg-navy-800 transition-colors">
          Read Story
        </button>
      </div>
    </button>
  );
}
