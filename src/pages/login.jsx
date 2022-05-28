// import { useLogin } from 'hooks/useLogin';
import React from 'react';
import SignIn from '../components/SignIn/SignIn';
// import staticProps from 'utils/translationHelper';

export function LoginPage() {
//   const { formik } = useLogin();
  return (
    <>
      <SignIn
        // type="borrower"
        // formik={formik}
        // title="login_page.welcome_borrower"
        // subTitle="login_page.inform_borrower"
      />
    </>
  );
}

// export const getStaticProps = staticProps;

export default LoginPage;
