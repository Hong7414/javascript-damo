        /*const pi = 3.14159;
        console.log(pi);

        let x = prompt("請輸入半徑:");
        if(x >= 10){
            let x = "5";
            console.log(x, "面積為", x ** 2 * pi, typeof (x));
            document.write("<h2 style='color:red'>面積為" + x ** 2 * pi + "</h2>");  
        }
        alert("面積為" + x ** 2 * pi);
        console.log(x, typeof (x));*/

        let email = "jerry@gmail.com"
        console.log(email, typeof (email), email.length);
        console.log(email[0], email[email.length - 1]);
        console.log(email.slice(0, 5));
        console.log(email.includes("jerry"));
        email = email.replace("jerry", "mary")
        console.log(email);
        console.log("jerry" == "Jerry");

        for (let i = 0; i < email.length; i++){
            console.log(i, email[i]);
            document.write(email[i] + "<br>");
        }

        let x = String(10);
        let y = Number("10");

        x = 0;
        x = 0.0;
        x = false;
        x = "";
        x = null;
        x = 5.6;
        console.log(Math);
        console.log(Math.PI);
        console.log(x);
        console.log(Math.abs(x));
        console.log(Math.ceil(x));
        console.log(Math.floor(x));
        console.log(Math.round(x));

        x = Math.random();
        console.log(x);
        console.log(x * 10);
        console.log(Math.floor(x * 10) + 1);
        console.log(Math.floor(x * 49) + 1);

        const START = 1;
        const END = 49;

        console.log("====================");

        for(let i= 0; i < 6; i++){
            let number = Math.floor(Math.random() * (END - START + 1)) + START;
            console.log("第" + (i + 1) + "個號碼為:" + number);
            const output = `第${i + 1}個號碼為:${number}`;

            console.log(output);
            document.write(output + "<br>")
        }

        console.log("====================");
        
        let data = [];
        let data1 = new Array();
        data = ["2022", "5", 29];
        data1 = ["13", "10"];

        console.log(data.join("-"));
        console.log(data.indexOf("2022"));
        let data2 = data.concat(data1);
        console.log(data2);
        console.log("-----------------");

        console.log(data[data.length - 1]);

        data1.push(["56", "57", "58"]);
        console.log(data1);
        data1.pop();
        console.log(data1);

        console.log("====================");

        count = 5;
        let lotto = new Array();
        for(let i = 0; i < count; i++){
            let numbers = [];
            for(let j = 0; j < 6; j++){
                let number = Math.floor(Math.random() * (END - START + 1)) + START;
                numbers.push(number);
            }
            lotto.push(numbers);
        }
        console.log(lotto);
        console.log("--------------------");
        let ulstr = "<h1>樂透號碼</h1><ul>";
        for(let i = 0; i < lotto.length; i++){
            console.log(lotto[i].join(","));
            ulstr += `<h2><li>${lotto[i].join(",")}</li></h2>`;
        }
        ulstr += "</ul>"
        //console.log(ulstr);
        document.write(ulstr);

        console.log("====================");

        let students = [
            ['jerry', 78, 61, 94],
            ['Yue', 96, 75, 81, 63],
            ['Cha', 86, 82]
        ];
        for(let i = 0; i < students.length; i++){
            let tot = 0;
            let name = students[i][0];
            let scores = students[i].slice(1, students[i].length);
            console.log(name, scores);

            for(let j = 0; j < scores.length; j++){
                tot += scores[j];
            }
            avg = tot / scores.length;
            console.log(name, tot, avg);
        }
