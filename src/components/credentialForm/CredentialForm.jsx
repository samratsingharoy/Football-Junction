import React from "react";
import styles from "./CredentialForm.module.css";
import { Link } from "react-router-dom";

const CredentialForm = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.headerContainer}>
          <h4 className={styles.header}>{data.formHeader}</h4>
        </div>

        {data.formType === "otp" && (
          <div className={styles.otpContainer}>
            <p className={styles.otpText}>Enter the OTP sent to your Email</p>
          </div>
        )}

        <form action="" className={styles.userForm}>
          {data.inputFields.map((val, i) => {
            return (
              <input
                key={i}
                type={val.inputType}
                placeholder={val.placeholder}
                className={styles.userInput}
                required
              />
            );
          })}

          <div className={styles.btnContainer}>
            <Link
              to={
                data.formType === "otp"
                  ? "/forgot-password"
                  : data.formType === "signin"
                  ? "/"
                  : data.formType === "forgotPassword"
                  ? "/password-changed-successfully"
                  : "/thank-You"
              }
            >
              <button className={styles.btn}>{data.button}</button>
            </Link>
          </div>
        </form>

        {data.formType === "signin" && (
          <div className={styles.forgotContainer}>
            <Link to={"/otp"}>
              <p className={styles.forgotText}>Forgot Password?</p>
            </Link>
          </div>
        )}

        {data.gLogin && (
          <div className={styles.orContainer}>
            <hr />
            <p>or</p>
            <hr />
          </div>
        )}

        {data.gLogin && (
          <div className={styles.gContainer}>
            <div className={styles.gIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_118_944)">
                  <path
                    d="M11.9999 5C13.6167 5 15.1012 5.55353 16.2863 6.47406L19.9234 3.00409C17.8087 1.13995 15.0406 0 11.9999 0C7.39233 0 3.39661 2.59991 1.38574 6.40985L5.43018 9.60278C6.40991 6.91937 8.97742 5 11.9999 5Z"
                    fill="#F44336"
                  />
                  <path
                    d="M23.8961 13.5018C23.9586 13.0102 24 12.5087 24 12C24 11.1422 23.9063 10.3068 23.7352 9.5H12V14.5H18.4862C17.9615 15.8638 17.0272 17.0178 15.838 17.8195L19.8975 21.0243C22.0494 19.1354 23.522 16.4904 23.8961 13.5018Z"
                    fill="#2196F3"
                  />
                  <path
                    d="M5 11.9998C5 11.1564 5.15686 10.3514 5.43024 9.6026L1.3858 6.40967C0.504333 8.07983 0 9.97998 0 11.9998C0 13.9971 0.495056 15.8762 1.35822 17.5328L5.40778 14.3358C5.14844 13.6042 5 12.8203 5 11.9998Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M12.0002 19C8.95465 19 6.37061 17.0515 5.40796 14.3359L1.3584 17.533C3.35944 21.3735 7.37 24 12.0002 24C15.028 24 17.7889 22.8752 19.8976 21.0243L15.8382 17.8195C14.7414 18.5589 13.4286 19 12.0002 19Z"
                    fill="#00B060"
                  />
                  <path
                    opacity="0.1"
                    d="M12.0003 23.7499C8.46863 23.7499 5.29303 22.2927 3.04785 19.9712C5.24567 22.4377 8.43677 23.9999 12.0003 23.9999C15.5309 23.9999 18.6956 22.4685 20.8884 20.0406C18.6499 22.3245 15.4984 23.7499 12.0003 23.7499Z"
                    fill="url(#paint0_radial_118_944)"
                  />
                  <path
                    opacity="0.1"
                    d="M12 14.25V14.5H18.4862L18.5875 14.25H12Z"
                    fill="url(#paint1_radial_118_944)"
                  />
                  <path
                    d="M23.9942 12.147C23.995 12.0977 23.9998 12.0493 23.9998 11.9999C23.9998 11.986 23.9976 11.9725 23.9975 11.9585C23.9968 12.0215 23.9937 12.0837 23.9942 12.147Z"
                    fill="#F2F2F2"
                  />
                  <path
                    opacity="0.2"
                    d="M12 9.5V9.75H23.7856C23.7698 9.66748 23.7526 9.58191 23.7352 9.5H12Z"
                    fill="#F2F2F2"
                  />
                  <path
                    opacity="0.1"
                    d="M15.7885 5.8905C14.6939 5.18048 13.4019 4.74982 12 4.74982C8.13403 4.74982 5 7.88379 5 11.7498C5 11.792 5.00057 11.825 5.0013 11.867C5.06874 8.05933 8.17621 4.99982 12 4.99982C13.4019 4.99982 14.6939 5.43048 15.7885 6.1405C15.9561 6.24939 16.1289 6.35162 16.2863 6.47388L19.9235 3.00391L16.2863 6.22388C16.1289 6.10162 15.9561 5.99939 15.7885 5.8905Z"
                    fill="url(#paint2_radial_118_944)"
                  />
                  <path
                    opacity="0.2"
                    d="M12 0.25C14.975 0.25 17.6829 1.34839 19.7793 3.1416L19.9235 3.00409L19.8134 2.90827C17.709 1.08436 15.0035 0 12 0C5.37256 0 0 5.37256 0 12C0 12.0422 0.0058594 12.0829 0.0062866 12.125C0.0740356 5.55585 5.41473 0.25 12 0.25Z"
                    fill="#F2F2F2"
                  />
                </g>
                <defs>
                  <radialGradient
                    id="paint0_radial_118_944"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(11.9681 21.9855) rotate(90) scale(2.01434 21.6069)"
                  >
                    <stop stop-color="#1C1C1C" stop-opacity="0.88" />
                    <stop offset="1" stop-color="#0D0D0D" />
                  </radialGradient>
                  <radialGradient
                    id="paint1_radial_118_944"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(15.2937 14.375) rotate(90) scale(0.125 7.97819)"
                  >
                    <stop stop-color="#1C1C1C" stop-opacity="0.88" />
                    <stop offset="1" stop-color="#0D0D0D" />
                  </radialGradient>
                  <radialGradient
                    id="paint2_radial_118_944"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(12.4617 7.43546) rotate(90) scale(4.43155 18.074)"
                  >
                    <stop stop-color="#1C1C1C" stop-opacity="0.88" />
                    <stop offset="1" stop-color="#0D0D0D" />
                  </radialGradient>
                  <clipPath id="clip0_118_944">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <h4 className={styles.gText}>Continue with Google</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default CredentialForm;
