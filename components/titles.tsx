import React from 'react';
import Image from 'next/image';

interface Props {
  title: string;
  isactive: boolean;
  onClick: () => void; // Added onClick prop
}

const Titles = ({ title, isactive, onClick }: Props) => {
  return (
    <div className="mt-5 flex gap-3 cursor-pointer text-xs font-semibold"  onClick={onClick}> {/* Added onClick handler */}
      <Image
        src="/line.svg"
        height={10}
        width={20}
        alt="line stroke"
        className={isactive ? 'opacity-100 w-[25px]' : 'opacity-40'}
      />
      <p className={isactive ? 'opacity-100 text-lg' : 'opacity-40'}>
        {title}
      </p>
    </div>
  );
};

export default Titles;
