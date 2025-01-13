// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'prettier', 'plugin:import/recommended'],
  ignorePatterns: ['/dist/*'],
  plugins: [
    'prettier', // ESLint 규칙과 Prettier 규칙 충돌을 방지
  ],
  rules: {
    'prettier/prettier': 'error', // Prettier 규칙을 ESLint에서 오류로 처리

    // import/order 규칙 설정
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'], // node 모듈과 외부 라이브러리는 별도의 그룹으로
          'internal', // 내부 import는 따로
          ['sibling', 'parent'], // 형제 모듈과 부모 모듈은 같은 그룹
          'index', // index 파일은 마지막에
        ],
        'newlines-between': 'always', // 각 그룹 간에 빈 줄을 추가하도록 강제
        alphabetize: { order: 'asc', caseInsensitive: true }, // 알파벳순 정렬
      },
    ],

    'sort-imports': [
      'error',
      {
        ignoreCase: true, // 대소문자 구분 없이 정렬
        ignoreDeclarationSort: true, // **선언 순서는 import/order가 처리**
        ignoreMemberSort: false, // default value
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'], // default value
        allowSeparatedGroups: false, // default value
      },
    ],
  },
};
