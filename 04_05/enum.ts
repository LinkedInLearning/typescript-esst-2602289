export function Demo() {
  enum MyEnumErrorCode {
    ERR_1 = 5,
    ERR_199,
    ERR_9000,
  }

  type MyErrorCode = "ERR_1" | "ERR_199" | "ERR_9000";
  const error: MyErrorCode = "ERR_9000";

  const error2: MyEnumErrorCode = MyEnumErrorCode.ERR_199;
  // MyEnumErrorCode.ERR_1 = 3;
  console.log(MyEnumErrorCode);
}

Demo();
