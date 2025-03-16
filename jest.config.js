export const preset = 'ts-jest';
export const testEnvironment = 'node';
export const moduleFileExtensions = ['ts', 'tsx', 'js', 'jsx', 'json', 'node'];
export const transform = {
  '^.+\\.tsx?$': 'ts-jest'
};
export const testRegex = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$';
export const collectCoverage = true;
export const coverageDirectory = 'coverage';
export const collectCoverageFrom = [
  'src/**/*.{ts,tsx,js,jsx}',
  '!src/**/*.d.ts',
];