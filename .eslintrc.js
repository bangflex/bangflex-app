// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'prettier'],
  ignorePatterns: ['/dist/*'],
  plugins: [
    'prettier', // ESLint 규칙과 Prettier 규칙 충돌을 방지
  ],
  rules: {
    'prettier/prettier': 'error', // Prettier 규칙을 ESLint에서 오류로 처리
  },
};
