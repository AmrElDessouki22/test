"use client";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export default function Button({ label, ...props }: ButtonProps) {
  return (
    <button {...props} className="bg-blue-500 text-white p-2 rounded">
      {label}
    </button>
  );
}
