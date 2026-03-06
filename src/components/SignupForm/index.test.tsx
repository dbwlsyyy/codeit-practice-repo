import { render, screen } from "@testing-library/react";
import SignupForm from ".";

describe('회원가입 폼 테스트', () => {
  test('인풋 폼이 올바르게 렌더링된지 확인', () => {
    render(<SignupForm />);
    
    const emailInput = screen.getByLabelText('이메일');
    const passwordInput = screen.getByLabelText('비밀번호');
    const passwordConfirmInput = screen.getByLabelText('비밀번호 확인');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(passwordConfirmInput).toBeInTheDocument();
  });

  test('비밀번호/비밀번호 확인 인풋의 type이 password로 지정된지 확인', () => {
    render(<SignupForm />);

    const passwordInput = screen.getByLabelText('비밀번호');
    const passwordConfirmInput = screen.getByLabelText('비밀번호 확인');

    expect(passwordInput).toHaveAttribute('type', 'password');
    expect(passwordConfirmInput).toHaveAttribute('type', 'password');
  });

  test('회원가입 버튼이 렌더링되는지 확인', () => {
    render(<SignupForm />);

    const signupButton = screen.getByRole('button', { name: '회원가입' });

    expect(signupButton).toBeInTheDocument();
  })
})
