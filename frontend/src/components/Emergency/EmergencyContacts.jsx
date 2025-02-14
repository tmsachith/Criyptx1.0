const EmergencyContacts = () => {
    const contacts = [
      { id: 1, name: 'Police', number: '119' },
      { id: 2, name: 'Ambulance', number: '110' },
      { id: 3, name: 'Tourist Police', number: '011-2421451' }
    ]
  
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Emergency Contacts</h2>
        <div className="grid gap-4">
          {contacts.map(contact => (
            <div key={contact.id} className="p-4 border rounded">
              <h3 className="font-bold">{contact.name}</h3>
              <a href={`tel:${contact.number}`} className="text-blue-500">
                {contact.number}
              </a>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default EmergencyContacts
  