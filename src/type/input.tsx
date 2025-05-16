export interface InputProps {
  inputType?: 'text' | 'password';
}

export interface UseInputProps {
  initialValue: string;
}

export interface UseInputReturn {
  value: string;
  active: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
