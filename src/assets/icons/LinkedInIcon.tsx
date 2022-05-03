import * as React from 'react';
import { SVGProps } from 'react';

const LinkedInIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={36}
    height={37}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.814 9.506c0-.782.274-1.426.823-1.934.55-.508 1.263-.762 2.141-.762.863 0 1.56.25 2.094.75.549.516.823 1.188.823 2.016 0 .75-.266 1.376-.8 1.876-.549.516-1.27.774-2.164.774h-.023c-.863 0-1.561-.258-2.094-.774-.533-.516-.8-1.165-.8-1.946ZM6.12 30.02V14.359h5.222v15.662H6.12Zm8.116 0h5.222v-8.745c0-.548.063-.97.189-1.267.22-.531.552-.98 1-1.348.446-.367 1.007-.55 1.681-.55 1.757 0 2.635 1.18 2.635 3.54v8.37h5.223v-8.98c0-2.313-.55-4.068-1.647-5.264-1.098-1.195-2.549-1.793-4.352-1.793-2.023 0-3.6.867-4.729 2.602v.047h-.023l.023-.047V14.36h-5.222c.031.5.047 2.055.047 4.666 0 2.61-.016 6.275-.047 10.996Z"
      fill="#fff"
    />
  </svg>
);

export default LinkedInIcon;
