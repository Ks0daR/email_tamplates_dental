const handlebars = require("handlebars");
const mjml2html = require("mjml");

module.exports = function getWelcomePatientTemplate() {
  const contextTemp = {
    preview: "Vivamus aliquet elit ac", // сообщение при предпросмотре в почтовом ящике
    title: "Vivamus aliquet elit ac",
    patientName: "Ipsum lorem",
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
    <mj-hero background-color='#ffffff' background-url='${process.env.API_URL}/email-assets/background/welcome-bgnd.png' >
      <mj-spacer height="10px" />
        <mj-text align='center' color='#9bc3ca' font-family='Montserrat' font-weight='700'>
          <h1>Hello {{patientName}}, <br /> Welcome to UAE Dentist! </h1>
        </mj-text>
        <mj-spacer height="400px" />
    </mj-hero>
    <mj-section background-color='#ffffff'>
      <mj-column width='440px'>
        <mj-text align='center' color='#4f4f4f' font-size='14px' font-family='Montserrat' line-height='21px'>
          Never lose that smile!<br/ >
          By signing up, you’ve taken a leap to a happier and healthier smile. We know that our oral hygiene contributes greatly to both our health and confidence.<br/ >
          And we’ll be there every step of your journey.
        </mj-text>
        <mj-image padding='40px 0 10px ' width='100px' src="${process.env.API_URL}/email-assets/icons/teeth-icon.png" alt="teeth icon"/>
        </mj-cloumn>
    </mj-section>
    <mj-section background-color='#ffffff'>
      <mj-column width='370px'>
        <mj-text align='center' color='#4f4f4f' font-size='14px' font-family='Montserrat' line-height='21px'>
          At UAE dentist, clinics are well-equipped to take good care of you upon providing their services for your dental needs and oral health. 
        </mj-text>
        <mj-button href={{buttonLink}} border-radius='20px' line-height='20px' font-family="Montserrat" background-color="#a3d4cb" color="white" text-transform='uppercase' font-weight='600'>
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
</mjml>
`);

  const mjml = template(contextTemp);
  const result = mjml2html(mjml);

  return result.html;
};
