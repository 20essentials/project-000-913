import '@mantine/core/styles.css'
import { MantineProvider, Box } from '@mantine/core'
import { createRoot } from 'react-dom/client'

function App() {
  const spheres = [
    { className: 'sphere1', bg: '#f008' },
    { className: 'sphere2', bg: '#f0f8' },
    { className: 'sphere3', bg: '#ffa50088' },
    { className: 'sphere4', bg: '#7cfc0088' },
    { className: 'sphere5', bg: '#0ff8' },
  ]

  return (
    <MantineProvider>
      <Box className="background">
        <Box className="rotate">
          {spheres.map((sphere, idx) => (
            <Box key={idx} className={`sphere ${sphere.className}`} style={{ '--bg': sphere.bg }}>
              {Array.from({ length: 9 }).map((_, i) => (
                <Box key={i} className="item" style={{ '--rot-y': i + 1 }} />
              ))}
            </Box>
          ))}
        </Box>
      </Box>
      <style>{`
        *,*::after,*::before{box-sizing:border-box;margin:0;padding:0;font-family:sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue'}
        a{-webkit-tap-highlight-color:transparent}
        html{scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:white transparent}
        body{height:100vh;width:100%;background-color:#000}
        .background{position:fixed;inset:0;zoom:0.7;--primary-color:#84fab0;--secondary-color:transparent}
        .rotate{width:400px;height:400px;position:absolute;top:calc(50% - 200px);left:calc(50% - 200px);transform-style:preserve-3d;animation:girar 20s linear infinite;perspective:20000px}
        .sphere,.item{position:absolute;width:100%;height:100%;top:0;left:0;transform-style:preserve-3d}
        .item{border-radius:50%;background-color:var(--bg);transform:rotateY(calc(var(--rot-y) * 40.9999deg))}
        @keyframes girar{0%{transform:rotateX(0deg) rotateY(0deg)}100%{transform:rotateX(360deg) rotateY(360deg)}}
      `}</style>
    </MantineProvider>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
createRoot(root).render(<App />)

export default App
