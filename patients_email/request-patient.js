const handlebars = require("handlebars");
const mjml2html = require("mjml");

module.exports = function getRequestPatientTemplate() {
  const contextTemp = {
    preview: "Vivamus aliquet elit ac", // сообщение при предпросмотре в почтовом ящике
    title: "Vivamus aliquet elit ac",
    practiceName: "Lorem ipsum",
    practiceDescription: "Lorem ipsum",
    patientName: "Ipsum lorem",
    clinicImageUrl: "#",
    confirmedDateNTime: "Monday 08 Marth, at 09:00 AM",
    appointmentName: "Emergency Appointment",
    dentistAvatarLink: "#",
    dentistName: "Dr. Death",
    dentistDescription: "Lorem Dolor",
    clientName: "Dolor bill",
    messageForClient:
      "Nunc interdum lacus sit amet orci. Phasellus viverra nulla ut metus varius laoreet. ",
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
      .title h1 { font-weight: 600; padding: 0 } .title span { color: #6caaad;
      font-weight: 700} .clinic-info h4 { font-size: 18px; font-weight: 500;
      margin: 0; padding: 10px} .clinic-info p { font-size: 16px; line-height:
      20px}. confirmed-top{border-top-left-radius: 10px}
    </mj-style>
    <mj-style>
      .confirmed-top h5 {margin: 0; font-size: 16px; font-weight: 500}
      .confirmed-top h4 {margin: 0; font-size: 18px} .confirmed-bottom h4
      {margin: 0; font-size: 18px}
    </mj-style>
    <mj-style>
      .quote-text h4{font-size:16px} .quote-text p {line-height: 15px;
      font-size:16px}
    </mj-style>
    <mj-style>
      .doctor-card h4{font-size:16px; margin: 0; padding-bottom: 4px}
      .doctor-card p{margin: 0}</mj-style
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
          color="#9bc3ca"
          font-family="Montserrat"
          css-class="title"
          padding="0"
        >
          <h1>
            Hi, {{patientName}}! <br />
            Your appintment is <span>confirmed!</span>
          </h1>
        </mj-text></mj-column
      >
    </mj-section>
    <mj-section background-color="#e8f4ee">
      <mj-column>
        <mj-image
          src="${process.env.API_URL}{{clinicImageUrl}}"
          alt="clinic-image"
          width="370px"
        />
        <mj-text
          align="center"
          font-family="Montserrat"
          css-class="clinic-info"
        >
          <h4>{{practiceName}}</h4>
          <p>
           {{practiceDescription}}
          </p>
        </mj-text></mj-column
      >
    </mj-section>
    <mj-wrapper
      background-color="linear-gradient(0deg, rgba(255,255,255,1) 50%, rgba(232,244,238,1) 50%)"
      padding="0 100px"
    >
      <mj-section background-color="#a3d4cb" border-radius="20px">
        <mj-column>
          <mj-text
            css-class="confirmed-top"
            font-family="Montserrat"
            padding="0 25px 5px"
            color="#4f4f4f"
          >
            <h5>Confirmed Date and Time</h5>
            <h4>{{confirmedDateNTime}}</h4>
          </mj-text>
          <mj-divider
            border-width="1px"
            border-style="solid"
            border-color="#8b9d99"
          />
          <mj-text
            css-class="confirmed-bottom"
            color="#4f4f4f"
            font-family="Montserrat"
          >
            <h4>{{appointmentName}}</h4>
          </mj-text></mj-column
        ></mj-section
      >
    </mj-wrapper>
    <mj-section background-color="#ffffff" padding="10px 0 0 0">
      <mj-column>
        <mj-text
          color="#9bc3ca"
          align="center"
          font-size="16px"
          font-family="Montserrat"
          line-height="15px"
        >
          <h3>Say hello to your dentist!</h3>
        </mj-text>
      </mj-column></mj-section
    >
    <mj-section
      css-class="doctor-card"
      background-color="#ffffff"
      text-align="center"
      padding="0 0 20px"
    >
      <mj-column>
        <mj-image
          align="right"
          width="80px"
          src="${process.env.API_URL}{{dentistAvatarLink}}"
          alt="dentist-avatar"
        />
      </mj-column>
      <mj-column
        ><mj-text
          align="left"
          padding="9px 0"
          font-family="Montserrat"
          color="#4f4f4f"
        >
          <h4>{{dentistName}}</h4>
          <p>{{dentistDescription}}</p></mj-text
        >
      </mj-column>
    </mj-section>
    <mj-section
      background-url="${process.env.API_URL}/email-assets/background/quote-bgnd.png"
      background-repeat="no-repeat"
      background-color="#ffffff"
    >
      <mj-column width="300px">
        <mj-text
          css-class="quote-text"
          font-family="Montserrat"
          color="#4f4f4f"
          align="center"
          line-height="20px"
        >
          <h4>Hi {{clientName}}.</h4>
          <p>
            {{messageForClient}}
          </p>
        </mj-text>
        <mj-spacer height="100px" /> </mj-column
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
