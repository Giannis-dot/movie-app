import Search from "./components/Search.js";

const App = () => {
  return (
    <main>
      <div className='pattern'/>

      <div className='wrapper'>
        <header>
          <img src="/assets/hero-img.png" alt="Hero Banner" />
          <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without The Hustle</h1>
        </header>
      </div>

      <Search />
    </main>
  );
}

export default App;