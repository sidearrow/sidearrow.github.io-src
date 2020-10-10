import Link from 'next/link';
import React from 'react';
import { diary } from '../../lib/diary';

export const DiaryList: React.FC = () => (
  <div>
    {diary.getMany().map((v, i) => (
      <Link href={`/diary/${v.id}`} key={i}>
        <a>{v.id}</a>
      </Link>
    ))}
  </div>
);
