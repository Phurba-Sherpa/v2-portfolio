import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import GlobalStyles from './styles/GlobalStyles'
import AppLayout from './layout/AppLayout'
export default function App() {
    return (
        <>
            <GlobalStyles />
            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout />}>
                      <Route index element={<MainPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
