import React from 'react';

import { IconProps, RootPath, RootSvg } from './utils/base';

export const CheckSend: React.FC<IconProps> = (props) => (
  <RootSvg {...props}>
    <RootPath
      d='M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.707 7.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L11 12.586l3.293-3.293a1 1 0 011.414 0z'
      {...props}
    />
  </RootSvg>
);
