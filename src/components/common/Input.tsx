'use client';
import useInput from '@/hooks/useInput';
import { InputProps } from '@/type/input';
import Image from 'next/image';
import { useState } from 'react';

export default function Input({ inputType = 'text' }: InputProps) {
  const { value, active, handleChange } = useInput({ initialValue: '' });
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={`flex w-[200px] items-center rounded-md border ${active ? 'border-2 border-orange-400' : 'border-gray-300'}`}
    >
      <input
        type={inputType === 'password' && !isVisible ? 'password' : 'text'}
        className="px-1 outline-none"
        value={value}
        onChange={handleChange}
        placeholder={
          inputType === 'password'
            ? '비밀번호를 입력해주세요.'
            : '할 일의 제목을 적어주세요.'
        }
      />
      {inputType === 'password' && (
        <button
          onClick={() => setIsVisible((prev) => !prev)}
          className="cursor-pointer"
        >
          <Image
            src={isVisible ? '/visibility_on.svg' : '/visibility_off.svg'}
            alt="visibility"
            width={20}
            height={20}
          />
        </button>
      )}
    </div>
  );
}
