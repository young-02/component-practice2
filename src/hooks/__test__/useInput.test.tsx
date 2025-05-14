import { act, renderHook } from "@testing-library/react";
import useInput from "../useInput";
import { ChangeEvent } from "react";

describe("useInput hooks 테스트", () => {
  test("input 초기 값 확인", () => {
    const { result } = renderHook(() => useInput({ initialValue: "" }));
    expect(result.current.value).toBe("");
  });

  test("input 값을 변경했을 때 올바르게 변경되었는지 확인", () => {
    const { result } = renderHook(() => useInput({ initialValue: "" }));

    const mockEvent = {
      target: { value: "test" },
    } as ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleChange(mockEvent);
    });

    expect(result.current.value).toBe("test");
    expect(result.current.active).toBe(true);
  });

  test("input 빈 값일때 active false", () => {
    const { result } = renderHook(() => useInput({ initialValue: "" }));

    expect(result.current.value).toBe("");
    expect(result.current.active).toBe(false);
  });
});
