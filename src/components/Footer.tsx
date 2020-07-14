import React from 'react';
import { config } from '../config';

export const Footer: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <div className="container text-center py-12">
        <div className="mb-12">
          <div className="mb-4 font-bold">sidearrow</div>
          <div>{config.intro}</div>
        </div>
        <div className="mb-12 flex justify-around">
          <div>
            <a href={config.url.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
          <div>
            <a href={config.url.twitter} target="_blank" rel="noreferrer">
              Twitter
            </a>
          </div>
        </div>
        <div className="text-sm text-gray-500">{config.copyright}</div>
      </div>
    </div>
  );
};
