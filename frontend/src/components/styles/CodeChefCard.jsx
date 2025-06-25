import React from 'react';
import { FaStar, FaChartLine } from 'react-icons/fa';

const CodeChefCard = ({ data, loading, logo, gradientColors, borderColor }) => {
  const LoadingSkeleton = () => <div className="loading-skeleton h-16 rounded-xl bg-navy-600/30"></div>;

  // Optional: Define star-color mapping
  const getStarColor = (stars) => {
    const count = parseInt(stars) || 0;
    if (count >= 7) return '#ff0000'; // red
    if (count === 6) return '#ff8c00'; // orange
    if (count === 5) return '#FFD700'; // gold
    if (count === 4) return '#00ffff'; // cyan
    if (count === 3) return '#00ff00'; // green
    if (count === 2) return '#0000ff'; // blue
    return '#808080'; // gray
  };

  const starColor = getStarColor(data?.stars);

  return (
    <div
      className="platform-banner rounded-2xl p-6 hover:scale-105 transition-all duration-500 group border-2"
      style={{
        background: 'linear-gradient(135deg, rgba(60,30,0,0.3), rgba(50,0,0,0.3))',
        backdropFilter: 'blur(10px)',
        borderColor: borderColor,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold" style={{ 
          background: 'linear-gradient(to right,rgb(113, 65, 25),rgb(220, 142, 47))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          CodeChef
        </h2>
        {!loading && data?.stars && (
          <div 
            className="text-md px-3 py-1 rounded-full font-semibold"
            style={{ 
              backgroundColor: starColor,
              color: '#000'
            }}
          >
            {data.stars.toUpperCase()}
          </div>
        )}
      </div>

      {loading ? (
        <div className="space-y-4">
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
        </div>
      ) : data ? (
        <div className="space-y-6">
          {/* Avatar + Username */}
          <div className="flex items-center space-x-4">
            <a href={data.profile} target="_blank" rel="noreferrer" className="group">
              <img
                src={data.avatar}
                alt="Avatar"
                className="w-20 h-20 rounded-full border-2 border-white object-cover group-hover:border-yellow-400 transition-all duration-300 cursor-pointer"
                style={{ borderColor: starColor }}
              />
            </a>
            <div>
              <a href={data.profile} target="_blank" rel="noreferrer" className="flex items-center group">
                <h3 
                  className="text-2xl font-bold group-hover:text-yellow-400 transition-all duration-300 cursor-pointer"
                  style={{ color: starColor }}
                >
                  {data.username} <span className="text-xl ml-2 opacity-70 group-hover:opacity-100">🔗</span>
                </h3>
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-between p-4 bg-navy-600/40 rounded-xl">
              <div className="flex items-center">
                <FaStar className="mr-2 text-yellow-400" />
                <span className="text-gray-300">Contest Rating</span>
              </div>
              <span className="font-bold" style={{ color: starColor }}>
                {data.rating}
              </span>
            </div>
            <div className="flex items-center justify-between p-4 bg-navy-600/40 rounded-xl">
              <div className="flex items-center">
                <FaChartLine className="mr-2 text-green-400" />
                <span className="text-gray-300">Max Rating</span>
              </div>
              <span className="font-bold text-white">{data.maxRating}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-32 flex items-center justify-center">
          <p className="text-gray-400">Failed to load CodeChef stats</p>
        </div>
      )}
    </div>
  );
};

export default CodeChefCard;
