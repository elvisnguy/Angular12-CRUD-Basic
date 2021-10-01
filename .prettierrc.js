module.exports  = {
  printWidth: 80, // Default = 80
  tabWidth: 2, // Default = 2
  useTabs: false, // Default = false
  semi: true, // Default = true
  singleQuote: true, // Default = false
  quoteProps: 'as-needed', // Default = "as-needed" Options: "<as-needed|consistent|preserve>"
  jsxSingleQuote: false, // Default = false
  trailingComma: 'es5', // Default = "es5" Options: "<es5|none|all>""
  bracketSpacing: true, // Default = true
  bracketSameLine: false, // Default = false
  arrowParens: 'always', // Default = "always" Options: "<always|avoid>"
  rangeStart: 0, // Default = 0
  rangeEnd: Infinity, // Default = Infinity
  htmlWhitespaceSensitivity: 'css', // Default = css Options: "<css|strict|ignore>"
  endOfLine: 'auto', // Default "lf" Options "<lf|crlf|cr|auto>",
  overrides: [
    {
      files: '*.html',
      options: {
        parser: 'html'
      }
    },
    {
      files: '*.component.html',
      options: {
        parser: 'angular'
      }
    },
  ]
}