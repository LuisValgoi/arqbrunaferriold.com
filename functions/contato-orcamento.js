require("dotenv").config();
const sendGridMail = require("@sendgrid/mail");

const handler = async (event) => {
  try {
    sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);

    const {
      entryName,
      entryEmail,
      entryWhatsapp,
      entryOccupancy,
      entryAge,
      entryHowYouMet,
      entryProjectCity,
      entryProjectType,
      entryCannotMiss,
      entryProjectBuilt,
      entryProjectArea,
      entryProjectEnvironment,
      entryProjectPlace,
      entryProjectPlaceOther,
      entryProjectRevestimentos,
      entryProjectRevestimentosOther,
      entryProjectForro,
      entryProjectForroOther,
      entryBudget,
      entryFinalsNotes,
      entryFinalsPlanta,
    } = JSON.parse(event.body);

    const entryFinalsPlantaBuffered = entryFinalsPlanta.map((planta) => {
      return {
        ...planta,
        content: planta.content.split(",")[1],
      };
    });

    const html = `
      <div> 
        Olá <b>Bruna!</b><br>
         
        Prazer, meu nome é <b>${entryName}</b> e acabei de entrar em contato contigo pelo formulário de orçamento.<br>
         
        Abaixo segue mais algumas informações sobre o que preenchi:<br><br>

        <b>[QUANTO AO MEU CONTATO]</b><br>
        <b>Qual é o meu nome completo?</b> ${entryName}<br>
        <b>Qual é o meu e-mail?</b> ${entryEmail}<br>
        <b>Qual o seu WhatsApp?</b> ${entryWhatsapp}<br><br>

        <b>[QUANTO À MIM]</b><br>
        <b>Qual a minha profissão?</b> ${entryOccupancy}<br>
        <b>Qual a minha idade?</b> ${entryAge}<br>
        <b>Como conheci o seu escritório?</b> ${entryHowYouMet}<br><br>

        <b>[QUANTO AO MEU PROJETO]</b><br>
        <b>Em qual cidade será feito o projeto?</b> ${entryProjectCity}<br>
        <b>Que tipo de projeto eu preciso?</b> ${entryProjectType}<br>
        <b>O que não pode faltar na minha casa?</b> ${entryCannotMiss}<br><br>

        <b>[QUANTO À ÁREA]</b><br>
        <b>O imóvel encontra-se construído?</b> ${entryProjectBuilt}<br>
        <b>Qual a área em m² a ser projetada?</b> ${entryProjectArea}<br>
        <b>Quais ambientes o projeto teria?</b> ${entryProjectEnvironment}<br><br>

        <b>[QUANTO À PREFERÊNCIAS]</b><br>
        <b>Qual o tipo do local que busco?</b> ${entryProjectPlace === "Outros" ? entryProjectPlaceOther : entryProjectPlace}<br>
        <b>Qual o tipo de revestimento que busco?</b> ${entryProjectRevestimentos === "Outros" ? entryProjectRevestimentosOther : entryProjectRevestimentos}<br>
        <b>Qual o tipo de forro que busco?</b> ${entryProjectForro === "Outros" ? entryProjectForroOther : entryProjectForro}<br><br>

        <b>[ÚLTIMA ETAPA]</b><br>
        <b>Qual o seu budget para o projeto?</b> ${entryBudget}<br>
        <b>Mais alguma informação extra?</b> ${entryFinalsNotes}<br><br>

        Atenciosamente,<br>
        ${entryName} (${entryEmail}).
      </div>
    `;

    await sendGridMail.send({
      from: process.env.SENDER_EMAIL,
      to: process.env.RECEIVER_EMAIL,
      subject: `Proposta de Orçamento recebida às ${new Date().toLocaleTimeString()} - ${entryName}`,
      html,
      attachments: entryFinalsPlantaBuffered,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent" }),
    };
  } catch (error) {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: String(error) }),
    }
  }
};

module.exports = { handler };
