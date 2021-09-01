export function resizeAutoDrawingbordAction({
  resizeNumber,
  drawingboardSize,
  autoSize
}: {
  resizeNumber: number,
  drawingboardSize: string,
  autoSize?: boolean
}) {
  const viewSize = drawingboardSize.split('-')[1].split('*')
  const transFormSize = resizeNumber / 100
  const iframeBoxStyleSizeWidth = +(+viewSize[0] * transFormSize).toFixed(0) + 40
  const iframeBoxStyleSizeHeight = +(+viewSize[1] * transFormSize).toFixed(0) + 40
  const dom = document.getElementById('iframeMount') as HTMLElement
  const iframeWrapperStyle = {
    height: dom.offsetHeight,
    width: dom.offsetWidth
  }

  const width = iframeBoxStyleSizeWidth >= iframeWrapperStyle.width ? `${iframeBoxStyleSizeWidth}px` : '100%'
  const height = iframeBoxStyleSizeHeight >= iframeWrapperStyle.height ? `${iframeBoxStyleSizeHeight}px` : `${iframeWrapperStyle.height}px`

  if (autoSize) {
    const rezizeRateWidth = (iframeWrapperStyle.width - 40) / iframeBoxStyleSizeWidth
    const resizeRateHeight = (iframeWrapperStyle.height - 40) / iframeBoxStyleSizeHeight

    return Math.floor((rezizeRateWidth < resizeRateHeight ? rezizeRateWidth : resizeRateHeight) * 100)
  }

  return {
    width,
    height
  }
}
