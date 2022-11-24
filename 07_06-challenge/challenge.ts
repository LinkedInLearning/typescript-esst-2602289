const ComplexFunction = () => {
  return () => {
    return [2, { courseName: "TypeScript" }] as const;
  };
};

export function Challenge() {
  type ComplexFunctionType = typeof ComplexFunction;

  type ReturnedObjectType = any;
}
