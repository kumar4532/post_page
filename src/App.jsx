import './App.css'
import Post from './components/Post'
import Preview from './components/Preview'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className='w-full h-screen flex flex-row'>
      <Sidebar />
      <Post />
      <Preview />
    </div>
  )
}

export default App
