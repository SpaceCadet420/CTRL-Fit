import React from 'react';

interface FitRatingProps {
  score: number;
  xp: number;
}

const FitRating: React.FC<FitRatingProps> = ({ score, xp }) => {
  return (
    <div className="text-center my-4">
      <h2 className="text-2xl">Fit Score: {score} / 110</h2>
      <div className="bg-gray-300 w-full h-4 rounded-full overflow-hidden">
        <div
          className="bg-green-500 h-full"
          style={{ width: `${(xp % 100)}%` }}
        ></div>
      </div>
      <p>{Math.floor(xp / 100)} Level</p>
    </div>
  );
};

export default FitRating;
