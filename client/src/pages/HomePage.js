import Layout from "./../components/Layout";
const HomePage = () => {
  return (
    <Layout>
      <h2 className="div top mt-3 mb-6">Welcome to Vjti Railway Concession</h2>
      <hr></hr>
      <div className="div container">
        <div className="mt-3 ml-5">
          <h2 className="text-center align-middle underline">
            Some Instruction's
          </h2>
          <li>
            Student's with Following Cateogary can only Apply for VJTI Railway
            Concession
            <li>Open</li>
            <li>Sc</li>
            <li>St</li>
          </li>
          <li>
            Documents required: ( Create a Google Drive and add the following
            documents to that drive. Make sure the drive is public until you
            receive your Railway Pass Concession ) College ID / Allotment Letter
            Old Railway Concession Pass / Aadhar Card Current Address Proof:
            Aadhar Card (If you are staying at the same address mentioned in
            Aadhar Card) OR Light Bill If students are staying in PG /
            Relative's Home: Declaration Letter by Owner / Relative (That
            concerned student is staying for educational purpose) Aadhar Card
            (Owner / Relative) Light Bill For SC/ST candidates: Diploma Students
            - CASTE CERTIFICATE B.Tech / M.Tech - CASTE VALIDITY CERTIFICATE You
            Can Apply now forRailway Concession here. Once you get the ACCEPTED
            notification you can collect your Railway Pass from VJTI Railway
            Department If you get a REJECTED notification please enquire at VJTI
            Railway Concession Department . While Collecting Pass from VJTI
            Railway Pass Department Keep college ID card and Old railway Pass
            with you .
          </li>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
