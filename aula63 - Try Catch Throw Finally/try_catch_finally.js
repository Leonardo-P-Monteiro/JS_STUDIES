function returnHour(date) {
  if (date && !(date instanceof Date)) {
    throw new Error("Wating an object date.");
  }

  if (!date) {
    date = new Date();
  }

  return date.toLocaleTimeString("pt-BR", {
    hour12: false,
    minute: "2-digit",
    hour: "2-digit",
    second: "2-digit",
  });
}
               //M   D  Y   H   M  S
date = new Date("11-27-1995 12:34:58");
date2 = "aer";

try {
  console.log(returnHour(date2));
} catch (e) {
  console.log(e);
  console.log("Tratando o erro.");
} finally {
  console.log("Chegamos ao final!");
}
