// // 3-1 ~ 3
// // Modifiers
// export default function Home() {
//   return (
//     <main className="bg-gray-100 h-screen flex items-center justify-center p-5 dark:bg-gray-700">
//       <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm dark:bg-gray-600">
//         <div className="flex justify-between items-center">
//           <div className="flex flex-col">
//             <span className="text-gray-600 font-semibold -mb-1 dark:text-gray-300">
//               In transit
//             </span>
//             <span className="text-4xl font-semibold dark:text-white">
//               Coolblue
//             </span>
//           </div>
//           <div className="size-12 rounded-full bg-orange-400" />
//         </div>
//         <div className="my-2 flex items-center gap-2">
//           <span className="bg-green-400 text-white uppercase px-2.5 py-1.5 text-sm font-medium rounded-full transition hover:bg-green-500 hover:scale-125">
//             Today
//           </span>
//           <span className="dark:text-gray-100">9:30-10:30</span>
//         </div>
//         <div className="relative">
//           <div className="bg-gray-200 absolute rounded-full w-full h-2" />
//           <div className="bg-green-400 absolute rounded-full w-2/3 h-2" />
//         </div>
//         <div className="flex justify-between items-center mt-5 text-gray-600 dark:text-gray-300">
//           <span>Expected</span>
//           <span>Sorting center</span>
//           <span>In transit</span>
//           <span className="text-gray-400 dark:text-gray-500">Delivered</span>
//         </div>
//       </div>
//     </main>
//   );
// }

// // ---------------------------------------------------------
// // 3-4
// // Tailwind Variables
// // input 스타일 꾸미기
// // focus, active state
// // ring class
// export default function Home() {
//   return (
//     <main className="bg-gray-100 h-screen flex items-center justify-center p-5 ">
//       <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-2">
//         <input
//           className="w-full rounded-full h-12 bg-gray-200 pl-5 outline-none ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow"
//           type="text"
//           placeholder="Search here..."
//         />
//         <button className="bg-black text-white py-2 rounded-full active:scale-90 focus:scale-90 transition-transform font-medium outline-none">
//           Search
//         </button>
//       </div>
//     </main>
//   );
// }

// // ---------------------------------------------------------
// // 3-5
// // Responsive Modifiers
// // 반응형 만들기
// export default function Home() {
//   return (
//     <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 h-screen flex items-center justify-center p-5 ">
//       <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col md:flex-row gap-2">
//         <input
//           className="w-full rounded-full h-12 bg-gray-200 pl-5 outline-none ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow"
//           type="text"
//           placeholder="Search here..."
//         />
//         <button className="bg-black text-white py-2 rounded-full active:scale-90 focus:scale-90 transition-transform font-medium outline-none md:px-10">
//           Search
//         </button>
//       </div>
//     </main>
//   );
// }

// // ---------------------------------------------------------
// // 3-6
// // Form Modifiers
// // 그라데이션
// // invalid
// // peer

// export default function Home() {
//   return (
//     <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 h-screen flex items-center justify-center p-5 ">
//       <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col md:flex-row gap-2">
//         <input
//           className="w-full rounded-full h-12 bg-gray-200 pl-5 outline-none ring ring-transparent focus:ring-green-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow invalid:focus:ring-red-500 peer"
//           type="email"
//           required
//           placeholder="Email address"
//         />
//         <span className="text-red-500 font-medium hidden peer-invalid:block">
//           Email is required.
//         </span>
//         <button className=" text-white py-2 rounded-full active:scale-90 focus:scale-90 transition-transform font-medium outline-none md:px-10 bg-black peer-required:bg-green-500">
//           Log in
//         </button>
//       </div>
//     </main>
//   );
// }

// // ---------------------------------------------------------
// // 3-7
// // State Modifiers
// // 자식 선택자
// // *:
// // has

// export default function Home() {
//   return (
//     <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 h-screen flex items-center justify-center p-5">
//       <div
//         className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col md:flex-row gap-2 *:outline-none ring ring-transparent transition-shadow
//       has-[:invalid]:ring-red-100"
//       >
//         <input
//           className="w-full rounded-full h-10 bg-gray-200 pl-5  ring ring-transparent focus:ring-green-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow invalid:focus:ring-red-500 peer"
//           type="text"
//           required
//           placeholder="Email address"
//         />
//         <span className="text-red-500 font-medium hidden peer-invalid:block ">
//           Email is required.
//         </span>
//         <button className="text-white py-2 rounded-full active:scale-90  transition-transform font-medium  md:px-10 bg-black ">
//           Log in
//         </button>
//       </div>
//     </main>
//   );
// }

// ---------------------------------------------------------
// 3-8
// Lists and Animations
// odd: , even: 홀짝 스타일 주기
// first, last
// animation bounce, spin

export default function Home() {
  return (
    <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-3">
        {['Nico', 'Me', 'You', 'Yourself'].map((person, index) => (
          <div key={index} className="flex items-center gap-5 ">
            <div className="size-10 bg-blue-400 rounded-full" />
            <span className="text-lg font-medium">{person}</span>
            <div className="size-6 animate-spin bg-red-500 text-white flex items-center justify-center rounded-full">
              <span>⏳</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
