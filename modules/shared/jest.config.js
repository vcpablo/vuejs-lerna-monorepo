module.exports = {
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: ['js', 'vue'],
    moduleNameMapper: {
      '^@core/(.*)$': '<rootDir>/src/$1',
      '^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
        'jest-transform-stub'
    },
    verbose: true
  }
  