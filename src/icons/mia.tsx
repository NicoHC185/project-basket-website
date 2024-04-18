import React from 'react';

const MIA = ({ size = 100 }: { size?: number }) => {
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
      <title id="title">Miami Heat</title>
      <path
        d="M40.616 64.842l-.085-.044c-1.8-1-2.315-1.76-2.353-1.907.138-1.59 8.688-5.906 27.062-7.047-1.074 1.474-1.97 3.374-2.303 5.782l-.2 1.45c-.11.75-.25 1.615-.556 2.42-.49 1.285-1.91 2.63-4.112 3.9-7.703-1.005-13.888-2.62-17.453-4.553m59.55-5.272a1.47 1.47 0 0 0 .959-1.229c5.103 1.26 8.85 2.853 10.24 4.388.24.268.303.424.315.427-.062.215-.632 1.01-2.515 1.998-2.856 1.506-7.244 2.776-12.69 3.702.88-1.096 1.49-2.58 1.56-4.665.056-1.883.185-2.458.253-2.617.394-.784 1.36-1.815 1.88-2.004m21.988-3.98c-3.597-3.976-11.056-7.31-21.124-9.46l.568-.4c.69-.477 1.55-1.076 2.41-1.892 3.51-3.34 1.25-8.108-.638-10.395l-2.194-2.682a1.47 1.47 0 0 0-1.735-.413c-.606.27-.956.914-.856 1.57l.526 3.43c.162 1.055.124 1.524-.93 2.41-.06-.858-.185-1.777-.43-2.785-.626-2.6-1.95-3.746-2.097-3.87-.426-.342-1-.433-1.503-.218a1.48 1.48 0 0 0-.462.304l-.053-.304c-.438-2.552.162-3.967.165-4.05.147-.088.28-.2.385-.333.506-.62 1.512-1.64 1.518-1.647a1.48 1.48 0 0 0-.45-2.381c-.285-.124-1.14-.392-2.947-.162-3.403.472-6.788 2.46-6.68 5.84.044 1.453.5 2.794.87 3.88.15.448.362 1.073.432 1.453-.188.083-.526.197-1.097.3-5.265.958-9.326 3.478-11.44 7.088a11.63 11.63 0 0 0-1.153 2.703c-11.706.127-22.826 1.653-31.435 4.323-10.49 3.25-16.288 7.863-16.77 13.327-.256 2.856.874 7.04 7.618 10.916.12.127.262.233.426.31l2.753 1.317a1.11 1.11 0 0 0 .232.088c2.103.928 4.46 1.77 7.038 2.523a22.68 22.68 0 0 0-1.129.934c-6.49 5.343-10.215 13.24-10.215 21.66 0 7.498 2.912 14.547 8.2 19.843s12.32 8.217 19.8 8.217c13.23 0 24.765-9.407 27.382-22.204 2.23-6.678 1.97-13.763 1.874-16.424-.176-4.97 2.09-7.813 3.662-9.18 8.365-1.093 15.653-2.938 21.12-5.35a1.11 1.11 0 0 0 .232-.088l.865-.413c.012-.006.024-.01.035-.015l1.912-.914c.156-.074.294-.183.41-.307 4.647-2.697 7.262-5.965 7.574-9.47.22-2.5-.676-4.883-2.668-7.088"
        fill="#fefefe"
      />
      <path
        d="M36.712 62.76c.297-3.392 12.497-7.872 32.215-8.57-1.83 1.373-4 3.775-4.535 7.64l-.2 1.462c-.132.902-.29 1.82-.638 2.732-.76 1.995-2.9 3.64-5.19 4.895-7.938-1.002-14.574-2.676-18.447-4.78h-.006c-2.12-1.152-3.285-2.38-3.197-3.377m75.744-1.02c.753.83.703 1.367.688 1.547-.082.958-1.282 2.113-3.288 3.17h-.006c-4.218 2.222-11.465 3.902-20.094 4.786a7.43 7.43 0 0 1 1.238-.642l.14-.056c2.48-1.01 5.29-2.154 5.424-6.263.02-.65.056-2.658.415-3.374.462-.92 1.647-2.346 2.69-2.723.015-.01-1.744-.35-1.744-.35-.094-.01-.182-.015-.274-.015.59-.43 1.012-.943 1.32-1.482 7.01 1.462 11.724 3.454 13.488 5.402m8.61-5.16c-3.706-4.094-11.876-7.415-22.403-9.425.047-1.21.782-1.724 2.094-2.632.685-.474 1.46-1.014 2.238-1.754 3.397-3.233-.59-8.184-.762-8.393l-2.194-2.682.526 3.43c.36 2.35-.5 3.18-3.047 4.963a4.96 4.96 0 0 0-.847.74c.106-1.568.18-3.316-.347-5.505s-1.603-3.08-1.603-3.08l-.28 3.18c-.003.018-.247 2.48-3.53 5.46a9.99 9.99 0 0 0 .782-.993c1.61-2.346 1.144-5.016.606-8.105l-.112-.65c-.553-3.22.306-5.23.86-5.56.538-.657 1.61-1.75 1.61-1.75s-.568-.253-2.147-.047c-2.053.283-5.503 1.515-5.412 4.33.038 1.238.438 2.414.788 3.45.376 1.108.732 2.16.418 2.7-.253.427-1.015.766-2.206.984-4.838.88-8.544 3.15-10.435 6.386-.626 1.07-1.044 2.216-1.253 3.42-12 .035-23.362 1.535-32.17 4.267-9.874 3.062-15.315 7.23-15.74 12.05-.226 2.537.918 6.198 7.256 9.717l-.044.047 1.8.86.953.46.015-.015c2.92 1.31 6.347 2.44 10.165 3.372a21.53 21.53 0 0 0-3.735 2.655c-6.14 5.05-9.68 12.54-9.68 20.52a26.44 26.44 0 0 0 7.771 18.803c5.012 5.022 11.674 7.786 18.762 7.786 12.544 0 23.462-8.91 25.985-21.2 2.14-6.422 1.894-13.31 1.8-15.906-.212-5.903 2.68-9.17 4.518-10.64 8.382-1.064 15.8-2.903 21.324-5.37l.01.01.894-.424 1.918-.917-.053-.05c4.444-2.487 6.926-5.41 7.203-8.526.182-2.075-.588-4.082-2.29-5.968"
        fill="#2d2925"
      />
      <g fill="#8b2231">
        <path d="M34.25 100.862c.694 3.498 2.7 7.7 6.66 10.486a17.73 17.73 0 0 0 3.891 2.054c-.86-1.465-1.856-2.94-2.87-4.444-1.9-2.803-3.862-5.706-5.106-8.824-1.288-3.227-1.64-6.602-1.08-9.994a25.6 25.6 0 0 0-1.571 8.841 25.37 25.37 0 0 0 .076 1.88m4.274-1.41c1.174 2.938 3.08 5.753 4.92 8.48l3.876 6.245a21.31 21.31 0 0 0 3.606.522c-1.274-1.818-2.38-3.887-3.326-6.254-3.682-9.17-3.15-20.5 1.415-27.07 2.362-3.383 5.182-5.685 8.815-7.668 3.124-1.712 5.08-2.222 7.068-3.4 2.162-1.3 3.318-3.45 1.897-8.296-.418-1.415-.5-2.532-.406-3.4a10.38 10.38 0 0 0-1.059 3.363l.012-.012c-.224 1.37-.318 2.876-.9 4.412-1.912 5.016-11.168 7.8-12.388 8.172-3.512 1.06-6.326 2.682-8.518 4.64-6.338 5.65-7.47 14.126-5.012 20.28M77.13 54.12c.094.3.17.616.2.917.24 1.754-.288 3.168-2.432 3.513-2.2.357-2.962-1.568-3.132-3.14a7.5 7.5 0 0 1 .068-1.297l-1.106.024a11.56 11.56 0 0 0-2.515 1.939c-.44.95-.974 2.26-.156 5.337 1.44 5.426.83 8.7-3.518 10.574-5.544 2.4-9.085 3.793-13.838 9.782-2.262 2.85-3.497 7.57-3.7 12.325-.197 4.612.75 9.54 2.37 13.577 1.085 2.703 2.353 5.05 3.84 7.047a25.4 25.4 0 0 0 4.491-.578c-1.65-1.94-2.6-4.297-2.77-6.943-.568-8.797 4.162-12.5 11.438-18.343l3.256-2.738C82.63 75.06 78.84 63.814 80.27 54.212l-3.138-.1m5.205.184c-.397 1.92-.576 3.92-.703 5.992-.515 8.364-.265 17.833-10.83 27.237l-3.197 2.6c-7.07 5.682-11.115 9.23-10.835 16.958.1 2.55 1.165 4.78 2.956 6.534 1.976-.595 3.932-1.426 5.812-2.5 9.2-5.225 14.974-13.038 17.182-23.06 1.4-6.336 1.37-11.5 1.347-15.635-.012-2.095.26-6.204.26-6.204.294-2.593.712-6.23 3.715-10.996l.303-.466a135.01 135.01 0 0 0-6.009-.451" />
        <path d="M85.43 81.194v-.032c0 .015-.003.032-.003.047-.288 1.5-.362 3.186-.544 4.866l-.268 1.868-.103.5c-2.32 10.554-8.326 18.77-17.985 24.264-1.66.943-3.344 1.718-5.035 2.32 2.832 1.883 6.135 2.464 8.406 2.122 8.674-1.306 12.9-6.976 14.935-13.04 2.088-6.224 1.865-12.867 1.765-15.617-.33-9.186 6.762-12.575 6.762-12.575-5.515-.3-7.324 2.107-7.93 5.27m-5.792 33.893c-3.547 2.97-7.37 3.622-9.1 3.9-3.415.525-7.46-.3-11.035-3.115-.06-.047-.115-.097-.17-.144-1.532.4-3.068.684-4.597.8 3.5 3.766 8.1 5.906 14.288 6.327.026 0 .056.003.08.003h.006c4.206-1.653 7.87-4.388 10.65-7.87-.038.035-.074.065-.112.097m-32.278 6.327c.068-1.936-.476-3.84-1.365-5.744a25.59 25.59 0 0 1-6.2-2.744c-1.126-.687-2.14-1.736-3.038-2.7 2.294 4.73 6.015 8.653 10.603 11.202v-.003zm17.688 2.64c-3.46-.802-6.418-2.03-9.015-4.002a23.32 23.32 0 0 1-3.635-3.439 24.11 24.11 0 0 1-4.168-.413c.765 1.978 1.15 3.993.903 6.1v.003c3.238 1.482 6.832 2.316 10.626 2.316a25.58 25.58 0 0 0 5.326-.56c-.015-.003-.026-.012-.038-.015m29.725-62.963c-.597 1.998-2.56 1.762-3.126.684-.903-1.703-.562-3.02.38-3.92s2.476-1.38 3.968-2.054c.01-.006.015-.01.02-.012l-5.5-.8-.08.1-.512.595c-3.085 4.65-3.47 8.096-3.774 10.745l-.094.816c-.17 1.4-.162 3.145-.153 5.172l.006.86-.082 2.087c.018.006.03.01.044.012.024-.283.035-.392.032-.248.874-2.785 2.476-4.48 4.735-5.4 2.447-.993 4.862-1.9 4.974-5.47.05-1.485.16-2.974.497-3.73.618-1.376 1.724-1.742 1.724-1.742-1.188-.115-2.485.383-3.06 2.302" />
      </g>
      <path
        d="M97.733 46.98c.18-2.38 2.43-2.826 4.606-4.9 2.797-2.658-.838-7.1-.838-7.1.46 2.985-.92 4.126-3.444 5.885-.8.56-1.382 1.344-1.462 2.33l-.403 3.516 1.54.268m-7.698-4.147l-1.9 1.544-1.203 1.185 7.147.825c1.47-2.682 2.174-5.726 1.3-10.907 0 0-.203 3.5-5.353 7.353m-13.73 2.218l8.253.324.268-.268c1.806-1.94 4.594-3.578 6.088-5.753s.9-4.836.338-8.057c-.95-5.552 1.385-6.58 1.385-6.58s-4.682.645-4.594 3.36c.12 3.643 3.868 7.07-1.776 8.1-6.194 1.13-10.044 4.486-10.9 8.874l.93.003"
        fill="#f9a11a"
      />
      <path
        d="M76.3 46.505c-25.947-.256-47.594 6.454-48.347 14.99-.3 3.398 2.762 6.575 8.194 9.183 3.36 1.612 7.62 3.003 12.553 4.1.985-.44 2.018-.83 3.106-1.16.86-.26 2.444-.78 4.19-1.54C48.722 71 42.84 69.378 39.222 67.418c-2.67-1.45-4.11-3.077-3.956-4.786.506-5.73 18.67-10.2 40.576-9.985s39.253 5.037 38.747 10.77c-.138 1.56-1.585 3.027-4.062 4.332-4.576 2.408-12.66 4.262-22.476 5.125a7.66 7.66 0 0 0-.882 1.568c4.465-1.698 9.61.8 9.61.8s.344.133.585.298c6.515-1.164 12.112-2.82 16.306-4.824 4.962-2.367 7.97-5.216 8.24-8.305.753-8.532-19.67-15.66-45.62-15.915"
        fill="#fefefe"
      />
    </svg>
  );
};

export default MIA;
