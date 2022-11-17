type ERROR_CODES =
  | "ERROR_1"
  | "ERROR_2"
  | "ERROR_4"
  | "ERROR_5";
type ServerResponse = {
  html: string;
  errorCode: Exclude<ERROR_CODES, "ERROR_5">;
};
type SuccessResponse = Omit<ServerResponse, "errorCode">; // 'errorCode' | 'html'
type FailureResponse = Omit<ServerResponse, "html">;

export function Demo() {
  const success: SuccessResponse = {
    html: "<p>Hallo</p>",
  };

  const failure: FailureResponse = {
    errorCode: "ERROR_2",
  };
}
