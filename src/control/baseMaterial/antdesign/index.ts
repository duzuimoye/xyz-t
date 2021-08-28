import Button from './Button/index'

export const antdComp = [Button]

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