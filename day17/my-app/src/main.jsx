import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Comp3 from './list-keys/Comp3'
// import Ref from './useRef/Ref'
// import List from './list-keys/List'
// import External from './styles/External'
import './index.css'
import App from './App'
// import UseEffect from './UseEffect/UseEffect'
import Child from './HOC/Child'
// import CompA from './useContext/CompA'
// import Cbc from './component/Cbc.jsx'
// import Fbc from './component/Fbc.jsx'
// import Demo from './component/Demo.jsx'
// import Parent from './props/Parent.jsx'
// import State from './State/State.jsx'
// import Inline from './styles/Inline.jsx'
// import Comp1 from './styles/Comp1.jsx'
// import '../src/styles/globally.css'
// import Comp2 from './styles/Comp2.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Cbc/>
    <Fbc/>
    <Demo/> */}
    {/* <Parent/> */}
    {/* <State/> */}
    {/* <Inline/> */}
    {/* <Comp1/>
    <Comp2/> */}
    {/* <External/> */}
    {/* <Ref/> */}
    {/* <List/> */}
    {/* <Comp3/> */}
    {/* <App /> */}
    {/* <CompA /> */}
    {/* <UseEffect/> */}
    <Child/>
  </StrictMode>,
)
