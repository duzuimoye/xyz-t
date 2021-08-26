import MonacoEditor from 'react-monaco-editor'
import { Select } from 'antd'

const { Option } = Select
const options = {
  acceptSuggestionOnCommitCharacter: false,
  scrollbar: {
    verticalScrollbarSize: 0
  },
  tabIndex: 1,
  codeLens: false
}

const MonacoEditIDE = ({ codeStr }: { codeStr: string }) => {
  const SelectTheme = () => (
    <Select>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled">Disabled</Option>
    </Select>
  )

  console.log(SelectTheme)

  return (
    <MonacoEditor
      width="250"
      height="350"
      language="css"
      theme="vs-dark"
      value={codeStr}
      options={options}
    />
  )
}

export default MonacoEditIDE