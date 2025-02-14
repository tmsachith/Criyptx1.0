import MapView from '../components/Map/MapView'
import Translator from '../components/Translator/Translator'

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to Sri Lanka</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Explore Destinations</h2>
          <MapView />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Essential Phrases</h2>
          <Translator />
        </div>
      </div>
    </div>
  )
}

export default Home
