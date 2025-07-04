import { UseInputProps, UseInputReturn } from '@/type/input';
import { useState } from 'react';

export default function useInput({
  initialValue = '',
}: UseInputProps): UseInputReturn {
  const [value, setValue] = useState(initialValue);
  const [active, setActive] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setActive(true);

    if (e.target.value === '') {
      setActive(false);
    }
  };
  return { value, active, handleChange };
}
