import Icon from "./Icon";

const SocialLinks = () => {
  return (
    <div className="flex mb-12 space-x-3 md:space-x-5">
      <Icon link="https://discord.com/invite/fQfJheshq6">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.9124 21.2261L26.6657 7.07034C26.5807 6.785 26.4328 6.52232 26.233 6.30158C26.0332 6.08085 25.7865 5.90765 25.511 5.79471L25.4439 5.8151L25.5125 5.79111C24.1187 5.2228 22.6729 4.79131 21.1956 4.50272C21.0668 4.47711 20.9342 4.47712 20.8054 4.50275C20.6766 4.52839 20.5541 4.57914 20.4449 4.65211C20.3358 4.72508 20.242 4.81884 20.1691 4.92804C20.0961 5.03724 20.0454 5.15974 20.0198 5.28855C19.9942 5.41735 19.9942 5.54994 20.0198 5.67874C20.0454 5.80754 20.0962 5.93003 20.1692 6.03922C20.2421 6.1484 20.3359 6.24215 20.4451 6.3151C20.5543 6.38805 20.6768 6.43878 20.8056 6.46439C21.3662 6.57584 21.9155 6.70698 22.4537 6.85782C22.6644 6.96189 22.8317 7.13706 22.9259 7.35243C23.02 7.56779 23.0351 7.8095 22.9684 8.0349C22.9017 8.2603 22.7576 8.4549 22.5614 8.58436C22.3652 8.71382 22.1296 8.76981 21.8961 8.74246C18.0733 7.76037 14.0652 7.75248 10.2385 8.71951C10.0008 8.77798 9.74981 8.74712 9.53329 8.6328C9.31677 8.51848 9.14975 8.32865 9.06394 8.09933C8.97812 7.87002 8.97947 7.61717 9.06774 7.38879C9.15601 7.16041 9.32506 6.97238 9.54279 6.86038L9.54706 6.86185C10.0849 6.71121 10.6349 6.57989 11.1971 6.46787C11.4572 6.41611 11.6861 6.26317 11.8335 6.04266C11.9808 5.82216 12.0345 5.55216 11.9828 5.29205C11.9311 5.03195 11.7782 4.80303 11.5577 4.65566C11.3372 4.50828 11.0672 4.45452 10.8071 4.5062C9.32981 4.79482 7.88403 5.22631 6.49017 5.79459C6.21469 5.90755 5.96798 6.08075 5.76816 6.30148C5.56834 6.52222 5.42046 6.78489 5.33539 7.07022L1.08868 21.2261C0.978977 21.5965 0.978241 21.9906 1.08656 22.3614C1.19489 22.7321 1.40768 23.0639 1.69952 23.3169C1.81885 23.4207 1.94116 23.5226 2.06519 23.6234C2.06812 23.6258 2.07062 23.6285 2.07355 23.6309C4.10236 25.2766 6.76147 26.534 9.76337 27.2668C10.021 27.3297 10.2931 27.2876 10.5197 27.1499C10.7464 27.0122 10.9091 26.7901 10.972 26.5325C11.0349 26.2749 10.9929 26.0028 10.8552 25.7761C10.7175 25.5495 10.4954 25.3868 10.2377 25.3239C8.88769 24.9994 7.57493 24.5358 6.3205 23.9406L6.32873 23.9412C6.15283 23.7817 6.03944 23.5648 6.00885 23.3294C5.97826 23.0939 6.03247 22.8553 6.16178 22.6561C6.29109 22.457 6.48706 22.3104 6.71459 22.2426C6.94213 22.1747 7.18638 22.1901 7.40363 22.2859C9.7768 23.343 12.7584 24 16.0005 24C19.2427 24 22.2264 23.3422 24.5996 22.2851C24.8168 22.1899 25.0609 22.175 25.2881 22.2431C25.5153 22.3113 25.7109 22.458 25.8399 22.6571C25.9689 22.8562 26.0229 23.0947 25.9922 23.33C25.9615 23.5652 25.8481 23.7818 25.6724 23.9412L25.6806 23.9406C24.4262 24.5358 23.1134 24.9994 21.7634 25.3239C21.5057 25.3868 21.2836 25.5495 21.1459 25.7761C21.0082 26.0028 20.9662 26.2749 21.0291 26.5325C21.092 26.7901 21.2547 27.0122 21.4814 27.1499C21.708 27.2876 21.9801 27.3297 22.2377 27.2668C25.2396 26.534 27.8987 25.2766 29.9276 23.6309C29.9306 23.6285 29.9332 23.6256 29.9362 23.6231H29.9362C30.0601 23.5224 30.1824 23.4205 30.3017 23.3168C30.5935 23.0637 30.8062 22.732 30.9145 22.3613C31.0228 21.9905 31.0221 21.5964 30.9124 21.2261ZM12.0005 19.5C11.7039 19.5 11.4139 19.4121 11.1672 19.2472C10.9205 19.0824 10.7283 18.8481 10.6147 18.5741C10.5012 18.3 10.4715 17.9984 10.5294 17.7074C10.5872 17.4164 10.7301 17.1491 10.9399 16.9394C11.1497 16.7296 11.4169 16.5867 11.7079 16.5289C11.9989 16.471 12.3005 16.5007 12.5746 16.6142C12.8487 16.7277 13.0829 16.92 13.2478 17.1667C13.4126 17.4133 13.5005 17.7034 13.5005 18C13.5005 18.3979 13.3425 18.7794 13.0612 19.0607C12.7799 19.342 12.3984 19.5 12.0005 19.5ZM20.0005 19.5C19.7039 19.5 19.4139 19.4121 19.1672 19.2472C18.9205 19.0824 18.7283 18.8481 18.6147 18.5741C18.5012 18.3 18.4715 17.9984 18.5294 17.7074C18.5872 17.4164 18.7301 17.1491 18.9399 16.9394C19.1497 16.7296 19.4169 16.5867 19.7079 16.5289C19.9989 16.471 20.3005 16.5007 20.5746 16.6142C20.8487 16.7277 21.0829 16.92 21.2478 17.1667C21.4126 17.4133 21.5005 17.7034 21.5005 18C21.5005 18.3979 21.3425 18.7794 21.0612 19.0607C20.7799 19.342 20.3984 19.5 20.0005 19.5Z"
            fill="#D61818"
          />
        </svg>
      </Icon>
      <Icon link="https://t.me/funkypizza">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.9068 3.96705C28.6313 3.72912 28.2959 3.5711 27.9369 3.51012C27.578 3.44914 27.2092 3.48752 26.8706 3.6211L3.80092 12.6842C3.39881 12.8422 3.05866 13.1261 2.83137 13.4935C2.60409 13.8609 2.50188 14.2921 2.54005 14.7224C2.57822 15.1527 2.75471 15.5591 3.04311 15.8808C3.33152 16.2025 3.71633 16.4221 4.13997 16.5068L9.99983 17.6788V24.9981C9.99949 25.3938 10.1166 25.7807 10.3363 26.1098C10.556 26.4389 10.8684 26.6954 11.234 26.8469C11.5996 26.9983 12.0019 27.0378 12.39 26.9605C12.7781 26.8831 13.1344 26.6923 13.414 26.4122L16.6569 23.1694L21.5789 27.5007C21.9413 27.8225 22.4089 28.0005 22.8936 28.0011C23.1042 28.0009 23.3136 27.9677 23.514 27.9027C23.8445 27.7979 24.1418 27.6082 24.3762 27.3526C24.6105 27.097 24.7737 26.7844 24.8496 26.4461L29.5513 5.92945C29.6332 5.57468 29.6164 5.20428 29.5028 4.85836C29.3892 4.51244 29.1831 4.20421 28.9068 3.96705ZM22.9001 25.9993L12.6011 16.936L27.4317 6.22517L22.9001 25.9993Z"
            fill="#D61818"
          />
        </svg>
      </Icon>
      <Icon link="https://twitter.com/FunkyPizzaNFT">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.7067 9.70714L26.9362 13.4777C26.1834 22.2128 18.8168 29 9.99958 29C8.18403 29 6.68781 28.7122 5.55237 28.1445C4.63605 27.6863 4.26069 27.1946 4.16755 27.0547C4.08399 26.9294 4.02982 26.7868 4.0091 26.6376C3.98838 26.4884 4.00163 26.3364 4.04787 26.1931C4.09411 26.0497 4.17214 25.9186 4.27613 25.8097C4.38013 25.7007 4.5074 25.6166 4.64844 25.5637C4.68061 25.5516 7.62946 24.419 9.53534 22.2626C8.34988 21.4185 7.30652 20.3908 6.44452 19.2182C4.73102 16.8928 2.91877 12.8544 4.01569 6.82115C4.04834 6.6416 4.1295 6.47441 4.25038 6.33769C4.37125 6.20096 4.52724 6.09992 4.70143 6.04551C4.87563 5.9911 5.06139 5.9854 5.23859 6.02901C5.4158 6.07263 5.57769 6.16391 5.70673 6.29295C5.7508 6.3369 9.91199 10.4393 14.9989 11.7645L14.9996 10.9996C15.0104 9.39848 15.6564 7.86718 16.7958 6.74226C17.9351 5.61733 19.4745 4.99084 21.0756 5.00048C22.1157 5.01488 23.1343 5.29882 24.0319 5.82455C24.9295 6.35028 25.6754 7.09983 26.1967 7.99999L29.9996 8.00005C30.1974 8.00005 30.3907 8.05869 30.5551 8.16857C30.7196 8.27845 30.8478 8.43463 30.9235 8.61735C30.9992 8.80007 31.019 9.00113 30.9804 9.19512C30.9418 9.3891 30.8466 9.56728 30.7067 9.70714Z"
            fill="#D61818"
          />
        </svg>
      </Icon>
    </div>
  );
};

export default SocialLinks;
