// import React, { useState } from "react";
// import { PieChart, Pie, Cell, Sector } from "recharts";

// const CustomPieChart = () => {
//   const [data, setData] = useState([
//     { name: "Part 1", value: 25 },
//     { name: "Part 2", value: 25 },
//     { name: "Part 3", value: 25 },
//     { name: "Part 4", value: 25 },
//   ]);

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// const CustomPieChart = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const onPieClick = (data, index) => {
//     if (activeIndex === index) {
//       setActiveIndex(null);
//     } else {
//       const newData = [...data]; // Create a copy of the data array
//       const newValue = newData[index].value / 4;
  
//       newData[index].value = newValue;
  
//       for (let i = 1; i <= 3; i++) {
//         newData.splice(index + i, 0, { name: `Part ${index + i + 1}`, value: newValue });
//       }
  
//       setActiveIndex(index);
//       setData(newData); // Update the data state with the new data array
//     }
  
//   };


//   return (
//     <PieChart width={400} height={400}>
//       <Pie
//         activeIndex={activeIndex}
//         activeShape={({ cx, cy, innerRadius, outerRadius, startAngle, endAngle }) => (
//           <g>
//             <text x={cx} y={cy} dy={8} textAnchor="middle" fill={COLORS[activeIndex]}>
//               Clicked
//             </text>
//             <Sector
//               cx={cx}
//               cy={cy}
//               innerRadius={innerRadius}
//               outerRadius={outerRadius}
//               startAngle={startAngle}
//               endAngle={(endAngle - startAngle) / 4 + startAngle}
//               fill={COLORS[activeIndex]}
//             />
//             <Sector
//               cx={cx}
//               cy={cy}
//               innerRadius={innerRadius}
//               outerRadius={outerRadius}
//               startAngle={(endAngle - startAngle) / 4 + startAngle}
//               endAngle={(endAngle - startAngle) / 2 + startAngle}
//               fill={COLORS[(activeIndex + 1) % COLORS.length]}
//             />
//             <Sector
//               cx={cx}
//               cy={cy}
//               innerRadius={innerRadius}
//               outerRadius={outerRadius}
//               startAngle={(endAngle - startAngle) / 2 + startAngle}
//               endAngle={(endAngle - startAngle) * 3 / 4 + startAngle}
//               fill={COLORS[(activeIndex + 2) % COLORS.length]}
//             />
//             <Sector
//               cx={cx}
//               cy={cy}
//               innerRadius={innerRadius}
//               outerRadius={outerRadius}
//               startAngle={(endAngle - startAngle) * 3 / 4 + startAngle}
//               endAngle={endAngle}
//               fill={COLORS[(activeIndex + 3) % COLORS.length]}
//             />
//           </g>
//         )}
//         data={data}
//         dataKey="value"
//         cx={200}
//         cy={200}
//         outerRadius={80}
//         fill="#8884d8"
//         onClick={(data, index) => onPieClick(data, index)}
//       >
//         {data.map((entry, index) => (
//           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//         ))}
//       </Pie>
//     </PieChart>
//   );
// };
// }




// export default CustomPieChart;
// import React, { useState } from "react";
// import { PieChart, Pie, Cell, Sector } from "recharts";

// const initialData = [ // Define the initial data
//   { name: "Part 1", value: 25 },
//   { name: "Part 2", value: 25 },
//   { name: "Part 3", value: 25 },
//   { name: "Part 4", value: 25 },
// ];

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// const CustomPieChart = () => {
//   const [data, setData] = useState(initialData); // Define the state variable for data
//   const [activeIndex, setActiveIndex] = useState(null);

//   const onPieClick = (data, index) => {
//     if (activeIndex === index) {
//       setActiveIndex(null);
//     } else {
//       const newData = [...data];
//       const newValue = newData[index].value / 4;

//       newData[index].value = newValue;

//       for (let i = 1; i <= 3; i++) {
//         newData.splice(index + i, 0, { name: `Part ${index + i + 1}`, value: newValue });
//       }

//       setActiveIndex(index);
//       setData(newData); // Update the data state with the new data array
//     }
//   };

//   return (
//     <PieChart width={400} height={400}>
//       <Pie
//         activeIndex={activeIndex}
//         activeShape={({ cx, cy, innerRadius, outerRadius, startAngle, endAngle }) => (
//           <g>
//             <text x={cx} y={cy} dy={8} textAnchor="middle" fill={COLORS[activeIndex]}>
//               Clicked
//             </text>
//             <Sector
//               cx={cx}
//               cy={cy}
//               innerRadius={innerRadius}
//               outerRadius={outerRadius}
//               startAngle={startAngle}
//               endAngle={(endAngle - startAngle) / 4 + startAngle}
//               fill={COLORS[activeIndex]}
//             />
//             <Sector
//               cx={cx}
//               cy={cy}
//               innerRadius={innerRadius}
//               outerRadius={outerRadius}
//               startAngle={(endAngle - startAngle) / 4 + startAngle}
//               endAngle={(endAngle - startAngle) / 2 + startAngle}
//               fill={COLORS[(activeIndex + 1) % COLORS.length]}
//             />
//             <Sector
//               cx={cx}
//               cy={cy}
//               innerRadius={innerRadius}
//               outerRadius={outerRadius}
//               startAngle={(endAngle - startAngle) / 2 + startAngle}
//               endAngle={(endAngle - startAngle) * 3 / 4 + startAngle}
//               fill={COLORS[(activeIndex + 2) % COLORS.length]}
//             />
//             <Sector
//               cx={cx}
//               cy={cy}
//               innerRadius={innerRadius}
//               outerRadius={outerRadius}
//               startAngle={(endAngle - startAngle) * 3 / 4 + startAngle}
//               endAngle={endAngle}
//               fill={COLORS[(activeIndex + 3) % COLORS.length]}
//             />
//           </g>
//         )}
//         data={data}
//         dataKey="value"
//         cx={200}
//         cy={200}
//         outerRadius={80}
//         fill="#8884d8"
//         onClick={(data, index) => onPieClick(data, index)}
//       >
//         {data.map((entry, index) => (
//           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
//         )}
//       </Pie>
//     </PieChart>
//   );
// };

// export default CustomPieChart;

import React, { useState } from "react";
import { PieChart, Pie, Cell, Sector } from "recharts";

const initialData = [
  { name: "Part 1", value: 25 },
  { name: "Part 2", value: 25 },
  { name: "Part 3", value: 25 },
  { name: "Part 4", value: 25 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const CustomPieChart = () => {
  const [data, setData] = useState(initialData);
  const [activeIndex, setActiveIndex] = useState(null);

  const onPieClick = (clickedData, index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      const newData = [...data];
      const newValue = newData[index].value / 4;

      newData[index].value = newValue;

      for (let i = 1; i <= 3; i++) {
        newData.splice(index + i, 0, { name: `Part ${index + i + 1}`, value: newValue });
      }

      setActiveIndex(index);
      setData(newData);
    }
  };

  return (
    <PieChart width={400} height={400}>
      <Pie
        activeIndex={activeIndex}
        activeShape={({ cx, cy, innerRadius, outerRadius, startAngle, endAngle }) => (
          <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={COLORS[activeIndex]}>
              Clicked
            </text>
            <Sector
              cx={cx}
              cy={cy}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              startAngle={startAngle}
              endAngle={(endAngle - startAngle) / 4 + startAngle}
              fill={COLORS[activeIndex]}
            />
            <Sector
              cx={cx}
              cy={cy}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              startAngle={(endAngle - startAngle) / 4 + startAngle}
              endAngle={(endAngle - startAngle) / 2 + startAngle}
              fill={COLORS[(activeIndex + 1) % COLORS.length]}
            />
            <Sector
              cx={cx}
              cy={cy}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              startAngle={(endAngle - startAngle) / 2 + startAngle}
              endAngle={(endAngle - startAngle) * 3 / 4 + startAngle}
              fill={COLORS[(activeIndex + 2) % COLORS.length]}
            />
            <Sector
              cx={cx}
              cy={cy}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              startAngle={(endAngle - startAngle) * 3 / 4 + startAngle}
              endAngle={endAngle}
              fill={COLORS[(activeIndex + 3) % COLORS.length]}
            />
          </g>
        )}
        data={data}
        dataKey="value"
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        onClick={(clickedData, index) => onPieClick(clickedData, index)}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};



export default CustomPieChart;

