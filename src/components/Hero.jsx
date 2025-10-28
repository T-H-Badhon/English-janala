import { useState } from 'react'

function Hero() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', { name, password })
    // Add your login logic here
  }

  return (
    <section className="section-1 flex flex-col-reverse md:flex-row justify-between items-center w-full px-20">
      <div className="left space-y-4 flex-1">
        <h1 className="text-5xl">
          <span className="text-[#00BCFF] font-bold">English</span> is Easy
        </h1>
        <p className="text-2xl font-semibol text-[#18181B80]">
          আজ থেকেই আপনার ভাষা শেখার যাত্রা শুরু করুন। আপনি যদি নতুন হন অথবা আপনার দক্ষতা বাড়াতে চান, আমাদের Interactive Lessons আপনাকে নিয়ে যাবে অন্য একটি Level এ
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
          <input
            type="text"
            placeholder="Enter Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border w-1/2 border-[#422AD5] rounded-sm px-4 py-2"
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border w-1/2 border-[#422AD5] rounded-sm px-4 py-2"
          />
          <button
            type="submit"
            className="getStarted bg-[#422AD5] text-white rounded-sm px-4 py-2 w-[114px]"
          >
            Get Started
          </button>
        </form>
      </div>
      <div className="right flex-1">
        <img src="/assets/hero-student.png" alt="Student learning" />
      </div>
    </section>
  )
}

export default Hero
