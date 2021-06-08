const handlebars = require("handlebars");
const mjml2html = require("mjml");

module.exports = function getCancelledDentistTemplate() {
  const contextTemp = {
    preview: "Vivamus aliquet elit ac", // сообщение при предпросмотре в почтовом ящике
    title: "Vivamus aliquet elit ac",
    practiceName: "Lorem ipsum",
    patientName: "Ipsum lorem",
    confirmedDateNTime: "Monday 08 Marth, at 09:00 AM",
    appointmentName: "Emergency Appointment",
    dentistAvatarLink: "#",
    dentistName: "Dr. Death",
    dentistDescription: "Lorem Dolor",
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
      #9bc3ca; margin: 0; padding-bottom: 30px } .title span { color: #6caaad;
      font-weight: 700} .title p {font-size: 14px; font-weight: 600; margin: 0}
      .clinic-info h4 { font-size: 18px; font-weight: 500; margin: 0; padding:
      10px} .clinic-info p { font-size: 16px; line-height: 20px}.
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
            Sorry {{practiceName}}, <br />
            One of your appointments has been <span>cancelled.</span>
          </h4>
        </mj-text></mj-column
      >
    </mj-section>
    <mj-wrapper background-color="#e8f4ee" padding="0 10% 50px 10%">
      <mj-section background-color="#a3d4cb" border-radius="20px">
        <mj-column width="100%">
          <mj-text
            css-class="confirmed-top"
            font-family="Montserrat"
            padding="0 25px 5px"
            color="#4f4f4f"
          >
            <h5>Patient Name</h5>
            <h4>{{patientName}}</h4>
          </mj-text>
          <mj-divider
            border-width="1px"
            border-style="solid"
            border-color="#8b9d99"
          />
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
          </mj-text>
        </mj-column>
        <mj-column width="30%" padding-top="10px">
          <mj-image
            padding="15px 0 0 30px"
            align="left"
            width="80px"
            src="${process.env.API_URL}{{dentistAvatarLink}}"
            alt="dentist-image"
          />
        </mj-column>
        <mj-column width="70%" padding-top="10px">
          <mj-text
            css-class="doctor-name"
            font-family="Montserrat"
            color="#4f4f4f"
          >
            <h4>{{dentistName}}</h4>
            <p>{{dentistDescription}}</p></mj-text
          >
        </mj-column>
      </mj-section>
    </mj-wrapper>
    <mj-section background-color="#ffffff" padding="10px 0 0 0">
      <mj-column>
        <mj-text
          color="#4f4f4f"
          align="center"
          font-size="16px"
          font-family="Montserrat"
          font-weight="600"
          padding-top="30px"
          line-height="25px"
        >
          Let’s look forward into new and future appointments instead. <br />
          Browse them here!
        </mj-text>
        <mj-button
          href={{buttonLink}}
          border-radius="20px"
          line-height="20px"
          font-family="Montserrat"
          background-color="#a3d4cb"
          color="white"
          text-transform="uppercase"
          font-weight="600"
          padding-bottom="50px"
        >
          Manage my schedule
        </mj-button>
      </mj-column></mj-section
    >

    <mj-section background-color="#a3d4cb">
      <mj-column
        ><mj-social
          font-size="15px"
          icon-size="30px"
          mode="horizontal"
          align="left"
        >
          <mj-social-element src="${process.env.API_URL}/email-assets/icons/instagram.png" href={{instagramLink}} alt="instagram">
          </mj-social-element>
          <mj-social-element src="${process.env.API_URL}/email-assets/icons/twitter.png" href={{twitterLink}} alt="twitter">
          </mj-social-element>
          <mj-social-element src="${process.env.API_URL}/email-assets/icons/linked-in.png" href={{linkedInLink}} alt="linked-in">
          </mj-social-element>
          <mj-social-element src="${process.env.API_URL}/email-assets/icons/facebook.png" href={{facebookLink}} alt="facebook">
          </mj-social-element>
        </mj-social>
      </mj-column>
      <mj-column>
        <mj-image
          width="120px"
          src="${process.env.API_URL}/email-assets/logo/white-logo.png"
          alt="logo"
          align="right"
          href={{logoLink}}
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
