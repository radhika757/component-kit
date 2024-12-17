
import './App.css'
import { ScrollableTable } from './components/ScrollableTable'

function App() {
  const sampleData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 30, city: 'New York', country: 'USA', occupation: 'Developer'},
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 28, city: 'London', country: 'UK', occupation: 'Designer'},
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 35, city: 'Paris', country: 'France', occupation: 'Manager'},
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', age: 32, city: 'Berlin', country: 'Germany', occupation: 'Engineer'},
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', age: 40, city: 'Tokyo', country: 'Japan', occupation: 'Consultant'}
  ]
  return (
    <main className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Employee Data Table</h1>
    <div className="max-w-full overflow-x-auto">
      <div className="min-w-[1200px]">
        <ScrollableTable data={sampleData} />
      </div>
    </div>
  </main>
  )
}

export default App
