import styles from "./PrivacyPolicy.module.css";

function PrivacyPolicy() {
  return (
    <div>
      <div className={styles.line}></div>
      <div className={styles.textContainer}>
        <p>Privacy Policies</p>
        <span>
          You may consult this list to find the Privacy Policy for each of the
          advertising partners of Website Name.
        </span>
        <span>
          Third-party ad servers or ad networks uses technologies like cookies,
          JavaScript, or Web Beacons that are used in their respective
          advertisements and links that appear on Website Name, which are sent
          directly to users' browser. They automatically receive your IP address
          when this occurs. These technologies are used to measure the
          effectiveness of their advertising campaigns and/or to personalize the
          advertising content that you see on websites that you visit.
        </span>
        <span>
          Note that Website Name has no access to or control over these cookies
          that are used by third-party advertisers.
        </span>
        <p>Third Part Privacy Policies</p>
        <span>
          Website Name's Privacy Policy does not apply to other advertisers or
          websites. Thus, we are advising you to consult the respective Privacy
          Policies of these third-party ad servers for more detailed
          information. It may include their practices and instructions about how
          to opt-out of certain options. You may find a complete list of these
          Privacy Policies and their links here: Privacy Policy Links.
        </span>
        <span>
          You can choose to disable cookies through your individual browser
          options. To know more detailed information about cookie management
          with specific web browsers, it can be found at the browsers'
          respective websites. What Are Cookies?
        </span>
        <p>Children's Information</p>
        <span>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</span>
        <span>Website Name does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</span>
        <p>Online Privacy Policy Only</p>
        <span>
This privacy policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Website Name. This policy is not applicable to any information collected offline or via channels other than this website.</span>
        <p>Consent</p>
        <span>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</span>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
