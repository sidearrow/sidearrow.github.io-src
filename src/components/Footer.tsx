import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { CONST } from '../const';

export const Footer: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <div className="container text-center py-12">
        <div className="mb-12">
          <div className="mb-4 font-bold">sidearrow</div>
          <div>{CONST.INTRO}</div>
        </div>
        <div className="mb-12 flex justify-around">
          <div>
            <a
              href={CONST.EXTERNAL_URLS.GITHUB}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
          <div>
            <a
              href={CONST.EXTERNAL_URLS.TWITTER}
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
        <div className="text-sm text-gray-500">{CONST.COPYRIGHT}</div>
      </div>
    </div>
  );
};
