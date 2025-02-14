import { useState } from 'react'
import '../../styles/Translator.css';

const Translator = () => {
  const [searchPhrase, setSearchPhrase] = useState('')

  const commonPhrases = [
    { english: 'Hello', sinhala: 'ආයුබෝවන්', tamil: 'வணக்கம்' },
    { english: 'Thank you', sinhala: 'ස්තූතියි', tamil: 'நன்றி' },
    { english: 'Help', sinhala: 'උදව්', tamil: 'உதவி' },
    { english: 'Yes', sinhala: 'ඔව්', tamil: 'ஆம்' },
    { english: 'No', sinhala: 'නැහැ', tamil: 'இல்லை' },
    { english: 'How much?', sinhala: 'කීයද?', tamil: 'எவ்வளவு?' }
  ]

  const filteredPhrases = commonPhrases.filter(phrase =>
    phrase.english.toLowerCase().includes(searchPhrase.toLowerCase())
  )

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Essential Phrases</h2>
      <input
        type="text"
        value={searchPhrase}
        onChange={(e) => setSearchPhrase(e.target.value)}
        placeholder="Search phrases..."
        className="w-full p-2 border rounded mb-4"
      />
      <div className="space-y-4">
        {filteredPhrases.map((phrase, index) => (
          <div key={index} className="p-3 bg-gray-50 rounded">
            <div className="font-medium">{phrase.english}</div>
            <div className="text-sm text-gray-600">
              සිංහල: {phrase.sinhala}
            </div>
            <div className="text-sm text-gray-600">
              தமிழ்: {phrase.tamil}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Translator
