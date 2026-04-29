import React, { useState, useEffect } from "react";

const response = {
  page: 1,
  results: [
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      image: "https://picsum.photos/500",
    }
  ]
};

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center py-5 px-8 bg-white border-b border-gray-100">
      <div className="text-xl font-bold tracking-tight text-gray-900">Nicholas.</div>
      <div className="flex gap-8 text-sm font-medium text-gray-500">
        <a href="#home" className="hover:text-black transition-colors">Home</a>
        <a href="#profile" className="hover:text-black transition-colors">Profile</a>
        <a href="#contact" className="hover:text-black transition-colors">Contact</a>
      </div>
    </nav>
  );
};

const CardList = () => {
  return (
    <div className="py-12 px-8 max-w-6xl mx-auto">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Recent Articles</h2>
        <p className="text-gray-500 mt-2 text-sm">Discover my latest thoughts and updates.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {response.results.map((item) => (
          <div key={item.id} className="group cursor-pointer flex flex-col">
            <div className="overflow-hidden rounded-xl bg-gray-100 mb-4 aspect-[4/3]">
              <img 
                src={`${item.image}?random=${item.id}`} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 leading-tight mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const CounterDemo = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      alert(`Selamat! Anda mencapai angka ${count} (Kelipatan 10)`);
    }
  }, [count]);

  return (
    <div className="py-20 px-8 max-w-md mx-auto text-center">
      <h2 className="text-xl font-semibold text-gray-900 mb-2">Counter Interactive</h2>
      <p className="text-sm text-gray-500 mb-8">Try reaching a multiple of 10.</p>
      
      <div className="bg-gray-50 py-10 px-8 rounded-2xl border border-gray-100 shadow-sm">
        <div className="text-6xl font-light text-gray-900 mb-10 tracking-tighter">
          {count}
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setCount(count - 1)}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 hover:border-gray-400 text-gray-600 hover:text-black transition-all bg-white"
          >
            -
          </button>
          <button
            onClick={() => setCount(0)}
            className="px-6 h-12 flex items-center justify-center rounded-full bg-gray-900 hover:bg-black text-white text-sm font-medium transition-all"
          >
            Reset
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 hover:border-gray-400 text-gray-600 hover:text-black transition-all bg-white"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-900">
      <NavBar />
      <main>
        <CounterDemo />
        <div className="max-w-4xl mx-auto border-t border-gray-100 line-h"></div>
        <CardList />
      </main>
    </div>
  );
}

export default App;