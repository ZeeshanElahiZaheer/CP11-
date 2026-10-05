// CP 11 Players Data
const players = [
  { id: 1,  name: "Player 1",  role: "Batsman",     img: "" },
  { id: 2,  name: "Player 2",  role: "Batsman",     img: "" },
  { id: 3,  name: "Player 3",  role: "Batsman",     img: "" },
  { id: 4,  name: "Player 4",  role: "All-Rounder", img: "" },
  { id: 5,  name: "Player 5",  role: "All-Rounder", img: "" },
  { id: 6,  name: "Player 6",  role: "Wicket-Keeper", img: "" },
  { id: 7,  name: "Player 7",  role: "All-Rounder", img: "" },
  { id: 8,  name: "Player 8",  role: "Bowler",      img: "" },
  { id: 9,  name: "Player 9",  role: "Bowler",      img: "" },
  { id: 10, name: "Player 10", role: "Bowler",      img: "" },
  { id: 11, name: "Player 11", role: "Bowler",      img: "" }
];

// Homepage par players show karna
const grid = document.getElementById("playersGrid");
if (grid) {
  grid.innerHTML = players.map(p => `
    <div class="bg-white rounded-lg shadow-md hover:shadow-xl transition p-4 text-center">
      <div class="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-3">
        <i class="fas fa-user text-3xl text-green-600"></i>
      </div>
      <h4 class="font-bold text-gray-800">${p.name}</h4>
      <p class="text-sm text-green-600">${p.role}</p>
    </div>
  `).join("");
}
// Batting Stats Data - Yahan apne stats update karein
const battingStats = [
  { name: "Player 1",  mat: 10, inns: 10, runs: 250, hs: 65, avg: 25.0, sr: 120.5, fifties: 2, hundreds: 0 },
  { name: "Player 2",  mat: 10, inns: 9,  runs: 180, hs: 45, avg: 20.0, sr: 110.2, fifties: 1, hundreds: 0 },
  { name: "Player 3",  mat: 10, inns: 10, runs: 320, hs: 78, avg: 32.0, sr: 130.0, fifties: 3, hundreds: 0 },
  { name: "Player 4",  mat: 10, inns: 8,  runs: 150, hs: 40, avg: 18.7, sr: 105.0, fifties: 0, hundreds: 0 },
  { name: "Player 5",  mat: 10, inns: 9,  runs: 210, hs: 55, avg: 23.3, sr: 115.0, fifties: 1, hundreds: 0 },
  { name: "Player 6",  mat: 10, inns: 7,  runs: 100, hs: 30, avg: 14.3, sr: 95.0,  fifties: 0, hundreds: 0 },
  { name: "Player 7",  mat: 10, inns: 8,  runs: 190, hs: 48, avg: 23.7, sr: 112.0, fifties: 1, hundreds: 0 },
  { name: "Player 8",  mat: 10, inns: 6,  runs: 80,  hs: 25, avg: 13.3, sr: 90.0,  fifties: 0, hundreds: 0 },
  { name: "Player 9",  mat: 10, inns: 5,  runs: 50,  hs: 18, avg: 10.0, sr: 85.0,  fifties: 0, hundreds: 0 },
  { name: "Player 10", mat: 10, inns: 4,  runs: 30,  hs: 12, avg: 7.5,  sr: 80.0,  fifties: 0, hundreds: 0 },
  { name: "Player 11", mat: 10, inns: 3,  runs: 15,  hs: 8,  avg: 5.0,  sr: 75.0,  fifties: 0, hundreds: 0 }
];

// Batting table render
const battingTable = document.getElementById("battingTable");
if (battingTable) {
  battingTable.innerHTML = battingStats.map((p, i) => `
    <tr class="hover:bg-green-50 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}">
      <td class="p-3 font-semibold">${i + 1}</td>
      <td class="p-3 font-medium text-green-800">${p.name}</td>
      <td class="p-3 text-center">${p.mat}</td>
      <td class="p-3 text-center">${p.inns}</td>
      <td class="p-3 text-center font-bold">${p.runs}</td>
      <td class="p-3 text-center">${p.hs}</td>
      <td class="p-3 text-center">${p.avg}</td>
      <td class="p-3 text-center">${p.sr}</td>
      <td class="p-3 text-center">${p.fifties}</td>
      <td class="p-3 text-center">${p.hundreds}</td>
    </tr>
  `).join("");
}
// Bowling Stats Data - Yahan apne stats update karein
const bowlingStats = [
  { name: "Player 1",  mat: 10, overs: 20, maidens: 1, runs: 120, wkts: 15, best: "4/12", avg: 8.0,  econ: 6.0,  sr: 8.0 },
  { name: "Player 2",  mat: 10, overs: 18, maidens: 0, runs: 130, wkts: 12, best: "3/15", avg: 10.8, econ: 7.2,  sr: 9.0 },
  { name: "Player 3",  mat: 10, overs: 15, maidens: 1, runs: 100, wkts: 10, best: "3/10", avg: 10.0, econ: 6.7,  sr: 9.0 },
  { name: "Player 4",  mat: 10, overs: 22, maidens: 2, runs: 140, wkts: 18, best: "5/18", avg: 7.8,  econ: 6.4,  sr: 7.3 },
  { name: "Player 5",  mat: 10, overs: 12, maidens: 0, runs: 90,  wkts: 8,  best: "2/12", avg: 11.3, econ: 7.5,  sr: 9.0 },
  { name: "Player 6",  mat: 10, overs: 0,  maidens: 0, runs: 0,   wkts: 0,  best: "-",    avg: 0,    econ: 0,    sr: 0 },
  { name: "Player 7",  mat: 10, overs: 16, maidens: 1, runs: 110, wkts: 11, best: "3/14", avg: 10.0, econ: 6.9,  sr: 8.7 },
  { name: "Player 8",  mat: 10, overs: 20, maidens: 2, runs: 115, wkts: 16, best: "4/10", avg: 7.2,  econ: 5.8,  sr: 7.5 },
  { name: "Player 9",  mat: 10, overs: 14, maidens: 0, runs: 105, wkts: 9,  best: "2/15", avg: 11.7, econ: 7.5,  sr: 9.3 },
  { name: "Player 10", mat: 10, overs: 10, maidens: 0, runs: 80,  wkts: 6,  best: "2/8",  avg: 13.3, econ: 8.0,  sr: 10.0 },
  { name: "Player 11", mat: 10, overs: 8,  maidens: 0, runs: 70,  wkts: 5,  best: "2/12", avg: 14.0, econ: 8.8,  sr: 9.6 }
];

// Bowling table render
const bowlingTable = document.getElementById("bowlingTable");
if (bowlingTable) {
  bowlingTable.innerHTML = bowlingStats.map((p, i) => `
    <tr class="hover:bg-green-50 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}">
      <td class="p-3 font-semibold">${i + 1}</td>
      <td class="p-3 font-medium text-green-800">${p.name}</td>
      <td class="p-3 text-center">${p.mat}</td>
      <td class="p-3 text-center">${p.overs}</td>
      <td class="p-3 text-center">${p.maidens}</td>
      <td class="p-3 text-center">${p.runs}</td>
      <td class="p-3 text-center font-bold text-green-700">${p.wkts}</td>
      <td class="p-3 text-center">${p.best}</td>
      <td class="p-3 text-center">${p.avg}</td>
      <td class="p-3 text-center">${p.econ}</td>
      <td class="p-3 text-center">${p.sr}</td>
    </tr>
  `).join("");

  // Top wicket taker find karna
  const top = [...bowlingStats].sort((a, b) => b.wkts - a.wkts)[0];
  const topEl = document.getElementById("topBowler");
  if (topEl) topEl.textContent = `${top.name} (${top.wkts} wickets)`;
}
// Fielding Stats Data - Yahan apne stats update karein
const fieldingStats = [
  { name: "Player 1",  mat: 10, catches: 5, runouts: 2, stumpings: 0 },
  { name: "Player 2",  mat: 10, catches: 3, runouts: 1, stumpings: 0 },
  { name: "Player 3",  mat: 10, catches: 4, runouts: 0, stumpings: 0 },
  { name: "Player 4",  mat: 10, catches: 6, runouts: 3, stumpings: 0 },
  { name: "Player 5",  mat: 10, catches: 2, runouts: 1, stumpings: 0 },
  { name: "Player 6",  mat: 10, catches: 8, runouts: 1, stumpings: 10 }, // Wicket-Keeper
  { name: "Player 7",  mat: 10, catches: 3, runouts: 2, stumpings: 0 },
  { name: "Player 8",  mat: 10, catches: 4, runouts: 1, stumpings: 0 },
  { name: "Player 9",  mat: 10, catches: 2, runouts: 0, stumpings: 0 },
  { name: "Player 10", mat: 10, catches: 1, runouts: 1, stumpings: 0 },
  { name: "Player 11", mat: 10, catches: 2, runouts: 0, stumpings: 0 }
];

// Fielding table render
const fieldingTable = document.getElementById("fieldingTable");
if (fieldingTable) {
  fieldingTable.innerHTML = fieldingStats.map((p, i) => {
    const total = p.catches + p.runouts + p.stumpings;
    return `
      <tr class="hover:bg-green-50 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}">
        <td class="p-3 font-semibold">${i + 1}</td>
        <td class="p-3 font-medium text-green-800">${p.name}</td>
        <td class="p-3 text-center">${p.mat}</td>
        <td class="p-3 text-center">${p.catches}</td>
        <td class="p-3 text-center">${p.runouts}</td>
        <td class="p-3 text-center">${p.stumpings}</td>
        <td class="p-3 text-center font-bold text-green-700">${total}</td>
      </tr>
    `;
  }).join("");

  // Top fielders find karna
  const topCatch = [...fieldingStats].sort((a, b) => b.catches - a.catches)[0];
  const topRun = [...fieldingStats].sort((a, b) => b.runouts - a.runouts)[0];
  const topStump = [...fieldingStats].sort((a, b) => b.stumpings - a.stumpings)[0];

  const catchEl = document.getElementById("topCatcher");
  const runEl = document.getElementById("topRunout");
  const stumpEl = document.getElementById("topStumper");

  if (catchEl) catchEl.textContent = `${topCatch.name} (${topCatch.catches})`;
  if (runEl) runEl.textContent = `${topRun.name} (${topRun.runouts})`;
  if (stumpEl) stumpEl.textContent = topStump.stumpings > 0 
    ? `${topStump.name} (${topStump.stumpings})` 
    : "No stumpings yet";
}