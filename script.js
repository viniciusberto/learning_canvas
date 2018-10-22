LIST_TOP = 332;

function draw(component, drawing) {
    // configuracao();

    let canvas = document.getElementById(component);
    if (!canvas)
        canvas = document.getElementsByClassName(component)[0];
    if (!canvas)
        canvas = document.getElementsByTagName(component)[0];
    if (!canvas)
        canvas = document.querySelector(component);
    if (!drawing)
        drawing = {
            "day": "QUINTA",
            "items": [
                "EXEMPLO DE VAGA DE EMPREGO",
                "EXEMPLO DE VAGA DE EMPREGO 2",
                "EXEMPLO DE VAGA DE EMPREGO 3",
                "EXEMPLO DE VAGA DE EMPREGO 4",
                "EXEMPLO DE VAGA DE EMPREGO 5",
                "EXEMPLO DE VAGA DE EMPREGO 6",
                "EXEMPLO DE VAGA DE EMPREGO 7",
                "EXEMPLO DE VAGA DE EMPREGO 8",
                "EXEMPLO DE VAGA DE EMPREGO 9",
                "EXEMPLO DE VAGA DE EMPREGO 10",
                "EXEMPLO DE VAGA DE EMPREGO 11",
                "EXEMPLO DE VAGA DE EMPREGO 12",
            ],
            "colors": {
                "header": "#E6050C",
                "headertext1": "#70CB01",
                "headertext2": "#FFF",
                "body": "#FFF200",
                "daybody": "#E7E7E7",
                "dayheader": "#99FF1C",
                "daytext": "#000",
                "address": "#000",
                "social": "#FFF",
                "listtext": "#000",
                "socialfill": "#E6050C",
            },
            "fonts": {
                "title": "Montserrat Black",
                "week": "Liebe Doris",
                "list": "Montserrat Bold",
                "address": "Montserrat",
                "social": "Lucida Grande",
            }
        };

    let lineHeght = 31;

    canvas.height = ((drawing.items.length - 1) * lineHeght) + 435;

    if (canvas.height < 788) {
        canvas.height = 788;
    }

    if (canvas.getContext) {
        let ctx = canvas.getContext("2d");

        ctx.fillRect(0, 0, 1000, 1000);

        let HEADER = drawing.colors.header;
        let HEADER_TEXT1 = drawing.colors.headertext1;
        let HEADER_TEXT2 = drawing.colors.headertext2;
        let BODY = drawing.colors.body;
        let FONT_TITLE = drawing.fonts.title;
        let FONT_WEEK = drawing.fonts.week;
        let FONT_LIST = drawing.fonts.list;
        let FONT_ADDRESS = drawing.fonts.address;
        let FONT_SOCIAL = drawing.fonts.social;
        let DAY = drawing.day;
        let DAY_BODY = drawing.colors.daybody;
        let DAY_HEADER = drawing.colors.dayheader;
        let DAY_TEXT = drawing.colors.daytext;
        let ADDRESS = drawing.colors.address;
        let SOCIAL = drawing.colors.social;
        let LIST_TEXT_COLOR = drawing.colors.listtext;
        let SOCIAL_FILL = drawing.colors.socialfill;
        let LIST = drawing.items;

        if (!HEADER)
            HEADER = "#E6050C";
        if (!HEADER_TEXT1)
            HEADER_TEXT1 = "#70CB01";
        if (!HEADER_TEXT2)
            HEADER_TEXT2 = "#FFF";
        if (!BODY)
            BODY = "#FFF200";
        if (!FONT_TITLE)
            FONT_TITLE = 'Montserrat Black';
        if (!FONT_WEEK)
            FONT_WEEK = 'Liebe Doris';
        if (!FONT_LIST)
            FONT_LIST = 'Montserrat Bold';
        if (!FONT_ADDRESS)
            FONT_ADDRESS = 'Montserrat';
        if (!FONT_SOCIAL)
            FONT_SOCIAL = 'Lucida Grande';
        if (!DAY)
            DAY = "SEGUNDA";
        if (!DAY_BODY)
            DAY_BODY = "#E7E7E7";
        if (!DAY_HEADER)
            DAY_HEADER = "#99FF1C";
        if (!DAY_TEXT)
            DAY_TEXT = "#000";
        if (!ADDRESS)
            ADDRESS = "#000";
        if (!SOCIAL)
            SOCIAL = "#FFF";
        if (!LIST)
            LIST = [];
        if (!LIST_TEXT_COLOR)
            LIST_TEXT_COLOR = '#000';
        if (!SOCIAL_FILL)
            SOCIAL_FILL = '#E6050C';

        ctx.fillStyle = HEADER;
        ctx.fillRect(0, 0, 940, 282);
        ctx.fillStyle = BODY;

        let tam = (LIST.length * 31) + 125;

        if (tam < 506) {
            tam = 506;
        }

        ctx.fillRect(0, 282, 940, tam);

        document.fonts.load('10pt "' + FONT_TITLE + '"').then(function () {
            ctx.font = '900 78.9px ' + FONT_TITLE;
            ctx.fillStyle = HEADER_TEXT1;
            ctx.fillText("VAGAS", 100, 140);
            ctx.fillStyle = HEADER_TEXT2;
            ctx.fillText("DE", 420, 140);
            ctx.fillText("TRABALHO", 80, 222);
            ctx.beginPath();
            ctx.rotate(0.1);
            ctx.fillStyle = DAY_BODY;

            ctx.shadowColor = '#00000055';
            ctx.shadowBlur = 30;
            ctx.shadowOffsetX = 10;
            ctx.shadowOffsetY = 15;
            ctx.rect(660, 0, 245, 227);
            ctx.fill();
            ctx.shadowColor = 'transparent';
            ctx.shadowBlur = 0;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;

            ctx.beginPath();
            ctx.fillStyle = DAY_HEADER;
            ctx.rect(660, 0, 245, 50);
            ctx.fill();
            ctx.shadowColor = '#00000033';
            ctx.shadowBlur = 3;
            ctx.shadowOffsetX = 10;
            ctx.shadowOffsetY = 8;
            ctx.beginPath();
            ctx.fillStyle = DAY_HEADER;
            ctx.rect(650, -7, 50, 50);
            ctx.fill();
            ctx.shadowColor = 'transparent';
            ctx.shadowBlur = 0;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.beginPath();
            ctx.rotate(0.737);
            ctx.fillStyle = HEADER;
            ctx.rect(468, -480, 50, 150);
            ctx.rotate(-0.737);
            ctx.fill();
            ctx.rotate(-0.1);

            document.fonts.load('10pt "' + FONT_WEEK + '"').then(function () {
                ctx.beginPath();
                ctx.rotate(0.1);
                ctx.fillStyle = DAY_TEXT;
                ctx.textAlign = "center";

                switch (DAY) {
                    case "SEGUNDA":
                        ctx.font = '80px ' + FONT_WEEK;
                        break;
                    case "TERCA":
                        ctx.font = '105px ' + FONT_WEEK;
                        break;
                    case "QUARTA":
                        ctx.font = '95px ' + FONT_WEEK;
                        break;
                    case "QUINTA":
                        ctx.font = '105px ' + FONT_WEEK;
                        break;
                    case "SEXTA":
                        ctx.font = '105px ' + FONT_WEEK;
                        break;
                }
                ctx.fillText(DAY, 780, 160);
                ctx.textAlign = "left";
                ctx.rotate(-0.1);
                ctx.closePath();
            });

            ctx.beginPath();
            ctx.shadowColor = '#00000066';
            ctx.shadowBlur = 3;
            ctx.shadowOffsetX = 2;
            ctx.shadowOffsetY = 2;
            let img = document.getElementById('pontinho');
            ctx.drawImage(img, 760, 52);
            ctx.shadowColor = 'transparent';
            ctx.shadowBlur = 0;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.closePath();


            document.fonts.load('10pt "' + FONT_LIST + '"').then(function () {
                var lineHeight = 31;
                var textMarginLine = 7;
                var textCenter = 470;
                var fontSize = 21.5;

                ctx.beginPath();
                ctx.font = 'bold ' + fontSize + 'px ' + FONT_LIST;
                ctx.textAlign = "center";

                if (LIST.length <= 12) {
                    LIST_TOP = 531 - (LIST.length * (lineHeight / 2));
                } else {
                    LIST_TOP = 332;
                }

                for (let i = 0; i < LIST.length; i++) {
                    if (LIST.length === 1) {
                        ctx.fillStyle = HEADER;
                        ctx.fillRect(110, LIST_TOP, 720, 1);
                        ctx.fillRect(110, LIST_TOP - lineHeight, 720, 1);
                    }

                    ctx.fillStyle = LIST_TEXT_COLOR;
                    ctx.fillText(LIST[i], textCenter, LIST_TOP - textMarginLine, 720);

                    if (i < LIST.length - 1) {
                        ctx.fillStyle = HEADER;
                        ctx.fillRect(110, LIST_TOP, 720, 1);
                        LIST_TOP = LIST_TOP + lineHeight;
                    }
                }

                ctx.closePath();

                if (LIST_TOP < 635) {
                    LIST_TOP = 635;
                } else {
                    LIST_TOP = LIST_TOP - 45;
                }

                document.fonts.load('10pt "' + FONT_ADDRESS + '"').then(function () {
                    ctx.beginPath();
                    ctx.font = '400 13.5px ' + FONT_ADDRESS;
                    ctx.textAlign = "center";
                    ctx.fillStyle = ADDRESS;
                    ctx.fillText("DOCUMENTOS: CARTEIRA DE TRABALHO, RG E CPF OU CNH.", 275, LIST_TOP + 75);
                    ctx.fillText("RUA DOS JARDINS, 615 - CENTRO", 275, LIST_TOP + 95);
                    ctx.font = 'ITALIC 10px ' + FONT_ADDRESS;
                    ctx.fillText("*AS VAGAS PODEM SER PREENCHIDAS A QUALQUER MOMENTO SEM AVISO PRÉVIO", 275, LIST_TOP + 115);
                    ctx.closePath();
                });

                document.fonts.load('10pt "' + FONT_SOCIAL + '"').then(function () {
                    ctx.beginPath();
                    ctx.fillStyle = SOCIAL_FILL;
                    ctx.arc(92, LIST_TOP + 130, 9, 0, 2 * Math.PI, false);
                    ctx.fill();

                    ctx.fillStyle = SOCIAL;
                    ctx.font = 'Bold 12px "' + FONT_SOCIAL + '"';
                    ctx.fillText("f", 91, LIST_TOP + 135);

                    ctx.beginPath();
                    ctx.fillStyle = SOCIAL_FILL;
                    ctx.arc(280, LIST_TOP + 130, 9, 0, 2 * Math.PI, false);
                    ctx.fill();

                    ctx.fillStyle = SOCIAL;
                    ctx.font = 'Bold 12px "' + FONT_SOCIAL + '"';
                    ctx.fillText("f", 279, LIST_TOP + 135);


                    // image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
                    // window.location.href = image;

                });

                ctx.textAlign = "left";
                ctx.fillStyle = ADDRESS;
                ctx.font = 'normal 16px Roboto';
                ctx.fillText("prefeituradenavirai", 105, LIST_TOP + 135);

                ctx.textAlign = "left";
                ctx.fillStyle = ADDRESS;
                ctx.font = 'normal 16px Roboto';
                ctx.fillText("assistenciasocialdenavirai", 295, LIST_TOP + 135);

                var img = document.getElementById('logo-emprego');
                ctx.drawImage(img, 515, LIST_TOP + 70);

            });
        });


    }
}
