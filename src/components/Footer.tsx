import React from 'react';
import { config } from '../config';

export const Footer: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: '#f8f9fa',
        borderTop: 'solid 1px #dce3e5',
      }}
    >
      <div
        className="container"
        style={{
          textAlign: 'center',
          paddingTop: '3rem',
          paddingBottom: '3rem',
        }}
      >
        <div
          style={{
            marginBottom: '3rem',
          }}
        >
          <div
            style={{
              fontWeight: 'bold',
              marginBottom: '1rem',
            }}
          >
            sidearrow
          </div>
          <div>{config.intro}</div>
        </div>
        <div
          style={{
            marginBottom: '3rem',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
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
        <div
          style={{
            fontSize: 'small',
            color: 'gray',
          }}
        >
          &copy; 2020 sidearrow
        </div>
      </div>
    </div>
  );
};
