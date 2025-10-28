function Footer() {
  return (
    <footer>
      <div className="footer p-10 bg-[#422AD5] text-white grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <span className="footer-title text-2xl font-bold">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title text-2xl font-bold">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title text-2xl font-bold">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>
      <div className="text-center p-4 bg-[#422AD5] text-white">
        © 2024 English Janala. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
