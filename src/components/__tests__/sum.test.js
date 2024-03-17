import { sum } from "../sum";

test("The Result should reflect the sum of 2 number", () =>{
    const result = sum(2,4);
    //assertion
    expect(result).toBe(6);
});