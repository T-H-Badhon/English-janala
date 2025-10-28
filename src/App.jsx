import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Lessons from './components/Lessons'
import WordsSection from './components/WordsSection'
import WordModal from './components/WordModal'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  const [selectedLesson, setSelectedLesson] = useState(null)
  const [selectedWord, setSelectedWord] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const handleLessonClick = (lessonNo) => {
    setSelectedLesson(lessonNo)
  }

  const handleWordClick = (wordId) => {
    setSelectedWord(wordId)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedWord(null)
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Lessons onLessonClick={handleLessonClick} />
      <WordsSection selectedLesson={selectedLesson} onWordClick={handleWordClick} />
      {showModal && <WordModal wordId={selectedWord} onClose={closeModal} />}
      <FAQ />
      <Footer />
    </>
  )
}

export default App
