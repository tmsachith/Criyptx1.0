const About = () => {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">About LocalLens</h1>
        <div className="prose max-w-none">
          <p className="mb-4">
            LocalLens is your ultimate companion for exploring Sri Lanka. We help tourists
            discover hidden gems, manage their expenses, and stay safe during their travels.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Our Features</h2>
          <ul className="list-disc pl-6">
            <li>Interactive map with local attractions</li>
            <li>Budget tracking with currency conversion</li>
            <li>Emergency contact information</li>
            <li>Essential phrase translations</li>
          </ul>
        </div>
      </div>
    )
  }
  
  export default About
  