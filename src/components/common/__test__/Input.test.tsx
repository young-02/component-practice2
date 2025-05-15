import Input from "../Input";
import { fireEvent, render, screen } from "@testing-library/react";

describe("input", () => {
  test("input inputType text 일때", () => {
    render(<Input inputType="text" />);
    const inputTypeText =
      screen.getByPlaceholderText("할 일의 제목을 적어주세요.");

    //onchange 이벤트 테스트
    expect(inputTypeText).toBeInTheDocument();
    fireEvent.change(inputTypeText, { target: { value: "test" } });

    expect(inputTypeText).toHaveValue("test");
  });

  test("input inputType password 일때  ", () => {
    render(<Input inputType="password" />);

    const inputTypePassword =
      screen.getByPlaceholderText("비밀번호를 입력해주세요.");
    expect(inputTypePassword).toBeInTheDocument();

    expect(inputTypePassword).toHaveAttribute("type", "password");

    fireEvent.change(inputTypePassword, { target: { value: "1234" } });
    expect(inputTypePassword).toHaveValue("1234");

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  test("버튼클릭시 비밀번호 타입 변경", () => {
    render(<Input inputType="password" />);

    const inputTypePassword =
      screen.getByPlaceholderText("비밀번호를 입력해주세요.");
    expect(inputTypePassword).toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    // 버튼클릭 이벤트
    fireEvent.click(button);
    expect(inputTypePassword).toHaveAttribute("type", "text");

    fireEvent.click(button);
    expect(inputTypePassword).toHaveAttribute("type", "password");
  });
});
