import React from 'react';
import Button from '@material-ui/core/Button';
import NoSsr from '@material-ui/core/NoSsr';

export default function Home() {
  return (
    <NoSsr>
      <Button color="primary" onClick={(e) => {
        console.log({
          window, document
        })
      }}>No SSR Button</Button>
    </NoSsr>
  );
}