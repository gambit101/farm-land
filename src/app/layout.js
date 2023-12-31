import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Farm Land',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <nav class="bg-lime-500 py-4">
            <div class="max-w-7xl mx-auto px-4">
              <div class="flex justify-between items-center">
                <div class="text-white font-semibold text-xl">Farm Land</div>
                <ul class="flex space-x-6">
                  <li class="hover:text-white transition duration-300 ease-in-out hover:border-b-2 hover:border-white">
                    <a href="#">Home</a>
                  </li>
                  <li class="hover:text-white transition duration-300 ease-in-out hover:border-b-2 hover:border-white">
                    <a href="#">About</a>
                  </li>
                  <li class="hover:text-white transition duration-300 ease-in-out hover:border-b-2 hover:border-white">
                    <a href="#">Services</a>
                  </li>
                  <li class="hover:text-white transition duration-300 ease-in-out hover:border-b-2 hover:border-white">
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        {children}
        <footer>
          <footer className="footer p-10 bg-lime-500 text-base-content">
            <div>
              <span className="footer-title">Services</span>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </div>
            <div>
              <span className="footer-title">Company</span>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </div>
            <div>
              <span className="footer-title">Legal</span>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </div>
            <div>
              <span className="footer-title">Newsletter</span>
              <div className="form-control w-80">
                <label className="label">
                  <span className="label-text">Enter your email address</span>
                </label>
                <div className="relative">
                  <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                  <button class="relative overflow-hidden bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl mt-7">
                        <span class="absolute inset-0 bg-white opacity-20 transform rotate-45 translate-x-3 -translate-y-2"></span>
                        Subscribe
                    </button>
                </div>
              </div>
            </div>
          </footer>
        </footer>
      </body>
    </html>
  )
}
