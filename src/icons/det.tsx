import React from 'react';

const DET = ({ size = 100 }: { size?: number }) => {
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
      <title id="title">Detroit Pistons</title>
      <defs>
        <path id="A_DET" d="M100 0v100H0V0z" />
      </defs>
      <g transform="translate(25 25)" fillRule="evenodd">
        <mask id="B_DET" fill="#fff">
          <use xlinkHref="#A_DET" />
        </mask>
        <path
          d="M98 50c0 26.51-21.49 48-48 48S2 76.51 2 50 23.49 2 50 2s48 21.5 48 48"
          stroke="#fff"
          fill="#b4b2b2"
          mask="url(#B_DET)"
        />
        <path
          d="M96.622 50c0 25.75-20.874 46.623-46.622 46.623S3.377 75.75 3.377 50 24.25 3.377 50 3.377 96.622 24.25 96.622 50"
          fill="#1d428a"
        />
        <path
          d="M50 89.755c-21.958 0-39.757-17.8-39.757-39.755S28.042 10.244 50 10.244 89.757 28.042 89.757 50 71.957 89.755 50 89.755z"
          fill="#c8102e"
        />
        <g fill="#fefefe">
          <path d="M50 87.475c-15.88 0-29.473-9.93-34.922-23.903C21.74 72.7 34.894 78.912 50 78.912s28.26-6.22 34.923-15.34C79.474 77.544 65.88 87.475 50 87.475m0-74.952c15.88 0 29.475 9.932 34.923 23.906C78.26 27.3 65.108 21.088 50 21.088S21.74 27.3 15.078 36.43C20.526 22.455 34.12 12.523 50 12.523M12.553 51.17h7.317v-2.34h-7.317a38.11 38.11 0 0 1 .163-2.634C15.3 33.142 31.036 23.068 50 23.068s34.7 10.074 37.285 23.13c.088.868.136 1.748.163 2.633H80.13v2.34h7.318c-.027.886-.075 1.766-.163 2.635C84.7 66.858 68.963 76.93 50 76.93S15.3 66.86 12.716 53.804c-.088-.87-.135-1.75-.163-2.635M50 10.243c-21.92 0-39.756 17.835-39.756 39.757S28.08 89.755 50 89.755 89.757 71.92 89.757 50 71.922 10.243 50 10.243M33.2 63.67h2.813V51.04H33.2z" />
          <path d="M43.975 51.045H43.9l-4.212-.006-.143.008c-.85 0-1.388.403-1.52 1.134a1.06 1.06 0 0 0-.023.2c-.003.026-.195 2.393.038 3.06.377 1.087 1.254 1.5 2.06 1.74l.084.024a1.04 1.04 0 0 1 .156.049c.1.036.15.084.188.144l.012 4.548-2.32.007.01 1.683 3.054.003c1.06-.046 1.8-.5 2.06-1.3.077-.617.087-4.852.026-5.736-.02-.334-.172-.602-.48-.845a3.59 3.59 0 0 0-.457-.294l-.52-.256c-.66-.322-1.407-.688-1.407-1.53l.002-.72h2.208c.453 0 .814-.222 1.05-.64.178-.32.226-.64.225-.658a3.46 3.46 0 0 0 .001-.531l-.005-.085zM55.9 53.88a4.23 4.23 0 0 1 .087-.78l.05-.05a2.45 2.45 0 0 1 .397-.028l.057.001c.953.01.98.297.98 2.022v5.274l-.01.462a2.68 2.68 0 0 1-.052.427l-.05.05a3.46 3.46 0 0 1-.502.037c-.35 0-.593-.076-.744-.23-.224-.23-.23-.617-.217-1.062v-5.326l.005-.797m.927-2.848c-.633 0-1.293.02-1.824.17-1.377.332-2.047 1.252-2.047 2.813v7.513c0 1.925 1.377 2.32 3.444 2.32 2.505 0 3.94-.885 3.94-2.426l.004-7.83c0-2.56-1.63-2.56-3.518-2.56m10.035 5.374C65.52 51.543 63.364 51 62.47 51a1.52 1.52 0 0 0-.377.039l-.067.018-.001 12.62 2.847.004v-5.077l1.983 5.077h2.894V51.05H66.86v5.355zm-38.22.236l-1.582.002v-3.668h.988c.312.04.6.16.6.536l-.007 3.13m1.136-5.608l-7.183.01-.004.086c-.001.015-.06 1.503 1.6 1.85v10.693h2.9V58.3h2.448c1.292 0 2.033-.85 2.033-2.332l.007-.452c0-3.578-.145-4.295-1.8-4.48m22.305.02H45.5v1.986h1.876V63.7h2.893V53.03l.105.003c.517 0 .93-.158 1.224-.47.525-.552.488-1.385.487-1.42l-.005-.086zm25.33-.01h-.085l-4.213-.006-.142.008c-.85 0-1.388.403-1.52 1.134-.023.12-.023.2-.023.2-.003.026-.196 2.393.038 3.06.377 1.087 1.254 1.5 2.06 1.74l.084.024a.91.91 0 0 1 .156.05c.1.036.152.084.2.144l.012 4.548-2.32.007.008 1.683 3.056.003c1.058-.046 1.8-.5 2.06-1.3.077-.617.087-4.852.027-5.736-.02-.334-.173-.602-.482-.845a3.57 3.57 0 0 0-.456-.294l-.52-.256c-.66-.322-1.407-.688-1.407-1.53l.001-.72h2.207c.454 0 .815-.222 1.05-.64.178-.32.227-.64.226-.658.02-.2.01-.403.001-.53l-.005-.085zM51.598 38.1h.48.076c.736.012 1 .016 1 1.312l-.023 1.706a.6.6 0 0 1-.156.41.32.32 0 0 1-.235.102h-1.132V38.1zm-.008 5.155h.488c.47.01 1.258.154 1.258.998l.056 2.33.064.805c.202.736.774 1.177 1.667 1.273h.824v-4.495c0-.386-.2-.926-.513-1.312l-.06-.082c.452-.507.627-1.018.627-1.798l.003-.44c0-3.492-.14-4.2-1.76-4.37H48.78V48.48h2.8v-5.236zm17.447-7.1h-2.74l-.01 12.32 2.75.002zm-26.32 12.338l2.82-.004.004-10.413.103.002c.506 0 .9-.154 1.197-.46.5-.538.474-1.35.472-1.382l-.004-.083h-6.423v1.935h1.83V48.49zm29.592 0l2.823-.004V38.075l.104.002c.508 0 .9-.155 1.2-.46.5-.54.475-1.35.473-1.382l-.005-.083H70.48v1.935h1.83V48.49zM39.4 46.5h-2.954v-2.995h2.025V40.82h-2.025v-2.774H39.4v-1.893h-5.695l-.01 12.32H39.4zm-10.242 0h-1.56v-8.413c.967-.04 1.172.045 1.188.053.364.143.357.818.357.836.102.974.027 6.75.016 7.524m.974-10.345h-7.026l-.01.075c-.005.03-.1.738.367 1.277.3.344.73.536 1.316.574v10.38h5.232c1.193 0 1.994-1.014 1.994-2.522l.002-5.718c.002-3.155.003-4.003-1.875-4.065m30.244 2.786c.014-.326.042-.57.087-.765l.05-.047a2.38 2.38 0 0 1 .392-.027h.056c.947.012.974.293.974 1.98v5.16l-.01.453a3.11 3.11 0 0 1-.05.417l-.052.05a3.26 3.26 0 0 1-.498.037c-.345 0-.587-.075-.737-.227-.223-.226-.23-.603-.216-1.04V39.72l.004-.78m.92-2.787c-.628 0-1.283.02-1.8.167-1.367.325-2.03 1.225-2.03 2.752v7.354c0 1.884 1.367 2.27 3.418 2.27 2.485 0 3.9-.865 3.9-2.373l.004-7.665c0-2.504-1.618-2.504-3.5-2.504" />
        </g>
      </g>
    </svg>
  );
};

export default DET;
