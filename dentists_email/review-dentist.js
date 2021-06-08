const handlebars = require("handlebars");
const mjml2html = require("mjml");

module.exports = function getReviewDentistTemplate() {
  const contextTemp = {
    preview: "Vivamus aliquet elit ac", // сообщение при предпросмотре в почтовом ящике
    title: "Vivamus aliquet elit ac",
    practiceName: "Lorem ipsum",
    buttonLink: "#",
    instagramLink: "#",
    twitterLink: "#",
    linkedInLink: "#",
    facebookLink: "#",
    logoLink: "#",
  };

  const template = handlebars.compile(`<mjml>
  <mj-head>
    <mj-font
      name="Montserrat"
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800"
    />
    <mj-preview>{{preview}}</mj-preview>
    <mj-title>{{title}}</mj-title>
    <mj-style inline="inline">
      .title h4 { font-weight: 600; padding-top: 10px; font-size: 18px; color:
      #9bc3ca; margin: 0 } .title span { color: #6caaad; font-weight: 700}
      .title p {font-size: 14px; font-weight: 600; margin: 0} .clinic-info h4 {
      font-size: 18px; font-weight: 500; margin: 0; padding: 10px} .clinic-info
      p { font-size: 16px; line-height: 20px}.
      confirmed-top{border-top-left-radius: 10px}
    </mj-style>
    <mj-style>
      .confirmed-top h5 {margin: 0; font-size: 16px; font-weight: 500}
      .confirmed-top h4 {margin: 0; font-size: 18px} .confirmed-bottom h4
      {margin: 0; font-size: 18px}
    </mj-style>
    <mj-style>
      .doctor-name h4 {margin: 0; font-size: 16px } .doctor-name p {margin: 0;
      padding-top:6px; font-size: 16px }</mj-style
    >
  </mj-head>
  <mj-body>
  <mj-section background-color="#ffffff">
  <mj-column>
    <mj-image
      width="120px"
      src="${process.env.API_URL}/email-assets/logo/logo.png"
      align="left"
      href={{logoLink}}
      alt="logo"
    />
  </mj-column>
</mj-section>
    <mj-section background-color="#e8f4ee" padding="20px 0 0 0">
      <mj-column>
        <mj-text
          align="center"
          font-family="Montserrat"
          css-class="title"
          padding="0"
        >
          <h4>
            Good news {{practiceName}}, <br />A patient sent a review from their
            experience !
          </h4>
        </mj-text></mj-column
      >
    </mj-section>
    <mj-section background-color="#e8f4ee">
      <mj-column width="500px">
        <mj-image
          src="${process.env.API_URL}/email-assets/background/review-bgnd.png"
          alt="background-image"
          padding="0"
          width="330px"
        />
        <mj-text
          color="#4f4f4f"
          align="center"
          font-size="14px"
          font-family="Montserrat"
          font-weight="600"
          padding-top="30px"
        >
          This feedback will be reflected on your profile after it has been
          reviewed.
        </mj-text>
      </mj-column>
    </mj-section>
    <mj-section background-color="#ffffff">
      <mj-column> <mj-spacer height="50px" /></mj-column
    ></mj-section>

    <mj-section background-color="#a3d4cb">
      <mj-column
        ><mj-social
          font-size="15px"
          icon-size="30px"
          mode="horizontal"
          align="left"
        >
          <mj-social-element
            src="${process.env.API_URL}/email-assets/icons/instagram.png"
            href={{instagramLink}}
            alt="instagram"
          >
          </mj-social-element>
          <mj-social-element
            src="${process.env.API_URL}/email-assets/icons/twitter.png"
            href={{twitterLink}}
            alt="twitter"
          >
          </mj-social-element>
          <mj-social-element
            src="${process.env.API_URL}/email-assets/icons/linked-in.png"
            href={{linkedInLink}}
            alt="linked-in"
          >
          </mj-social-element>
          <mj-social-element
            src="${process.env.API_URL}/email-assets/icons/facebook.png"
            href={{facebookLink}}
            alt="facebook"
          >
          </mj-social-element>
        </mj-social>
      </mj-column>
      <mj-column>
        <mj-image
          width="120px"
          src="${process.env.API_URL}/email-assets/logo/white-logo.png"
          align="right"
          href={{logoLink}}
          alt="logo"
        />
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>

`);

  const mjml = template(contextTemp);
  const result = mjml2html(mjml);

  return result.html;
};
