const handlebars = require("handlebars");
const mjml2html = require("mjml");

module.exports = function getWelcomeDentistTemplate() {
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
    <mj-font name="Montserrat" href="https://fonts.googleapis.com/css2?family=Montserrat" />
    <mj-preview>{{preview}}</mj-preview>
    <mj-title>{{title}}</mj-title>
  </mj-head>
  <mj-body>
    <mj-hero background-color='#ffffff' background-url='${process.env.API_URL}/email-assets/background/welcome-bgnd.png'>
      <mj-spacer height="10px" />
      <mj-text align='center' color='#9bc3ca' font-family='Montserrat' font-weight='700'>
        <h1>Hello {{practiceName}}, <br /> Welcome to UAE Dentist! </h1>
      </mj-text>
      <mj-spacer height="400px" />
    </mj-hero>
    <mj-section background-color='#ffffff'>
      <mj-column width='450px'>
        <mj-text align='center' color='#4f4f4f' font-size='14px' font-weight='600' font-family='Montserrat' line-height='21px' padding='0 0 15px'>
          Thank you for signing up! <br /><br />
          Here at UAE Dentist, it is our aim to give our patients the best dental care they deserve from the best dentists across the country.
          <br /><br />
          We are here to help you connect to your future
          patients with ease. One of our associates will reach out to you shortly.
        </mj-text>
        </mj-cloumn>
    </mj-section>
    <mj-section background-color='#ffffff'>
      <mj-column width='370px'>
        <mj-button href={{buttonLink}} border-radius='20px' line-height='20px' font-family="Montserrat" background-color="#a3d4cb" color="white" text-transform='uppercase' font-weight='600' padding-bottom='50px'>
          Let\`s get you a better smile
        </mj-button>
      </mj-column>
    </mj-section>
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
</mjml>`);

  const mjml = template(contextTemp);
  const result = mjml2html(mjml);

  return result.html;
};
