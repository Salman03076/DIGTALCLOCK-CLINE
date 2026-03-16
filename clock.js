let Day = new Date();
let Month = new Date();
let year = new Date();
// let hours=getHours();
Day = document.getElementById("day").innerHTML = Day.getDate();
Month = document.getElementById("month").innerHTML = Month.getMonth() + 1;
year = document.getElementById("year").innerHTML = year.getFullYear();

document.writeln();

function setTimeOnClock() {
  let fulldate = new Date();

  hours = document.getElementById("Hours").innerHTML = fulldate.getHours();

  minute = document.getElementById("Minutes").innerHTML = fulldate.getMinutes();

  second = document.getElementById("Seconds").innerHTML = fulldate.getSeconds();

  //     let miliSecond = new Date();
  //     miliSecond = document.getElementById("miliSeconds").innerHTML = miliSecond.getMilliseconds();
}

setTimeOnClock();

function stopbutton() {
  setInterval(() => {
    setTimeOnClock();
  }, 1);
}

stopbutton();

console.log(`${hours} : ${minute} : ${second} `);

/*
echo "# Practice_advancedTypes" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Salman03076/Practice_advancedTypes.git
git push -u origin main*/