import MonacoEditor from 'react-monaco-editor'

const options = {
  acceptSuggestionOnCommitCharacter: false,
  scrollbar: {
    verticalScrollbarSize: 0
  },
  tabIndex: 1,
  codeLens: false
}

const MonacoEditIDE = ({ codeStr }: { codeStr: string }) => {
  return (
    <MonacoEditor
      width="250"
      height="250"
      language="typescript"
      theme="vs-dark"
      value={codeStr}
      options={options}
    />
  )
}

export default MonacoEditIDE