function atmDispenser(amount) {
  const notes = [5000, 1000, 500, 100, 75, 50, 10];

  if (typeof amount !== "number" || amount < 10) {
    return { error: "Amount must be at least ₹10." };
  }
  if (amount % 5 !== 0) {
    return { error: "Amount must be multiple of 5." };
  }

  let remaining = amount;

  let count5000 = 0,
    count1000 = 0,
    count500 = 0,
    count100 = 0,
    count75 = 0,
    count50 = 0,
    count10 = 0;

  if (remaining >= notes[0]) {
    count5000 = Math.floor(remaining / notes[0]);
    remaining -= count5000 * notes[0];
  } else {
    count5000 = 0;
  }

  if (remaining >= notes[1]) {
    count1000 = Math.floor(remaining / notes[1]);
    remaining -= count1000 * notes[1];
  } else {
    count1000 = 0;
  }

  if (remaining >= notes[2]) {
    count500 = Math.floor(remaining / notes[2]);
    remaining -= count500 * notes[2];
  } else {
    count500 = 0;
  }

  if (remaining >= notes[3]) {
    count100 = Math.floor(remaining / notes[3]);
    remaining -= count100 * notes[3];
  } else {
    count100 = 0;
  }

  if (remaining >= notes[4]) {
    count75 = Math.floor(remaining / notes[4]);
    remaining -= count75 * notes[4];
  } else {
    count75 = 0;
  }

  if (remaining >= notes[5]) {
    count50 = Math.floor(remaining / notes[5]);
    remaining -= count50 * notes[5];
  } else {
    count50 = 0;
  }

  if (remaining >= notes[6]) {
    count10 = Math.floor(remaining / notes[6]);
    remaining -= count10 * notes[6];
  } else {
    count10 = 0;
  }

  if (remaining !== 0) {
    return {
      error: "Cannot dispense exact amount with available notes.",
    };
  }

  const result = {};

  if (count5000 > 0) result["$5000"] = count5000;
  if (count1000 > 0) result["$1000"] = count1000;
  if (count500 > 0) result["$500"] = count500;
  if (count100 > 0) result["$100"] = count100;
  if (count75 > 0) result["$75"] = count75;
  if (count50 > 0) result["$50"] = count50;
  if (count10 > 0) result["$10"] = count10;

  return result;
}

function handleWithdraw() {
  const amountInput = document.getElementById("amount");
  const errorDiv = document.getElementById("error");
  const resultDiv = document.getElementById("result");

  errorDiv.textContent = "";
  resultDiv.innerHTML = "";

  const amount = Number(amountInput.value);

  const breakdown = atmDispenser(amount);

  if (breakdown.error) {
    errorDiv.textContent = breakdown.error;
    return;
  }

  for (const note in breakdown) {
    const count = breakdown[note];
    const div = document.createElement("div");
    div.classList.add("note-row");
    div.textContent = `${note} notes: ${count}`;
    resultDiv.appendChild(div);
  }
}
