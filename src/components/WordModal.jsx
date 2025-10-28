import { useState, useEffect } from 'react'

function WordModal({ wordId, onClose }) {
  const [wordData, setWordData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (wordId) {
      fetch(`https://openapi.programming-hero.com/api/word/${wordId}`)
        .then((res) => res.json())
        .then((data) => {
          setWordData(data.data)
          setLoading(false)
        })
        .catch((error) => {
          console.error('Error loading word details:', error)
          setLoading(false)
        })
    }
  }, [wordId])

  if (loading) {
    return (
      <dialog open className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="text-center">
            <p>Loading word details...</p>
          </div>
          <div className="modal-action">
            <button onClick={onClose} className="btn !text-white !bg-[#422AD5] rounded-md">
              Close
            </button>
          </div>
        </div>
      </dialog>
    )
  }

  if (!wordData) {
    return (
      <dialog open className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="text-center">
            <p>Error loading word details</p>
          </div>
          <div className="modal-action">
            <button onClick={onClose} className="btn !text-white !bg-[#422AD5] rounded-md">
              Close
            </button>
          </div>
        </div>
      </dialog>
    )
  }

  return (
    <dialog open className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <div id="modal-content">
          <h1 className="text-3xl font-bold mb-4">
            {wordData.word} /: {wordData.pronunciation}
          </h1>
          <p className="font-semibold mt-4">Meaning</p>
          <p className="mb-4">{wordData.meaning}</p>
          <p className="font-semibold mt-4">Example</p>
          <p className="mb-4">{wordData.sentence}</p>
          <p className="font-semibold mt-4">সমার্থক শব্দ গুল</p>
          <div id="synonyms-container" className="mt-2">
            {wordData.synonyms &&
              wordData.synonyms.map((syn, index) => (
                <span
                  key={index}
                  className="btn mx-1 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                >
                  {syn}
                </span>
              ))}
          </div>
        </div>

        <div className="modal-action">
          <button onClick={onClose} className="btn !text-white !bg-[#422AD5] rounded-md">
            Complete Learning
          </button>
        </div>
      </div>
    </dialog>
  )
}

export default WordModal
