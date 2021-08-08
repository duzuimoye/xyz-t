import baseButton from './baseButton/index'
import baseText from './baseText/index'

const groupComp: { children?: any[], groupName?: string }[] = []
const antdComp = [baseButton, baseText]

antdComp.forEach(({ attrs }) => {
  const index = groupComp.findIndex(p => p.groupName === attrs.groupName)

  if (index === -1) {
    groupComp.push({
      groupName: attrs.groupName,
      children: [attrs]
    })
  } else {
    groupComp[index].children?.push(attrs)
  }
})

export default groupComp