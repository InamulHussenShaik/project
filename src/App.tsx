import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
      <Link to="/dashboard" className="text-blue-600 underline">
        Go to Dashboard
      </Link>
    </div>
  )
}
