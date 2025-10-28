import { useState, useEffect } from 'react'

function WordsSection({ selectedLesson, onWordClick }) {
  const [words, setWords] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (selectedLesson) {
      setLoading(true)
      fetch(`https://openapi.programming-hero.com/api/level/${selectedLesson}`)
        .then((res) => res.json())
        .then((data) => {
          setWords(data.data)
          setLoading(false)
        })
        .catch((error) => {
          console.error('Error loading words:', error)
          setLoading(false)
        })
    }
  }, [selectedLesson])

  const pronounceWord = (word) => {
    const utterance = new SpeechSynthesisUtterance(word)
    utterance.lang = 'en-EN'
    window.speechSynthesis.speak(utterance)
  }

  if (!selectedLesson) {
    return null
  }

  if (loading) {
    return (
      <section className="words-section my-10 m-10">
        <div className="text-center">
          <p>Loading words...</p>
        </div>
      </section>
    )
  }

  if (words.length === 0) {
    return (
      <section className="words-section my-10 m-10">
        <section className="bg-[#F8F8F8] flex flex-col justify-center items-center py-10 w-[80vw] mx-auto rounded-lg my-10">
          <img src="/assets/alert-error.png" alt="No words" />
          <p>এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
          <h1 className="text-gray-500 text-3xl">নেক্সট Lesson এ যান</h1>
        </section>
      </section>
    )
  }

  return (
    <section className="words-section my-10 m-10">
      <div id="word-container" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-5 justify-center items-center">
        {words.map((word) => (
          <div key={word.id} className="word-card shadow-sm space-y-8 text-center max-w-[547px] py-10 px-8 rounded-lg">
            <h1 className="text-4xl font-bold">{word.word || 'No word found'}</h1>
            <p className="font-medium">Meaning / Pronounciation</p>
            <p className="text-3xl font-bold text-gray-500">
              "{word.meaning || 'No meaning found'} / {word.pronunciation}"
            </p>
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => onWordClick(word.id)}
                className="info bg-[#1A91FF10] p-2 rounded-lg"
              >
                <i className="fa-solid fa-circle-info"></i>
              </button>
              <button
                onClick={() => pronounceWord(word.word)}
                className="voice bg-[#1A91FF10] p-2 rounded-lg"
              >
                <i className="fa-solid fa-volume-high"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WordsSection
