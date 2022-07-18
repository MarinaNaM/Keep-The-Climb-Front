export const gradeValues = [
  {
    value: 1,
    grade: '4-',
  },
  {
    value: 2,
    grade: '4',
  },
  {
    value: 3,
    grade: '4+',
  },
  {
    value: 4,
    grade: '5-',
  },
  {
    value: 5,
    grade: '5',
  },
  {
    value: 6,
    grade: '5+',
  },
  {
    value: 7,
    grade: '6a',
  },
  {
    value: 8,
    grade: '6a+',
  },
  {
    value: 9,
    grade: '6b',
  },
  {
    value: 10,
    grade: '6b+',
  },
  {
    value: 11,
    grade: '6c',
  },
  {
    value: 12,
    grade: '6c+',
  },
  {
    value: 13,
    grade: '7a',
  },
  {
    value: 14,
    grade: '7a+',
  },
  {
    value: 15,
    grade: '7b',
  },
  {
    value: 16,
    grade: '7b+',
  },
  {
    value: 17,
    grade: '7c',
  },
  {
    value: 18,
    grade: '7c+',
  },
  {
    value: 19,
    grade: '8a',
  },
  {
    value: 20,
    grade: '8a+',
  },
  {
    value: 21,
    grade: '8b',
  },
  {
    value: 22,
    grade: '8b+',
  },
  {
    value: 23,
    grade: '8c',
  },
  {
    value: 24,
    grade: '8c+',
  },
  {
    value: 25,
    grade: '9a',
  },
  {
    value: 26,
    grade: '9a+',
  },
  {
    value: 27,
    grade: '9b',
  },
  {
    value: 28,
    grade: '9b+',
  },
  {
    value: 29,
    grade: '9c',
  },
];

export const valueToGrade = (value: number) => {
  let newGrade: string;
  const result = gradeValues.find((item) => item.value === Number(value)) as {
    value: number;
    grade: string;
  };
  console.log(result);
  newGrade = result.grade;

  return newGrade;
};
