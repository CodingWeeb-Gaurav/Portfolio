import React from 'react';
import { FaGithub, FaCode, FaChartLine } from 'react-icons/fa';

const GitHubCard = ({ data, loading, logo, gradientColors, borderColor }) => {
  const LoadingSkeleton = () => <div className="loading-skeleton h-16 rounded-xl"></div>;

  return (
    <div className="platform-banner glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-500 group border-2 border-transparent hover:border-[${borderColor}]">
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300">
          <img src={logo} alt="GitHub Logo" className="w-10 h-10 object-contain" />
        </div>
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-[${gradientColors[0]}] to-[${gradientColors[1]}] bg-clip-text text-transparent">
            GitHub
          </h2>
          <p className="text-gray-400 text-sm">Version Control & Projects</p>
        </div>
      </div>

      {loading ? (
        <div className="space-y-4">
          <LoadingSkeleton />
          <LoadingSkeleton />
          <div className="h-32">
            <LoadingSkeleton />
          </div>
        </div>
      ) : data ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-navy-600/30 rounded-xl">
            <div className="flex items-center">
              <FaCode className="text-blue-400 mr-3" />
              <span className="text-gray-300">Public Repos</span>
            </div>
            <span className="font-bold text-white">{data.public_repos.length}</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-navy-600/30 rounded-xl">
            <div className="flex items-center">
              <FaChartLine className="text-green-400 mr-3" />
              <span className="text-gray-300">Recent Commits</span>
            </div>
            <span className="font-bold text-white">{data.total_commits_last_30_days}</span>
          </div>
          <a
            href={`https://github.com/${data.username}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[${gradientColors[0]}] to-[${gradientColors[1]}] rounded-xl hover:from-[${gradientColors[0]}] hover:to-[${gradientColors[1]}] transition-all duration-300 font-medium group-hover:scale-105"
          >
            <FaGithub className="mr-2" />
            View Profile
          </a>
        </div>
      ) : (
        <div className="h-32 flex items-center justify-center">
          <p className="text-gray-400">Failed to load GitHub stats</p>
        </div>
      )}
      <style jsx>{`
        .platform-banner:hover {
          border-color: ${borderColor}/50;
        }
      `}</style>
    </div>
  );
};

export default GitHubCard;