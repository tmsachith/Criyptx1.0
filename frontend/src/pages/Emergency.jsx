import EmergencyContacts from '../components/Emergency/EmergencyContacts'

const Emergency = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Emergency Services</h1>
      <div className="bg-red-50 p-4 rounded-lg mb-6">
        <p className="text-red-600 font-semibold">
          In case of emergency, dial 119 for immediate assistance
        </p>
      </div>
      <EmergencyContacts />
    </div>
  )
}

export default Emergency
