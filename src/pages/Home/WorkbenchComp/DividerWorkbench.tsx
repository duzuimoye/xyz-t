import { useState, useEffect, useMemo } from 'react'
import { uid } from 'react-uid'
import {
  DividerWorkbenchVerticalContainer,
  DividerWorkbenchHorizontalContainer,
  DividerWorkbenchVertical,
  DividerWorkbenchHorizontal
} from './styled'


const DividerContainer = () => {
  const [scrollTopValue, setscrollTopValue] = useState(0)
  const [scrollLeftValue, setscrollLeftValue] = useState(0)

  const dividerDom = useMemo(() => {
    return Array(100).fill(100).map((val, index) => (
      <span className="number" key={uid({ val, index })} >{index * val / 2}</span>
    ))
  }, [])

  useEffect(() => {
    const dom = document.getElementById('iframeMount') as HTMLElement

    dom.addEventListener('scroll', () => {
      const { scrollTop, scrollLeft } = dom

      if (scrollTopValue !== scrollTop) {
        setscrollTopValue(scrollTop)
      }

      if (scrollLeftValue !== scrollLeft) {
        setscrollLeftValue(scrollLeft)
      }
    })
  })

  return (
    <>
      <DividerWorkbenchVerticalContainer>
        <DividerWorkbenchVertical className="left-divider" style={{ top: `${- scrollTopValue}px` }}>
          {dividerDom}
        </DividerWorkbenchVertical>
      </DividerWorkbenchVerticalContainer>
      <DividerWorkbenchHorizontalContainer>
        <DividerWorkbenchHorizontal className="top-divider" style={{ left: `${- scrollLeftValue}px` }}>
          {dividerDom}
        </DividerWorkbenchHorizontal>
      </DividerWorkbenchHorizontalContainer>
    </>
  )
}

export default DividerContainer
