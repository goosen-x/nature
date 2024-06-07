import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#f8f8f8] py-10 dark:bg-[#1a1a1a]">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start gap-4">
          <Link className="flex items-center gap-2" href="#">
            <LeafIcon className="h-8 w-8 text-[#4caf50]" />
            <span className="text-xl font-bold text-[#4caf50]">BioSupp</span>
          </Link>
          <div className="flex flex-col gap-2 text-gray-600 dark:text-gray-400">
            <div>123 Main St, Anytown USA</div>
            <div>Phone: (123) 456-7890</div>
            <div>Email: info@biosupplements.com</div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h4 className="text-lg font-bold text-[#4caf50]">Quick Links</h4>
          <div className="flex flex-col gap-2">
            <Link className="hover:text-[#4caf50]" href="#">
              Privacy Policy
            </Link>
            <Link className="hover:text-[#4caf50]" href="#">
              Terms of Use
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h4 className="text-lg font-bold text-[#4caf50]">Follow Us</h4>
          <div className="flex gap-4">
            <Link className="hover:text-[#4caf50]" href="#">
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link className="hover:text-[#4caf50]" href="#">
              <TwitterIcon className="h-6 w-6" />
            </Link>
            <Link className="hover:text-[#4caf50]" href="#">
              <InstagramIcon className="h-6 w-6" />
            </Link>
            <Link className="hover:text-[#4caf50]" href="#">
              <LinkedinIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-8 text-center text-gray-600 dark:text-gray-400">
        <p>© 2024 BioSupp. All rights reserved.</p>
      </div>
    </footer>
  )
}

function FacebookIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LeafIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}


function LinkedinIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function TwitterIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
