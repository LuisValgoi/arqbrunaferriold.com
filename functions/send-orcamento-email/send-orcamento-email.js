require("dotenv").config();
const aws = require("aws-sdk");
const ses = new aws.SES({ region: "us-east-1" });

exports.handler = async function () {
  const params = {
    Destination: {
      ToAddresses: ["arqbrunaferri@gmail.com"],
    },
    Source: "luisvalgoi@gmail.com",
    Message: {
      Body: {
        Text: { Data: "Test" },
      },
      Subject: { Data: "Orçamento" },
    },
  };
 
  return ses.sendEmail(params).promise()
};