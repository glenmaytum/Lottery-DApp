import Header from "../header";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-light-primary">
      <Header />
      {children}
    </div>
  );
}

// <header className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 lg:fixed lg:w-full lg:top-0 lg:left-0 lg:z-40">
//       <button className="flex items-center justify-center h-12 px-4 text-sm font-semibold text-center text-white rounded-md lg:h-10 bgmainlightmode">
//         Connected
//       </button>
// </header>

//
// border-color: rgb(229 231 235/var(--tw-border-opacity))
// .border-gray-200

// border-color: rgb(55 65 81/var(--tw-border-opacity));
// border-gray-700
