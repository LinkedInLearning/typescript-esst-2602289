const ComplexFunction = () => {
  return () => {
    return [2, { courseName: "TypeScript" }];
  };
};

export function Challenge() {
  type ComplexFunctionType = typeof ComplexFunction;
  type InnerFunctionType = ReturnType<ComplexFunctionType>;
  type InnerFunctionReturn = ReturnType<InnerFunctionType>;
  type SecondType = InnerFunctionReturn[number];
  type ReturnedObjectType = Exclude<SecondType, number>;
}
