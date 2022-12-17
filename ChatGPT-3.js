/*
 *  using OpenAI's GPT-3 Language model. (Updated)
 *  CREATED BY : FREDDY
*/

var API_KEY = "TOKEN-ID-OPENIO"; //Token generate in openio
let token = "TOKEN-ID-BOT-TELEGRAM"; //token generate bot telegram
var spreadSheetId = "ID-SHEET-GOOGLE"; //Id_SHEET
var sheetName = "SHEETNAME"; //Replace the "Data" with your data sheet name
let telegramUrl = "https://api.telegram.org/bot" + token; // url sending message
var NUM_TOKENS = "MAX-TOKEN";// remember that 1 token ~= 4 chars in English; 100 tokens ~= 75 words. For more information I leave them in the links of interest.

//this is just a print to the html you can comment it
function doGet(e) { 
    return HtmlService.createHtmlOutput('Hola');
}

// this is the welcome message
function sendText(id, answer) {
    var url = telegramUrl + "/sendMessage?chat_id=" + id + "&text=" + answer; // Format for sending the message for more information read the documentation of telegram api
    UrlFetchApp.fetch(url); //is responsible for sending the information
}

function get_response(id, answer, markdown) {
    var response = _callAPI(answer);
    /*For some reason, when the search result is very large, a bug is generated for this. 
    I simply comment the line above and uncomment it. this causes it to exit the loop. 
    Once it is fulfilled, it is important to comment on this one again and uncomment the one above. 
    I'm new to this, it's a temporary solution while I learn.*/
    // var response = _callAPI('hola'); 
    var parsed_response = _parse_response(response);
    var text = encodeURIComponent(parsed_response);
    var url = telegramUrl + "/sendMessage?chat_id=" + id + "&text=" + text;
    try {
        UrlFetchApp.fetch(url);
    } catch (e) {
        SpreadsheetApp.openById(spreadSheetId).getSheetByName(sheetName).appendRow(["Error", e]); //In case any other error is generated, 
        //I also make it display in the selected google sheet
    }
}

//here we form the api structure and make the request to deliver the result
function _callAPI(prompt) {
    var data = {
        'model': 'text-davinci-003',
        'prompt': prompt,
        'max_tokens': NUM_TOKENS,
        'temperature': 0,
        'top_p': 1,
        'frequency_penalty': 0,
        'presence_penalty': 0,
        'stop': ['"""'],
    };

    var options = {
        'method': 'post',
        'contentType': 'application/json',
        'payload': JSON.stringify(data),
        'headers': {
            Authorization: 'Bearer ' + API_KEY,
        },
    };

    response = UrlFetchApp.fetch(
        'https://api.openai.com/v1/completions',
        options,
    );

    return JSON.parse(response.getContentText())['choices'][0]['text'];
}

//for some reason it's run twice that's why we use this
function _parse_response(response) {
    var parsed_fill = response.slice(2);
    return parsed_fill;
}

//here recieve content send from telegram bot.
function doPost(e) {
    var contents = JSON.parse(e.postData.contents);

    if (contents.message) {

        var text = contents.message.text; //get message
        var id = contents.message.chat.id; //get id user telegram 
        var name = contents.message.chat.first_name; //get username telegram 

        var spreadsheet = SpreadsheetApp.openById(spreadSheetId).getSheetByName(sheetName); 
        spreadsheet.appendRow([new Date(), id, name, text]);// in case you want to make a record of the users that access your bot

        switch (text) {
            case '/start':
                var answer = 'Bienvenid@, puedes consultar lo que gustes por aqui!!';
                sendText(id, answer);
                break;
            default:
                get_response(id, text, '&parse_mode=MarkdownV2'); 
                break;
        }
    } else {
        var id = contents.callback_query.message.chat.id;
        var data = contents.callback_query.data;
        var answer = 'Has pulsado la acción número ' + data;
        sendText(id, answer);
    }
}