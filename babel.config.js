module.exports = { 
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false
      }
    ]
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "regenerator": true,
        "corejs": {
          "version": 3,
          "proposals": true
        }
      }
    ],
    [
      "@babel/plugin-proposal-decorators",
      {
        decoratorsBeforeExport: true
      }
    ],
    "@babel/plugin-proposal-function-bind",
    "@babel/plugin-syntax-function-bind"
  ]
}