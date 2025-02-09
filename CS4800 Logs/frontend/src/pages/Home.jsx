function Home() {
  return (
    <div className="Home">
      <h1 className="home-title">Welcome to Nameless.</h1>
      
      <div className="home-container">
        <img 
          src="/path-to-your-image.jpg" 
          alt="Nameless Company" 
          className="home-image"
        />
        <div className="home-content">
          <p>
          Nameless offers a revolutionary streaming platform that brings cinema directly to your screen. 
          Our curated collection combines timeless classics with cutting-edge new releases, 
          offering a seamless and immersive viewing experience for every movie enthusiast.
          </p>
          <div style={{ height: '2rem' }} />
          <p>
          Whether you&apos;re a casual viewer or a dedicated movie lover, 
          Nameless provides the perfect space to discover, explore, and experience the magic of film. 
          With our powerful recommendations, finding your next favorite movie has never been easier.
          </p>
        </div>
      </div>

      <p className="copyright-message">&copy; Copyright Nameless Incorporated, 2025</p>
    </div>
  );
}

export default Home;