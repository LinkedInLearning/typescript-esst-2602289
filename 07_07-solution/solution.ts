const ComplexFunction = () => {
  return () => {
    return [2, { courseName: "TypeScript" }] as const;
  };
};

export function Challenge() {
  type ComplexFunctionType = typeof ComplexFunction;
  type InnerFunctionType = ReturnType<ComplexFunctionType>;
  type ArrayType = ReturnType<InnerFunctionType>;
  type SecondEntry = ArrayType[1];
  type ReturnedObjectType = SecondEntry;
}
