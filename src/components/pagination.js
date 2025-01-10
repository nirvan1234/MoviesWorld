// import React, { useState, useEffect } from 'react';

// export default function App(props) {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(1);
//   const [noPerPage, setNoPerPage] = useState(10);
//   const [intialPageFeed, setIntialPageFeed] = useState(0);
//   const [endPageFeed, setEndPageFeed] = useState(10);

//   useEffect(() => {
//     fetchData();
//   }, [page]);

//   const fetchData = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const json = await response.json();
//     const pageAsPerData = json.slice(intialPageFeed, endPageFeed);
//     setData(pageAsPerData);

//   }
//   const paginationForward = (p) => {

//     setPage(p => p + 1)
//     setIntialPageFeed(intialPageFeed => intialPageFeed + 10);
//     setEndPageFeed(endPageFeed => endPageFeed + 10);

//   }

//   const paginationBacward = (p) => {
//     setPage(p => p - 1);
//     setIntialPageFeed(intialPageFeed => intialPageFeed - 10);
//     setEndPageFeed(endPageFeed => endPageFeed - 10);
//   }

//   console.log(data);
//   return (
//     <div className='App'>
//       <div>
//         {
//           data.map((item, index) => (
//             <div className="bg-yellow-400" key={index}>
//               <h1>{item.id}</h1>
//               <h2>{item.title}</h2>
//               <h2>{item.body}</h2>
//             </div>
//           ))
//         }
//         <button className='bg-slate-500 px-11 mx-72 ' onClick={() => paginationBacward(page)}>Change Page backward</button>
//         <button className='bg-slate-500 px-11 mx-10' onClick={() => paginationForward(page)}>Change Page forward</button>
//       </div>
//     </div>
//   );
// }