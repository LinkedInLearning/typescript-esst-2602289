type ServerResponse = {
  data: string;
  errorCode: "NOT_FOUND" | "INTERNAL_ERROR";
};

export function Demo() {
  type MyArrayType = [number, string, boolean];
  type NewServerResponse = {
    jsonData: string;
    errorCode: ServerResponse['errorCode'];
    someType: MyArrayType[2];
  }
}
