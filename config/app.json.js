module.exports = {
  "allow_create_new_accounts" : process.env.ALLOW_CREATE_NEW_ACCOUNTS || true,
  "allow_restore"             : process.env.ALLOW_RESTORE || false,
  "send_emails"               : process.env.SEND_EMAILS || true,
  "application_sender_email"  : process.env.SENDER_EMAIL || "absencedecision@gmail.com",

  // transports email via SMTP
  "email_transporter" : {
    "host" : process.env.SMTP_SERVER || "smtp.gmail.com",
    "port" : process.env.SMTP_PORT   || 465,
	"secure" : true,
    "auth" : {
      "user" : process.env.SMTP_LOGIN    || "absencedecision@gmail.com",
      "pass" : process.env.SMTP_PASSWORD || "Holiday12"
    }
  },
  "crypto_secret" : process.env.CRYPTO_SECRET || "!2~`HswpPPLa22+=±§sdq qwe,appp qwwokDF_",
  "application_domain" : process.env.APPLICATION_DOMAIN || "https://holidaybooker.herokuapp.com",
  "promotion_website_domain" : process.env.PROMOTION_WEBSITE_DOMAIN || "https://holidaybooker.herokuapp.com"
}
