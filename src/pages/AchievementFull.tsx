// import React from "react";
// import { useParams } from "react-router-dom";
// import { useData } from "../context/DataContext";
// import ScrollToTop from "../components/ScrollToTop";

// const AchievementFull: React.FC = () => {
//     const { id } = useParams<{ id: string }>();
//     const { colleageAchievementData } = useData();

//     const achievement = colleageAchievementData.find((c) => c.id === Number(id));
//     if (!achievement) {
//         return (
//             <div className="pt-20 text-center text-red-500 text-xl font-semibold">
//                 achievement not found
//             </div>
//         );
//     }

//     return (
//         <div className="pt-[10%] px-[4%] sm:px-8 md:px-[16%] lg:px-[2%] max-w-6xl mx-auto space-y-8 pb-10">
//             {/* Image */}
//             <div className="overflow-hidden rounded-lg shadow-lg">
//                 <img src={achievement.img} alt={achievement.name} className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"/>
//             </div>
//             <div className="text-right italic">{achievement.date}</div>

//             {/* Heading & Description */}
//             <div className="text-center space-y-4">
//                 <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-600">
//                     {achievement.name}
//                 </h1>
//                 {achievement.desc ? <p className="leading-relaxed">{achievement.desc}</p> : <br/> }
//             </div>

//             <ScrollToTop />
//         </div>
//     );
// };

// export default AchievementFull;

import React from "react";
import { useParams } from "react-router-dom";
import { useData } from "../context/DataContext";
import ScrollToTop from "../components/ScrollToTop";

const AchievementFull: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { colleageAchievementData } = useData();

  const achievement = colleageAchievementData.find((c) => c.id === Number(id));
  if (!achievement) {
    return (
      <div className="pt-20 text-center text-red-500 text-xl font-semibold">
        achievement not found
      </div>
    );
  }

  return (
    <div className="pt-20 px-4 sm:px-8 md:px-16 lg:px-24 max-w-5xl mx-auto space-y-8 pb-10">
      {/* Image */}
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          src={achievement.img}
          alt={achievement.name}
          className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="text-right italic text-sm sm:text-base">{achievement.date}</div>

      {/* Heading & Description */}
      <div className="text-center space-y-4 px-2 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-600">
          {achievement.name}
        </h1>
        {achievement.desc ? (
          <p className="leading-relaxed text-sm sm:text-base md:text-lg">{achievement.desc}</p>
        ) : (
          <br />
        )}
      </div>

      <ScrollToTop />
    </div>
  );
};

export default AchievementFull;
