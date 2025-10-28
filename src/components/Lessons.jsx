import { useState, useEffect } from 'react'

function Lessons({ onLessonClick }) {
  const [lessons, setLessons] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://openapi.programming-hero.com/api/levels/all')
      .then((res) => res.json())
      .then((data) => {
        setLessons(data.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error loading lessons:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <section id="learn" className="learn-vocab flex flex-col items-center justify-center my-10">
        <h1 className="text-4xl font-bold">
          <span className="text-[#00BCFF]">Let's </span>Learn Vocabularies
        </h1>
        <div className="lesson-container bg-[#F8F8F8] flex flex-wrap gap-5 justify-center items-center my-10 p-10">
          <p>Loading lessons...</p>
        </div>
      </section>
    )
  }

  return (
    <section id="learn" className="learn-vocab flex flex-col items-center justify-center my-10">
      <h1 className="text-4xl font-bold">
        <span className="text-[#00BCFF]">Let's </span>Learn Vocabularies
      </h1>
      <div className="lesson-container bg-[#F8F8F8] flex flex-wrap gap-5 justify-center items-center my-10 p-10">
        {lessons.map((lesson) => (
          <div
            key={lesson.level_no}
            onClick={() => onLessonClick(lesson.level_no)}
            className="flex items-center gap-2 border-3 border-[#422AD5] rounded-sm px-5 py-2 cursor-pointer hover:bg-[#422AD5] hover:text-white transition-colors"
          >
            <img src="/assets/fa-book-open.png" alt="Book icon" />
            <p className="text-x font-semibold">Lesson {lesson.level_no}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Lessons
