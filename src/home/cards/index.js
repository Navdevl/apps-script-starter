export const doGet = () => {
  const title = 'Google Apps Script';
  const fileName = 'index.html';
  return HtmlService.createHtmlOutputFromFile(fileName)
    .setTitle(title)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.DEFAULT);
};

export const viewMainCard = e => {
  const { accessToken } = e.messageMetadata.accessToken;
  GmailApp.setCurrentMessageAccessToken(accessToken);

  return CardService.newCardBuilder()
    .setHeader(
      CardService.newCardHeader()
        .setImageUrl(
          'https://zapier.cachefly.net/storage/photos/b5eb79e2919e228bc944b24812acdc60.png'
        )
        .setTitle('<b>Welcome to Helpdesk</b>')
    )
    .addSection(
      CardService.newCardSection().addWidget(
        CardService.newTextParagraph().setText(
          '<b>Best Help Desk Software for 3 years in a row.</b><br><br>All-in-one help desk ticketing system that provides faster and better support for your customers.'
        )
      )
    )
    .addSection(
      CardService.newCardSection().addWidget(
        CardService.newTextButton()
          .setText('Create Ticket')
          .setOnClickAction(CardService.newAction().setFunctionName('ticketCreateCard'))
      )
    )
    .build();
};
