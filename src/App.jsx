import './App.css'
import * as Pages from './pages'
import { Header } from './components'
import { Route, Routes } from 'react-router-dom'
import { SearchProvider } from './contexts'

function App() {

  return (
    <SearchProvider>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Pages.HomePage />} />
          <Route path='/shows' element={< Pages.ShowsPage />} />
          <Route path='/shows/:id' element={< Pages.ShowPage />} />
          <Route path='/search' element={< Pages.SearchPage />} />
          <Route path='*' element={< Pages.NotFoundPage />} />
        </Route>
      </Routes>
    </SearchProvider>
  )
}

export default App




