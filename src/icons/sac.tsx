import React from 'react';

const SAC = ({ size = 100 }: { size?: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={size}
      height={size}
      viewBox="0 0 150 150"
      fill="none"
      fillRule="evenodd"
      role="img"
      aria-describedby='title'
    >
      <title id="title">Sacramento Kings</title>
      <defs>
        <path id="A_SAC" d="M.003 99.666h87.19V.185H.003z" />
      </defs>
      <g transform="translate(31 25)" fillRule="evenodd">
        <path
          d="M87.192.183l-12.497 12.53-10.38-10.405-.05.046-.056-.05-10.383 10.41L43.428 2.297 33.042 12.713 22.648 2.297l-.003.007-10.393 10.412L.003.432.11 55.91c0 24.128 19.32 43.76 43.39 43.76 24.075 0 43.654-19.63 43.654-43.76l.04-55.725"
          fill="#fefefe"
        />
        <path
          d="M31.845 68.33c12.365 0 21.56 5.17 28.276 8.94 4.57 2.572 8.187 4.603 11.35 4.603 1.393 0 2.67-.388 3.9-1.2 3.936-5.017 6.66-10.95 7.876-17.176H25.46c.384 1.766.827 3.483 1.323 5.1 1.697-.186 3.397-.278 5.06-.278m-27.85-4.814c1.03 5.226 3.063 10.137 6.06 14.604 1.8-3.178 5.432-7.125 12.543-8.808-.546-1.83-1.032-3.774-1.446-5.796H3.993zM12.9 81.87c7.687 9.024 18.756 14.226 30.422 14.302a37.54 37.54 0 0 1-3.212-1.849c-4.945-3.2-11.746-9.434-16.136-20.993-6.913 1.5-9.838 5.435-11.075 8.54m15.333-9.145c3.116 7.847 7.826 13.878 14.006 17.928 4.085 2.684 8.002 3.9 10.582 4.45a40.4 40.4 0 0 0 17.492-9.037c-3.94-.434-7.982-2.704-12.25-5.103-6.66-3.74-14.952-8.404-26.15-8.404a44.65 44.65 0 0 0-3.682.166"
          fill="#5c666f"
        />
        <path
          d="M45.058 43.12c-.07 0-.136.007-.205.017l-.007-.017H30.66v17.146h5.98V46.5h4.495v13.776h5.7v-14.77c0-1.3-.797-2.376-1.776-2.376m4.656 0h-.357v14.703c0 1.312.8 2.373 1.766 2.373.003 0 .013-.003.023-.003v.003H65.5v-10.36l-5.746-.007v7.035h-4.492V46.408H65.5V43.12H49.715zm-34.975.004l-3.255 6.906h-1.88v-6.906H3.652V60.26h5.954v-6.903h1.88l3.255 6.903h5.948l-4.194-8.566 4.194-8.57z"
          fill="#5a2c81"
        />
        <mask id="B_SAC" fill="#fff">
          <use xlinkHref="#A_SAC" />
        </mask>
        <path
          mask="url(#B_SAC)"
          d="M22.272 60.258h6.163V43.12h-6.163zM83.62 47.735l.007-4.616h-.007v-.027l-15.805.027v7.82c0 1.306.794 2.373 1.766 2.373h8.055v3.738h-9.82v3.15h15.812v-7.82c0-1.22-.688-2.227-1.578-2.353v-.013h-8.303v-3.592H77.9v1.312h5.72zm-16.814-22.06H61.76l10.4-10.432-7.87-7.887L53.8 17.767 43.4 7.355l-18.273 18.32H20.1l10.4-10.45-7.853-7.87-10.4 10.412-8.604-8.55V39.94H83.62V8.82z"
          fill="#5a2c81"
        />
        <path
          d="M21.123 36.64a.81.81 0 0 0 .804.805h4.495V36.24H22.76v-3.924h3.662V31.11h-5.3v5.53zm-5.693-2.054h2.028v-2.27H15.43v2.27zm2.765-3.47l-4.4-.01v6.343h1.634v-1.66h2.028v1.66h1.637v-5.53c0-.474-.417-.868-.9-.802zm58.792 5.1h2.02v-3.914h-2.02v3.914zm2.86-5.12H76.14a.81.81 0 0 0-.804.805v4.726a.81.81 0 0 0 .804.805h3.708c.44 0 .8-.36.8-.8V31.9c0-.444-.36-.805-.8-.805zm-73.383 2.97a.81.81 0 0 0 .807.805h2.855v1.36H6.464v1.206h5.3V34.48c0-.4-.308-.756-.72-.802L11 33.674H8.1v-1.36h3.665v-1.2h-5.3v2.97zm30.816.51h2.028v-2.27H37.28v2.27zm2.855-3.48h-4.492v6.343h1.637v-1.66h2.028v1.66h1.637v-5.53c0-.444-.364-.812-.8-.812zm28.065 1.21h1.836v5.133h1.63v-5.133H73.5V31.1h-5.3zm-16.95-1.207h-8.134v6.336h1.634v-5.13h2.008v5.13h1.657v-5.13h2.005v5.13h1.634v-5.53a.81.81 0 0 0-.804-.805m14.495-.001h-4.492v6.336h1.634v-5.13h2.028v5.13h1.637v-5.53a.81.81 0 0 0-.807-.805M54.28 36.64c0 .444.36.805.804.805h4.492V36.24h-3.658v-1.36h3.658v-1.203h-3.658v-1.362h3.658v-1.206H54.28v5.53zm-24.34-2.704h2.028v-1.62H29.94v1.62zm2.8 1.206h.873v-3.228a.8.8 0 0 0-.896-.799l-4.4-.01v6.343h1.634v-2.306h1.184l.98 2.3H33.7l-.97-2.3z"
          mask="url(#B_SAC)"
          fill="#fefefe"
        />
      </g>
    </svg>
  );
};

export default SAC;
