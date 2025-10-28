function Navbar() {
  return (
    <nav className="flex justify-between items-center p-2 bg-white shadow-md px-4 md:px-16">
      <div className="left flex items-center">
        <a href="#" className="logo left flex items-center">
          <span>English</span>
          <span>
            <img src="/assets/logo.png" alt="Logo" />
          </span>
          জানালা
        </a>
      </div>
      <div className="right flex items-center gap-2 md:gap-6 text-[#422AD5] font-semibold">
        <a
          href="#faq"
          className="nav-link flex items-center gap-1 px-5 py-2 border border-[#422AD5] rounded-sm"
        >
          <img src="/assets/fa-circle-question.png" alt="" />
          FAQ
        </a>
        <a
          href="#learn"
          className="nav-link flex items-center gap-1 px-5 py-2 border border-[#422AD5] rounded-sm"
        >
          <img src="/assets/fa-book-open.png" alt="" />
          Learn
        </a>
        <a
          href="#"
          className="nav-link flex items-center gap-1 px-5 py-2 border border-[#422AD5] rounded-sm"
        >
          <img src="/assets/fa-arrow-right-from-bracket.png" alt="" />
          Logout
        </a>
      </div>
    </nav>
  )
}

export default Navbar
