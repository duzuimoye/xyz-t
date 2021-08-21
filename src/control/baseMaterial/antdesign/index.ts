import baseButton from './baseButton/index'
import baseText from './baseText/index'

export const antdComp = [baseButton, baseText]

const groupComp: { children?: any[], groupName?: string }[] = []

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