const handlebars = require("handlebars");
const mjml2html = require("mjml");

module.exports = function getAppointmentDentistTemplate() {
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
      .title h1 { font-weight: 600; padding-top: 10px; font-size: 18px;
      line-height: 25px} .title span { color: #6caaad; font-weight: 700}
      .clinic-info span { font-size: 14px; font-weight: 600}.
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
        Hello, {Practice Name}! <br />It seems that you have forgotten your
        password.
      </h1>
    </mj-text></mj-column
  >
</mj-section>
<mj-section background-color="#e8f4ee">
  <mj-column width="450px">
    <mj-image
      src="../email-assets/background/key-and-lock.png"
      alt="default-image"
      padding="0"
      width="160px"
    />
    <mj-text
      align="center"
      font-family="Montserrat"
      css-class="clinic-info"
      font-size="14px"
      padding="30px 0 10px"
      line-height="25px"
    >
      If you’re having trouble logging in, you should consider changing your
      password. Be careful not to forget it this time!
    </mj-text>
    <mj-button
      href="#"
      border-radius="20px"
      line-height="20px"
      font-family="Montserrat"
      background-color="#a3d4cb"
      color="white"
      text-transform="uppercase"
      font-weight="600"
      padding-bottom="30px"
    >
      Generate new password
    </mj-button>
  </mj-column>
</mj-section>

<mj-section background-color="#ffffff" padding="10px 0 0 0">
  <mj-column><mj-spacer height="100px" /></mj-column
></mj-section>
 
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
           align="right"
           alt="logo"
           href={{logoLink}}
         />
       </mj-column>
     </mj-section>
  </mj-body> </mjml
 >`);

  const mjml = template(contextTemp);
  const result = mjml2html(mjml);

  return result.html;
};
