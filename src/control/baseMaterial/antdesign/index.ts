import Button from './Button/index'
import Affix from './Affix/index'

export const antdComp = [Button, Affix]

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