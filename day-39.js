import TestModule from "./Test.js";
const Test = new TestModule();

/**
 Knights Jump
Knights can jump across the board.

Knights in Chess

Create a function that takes a square where a knight jumps from as a string and returns all the possible squares the knight can land on as a string. Ignore capturing and further Chess rules. Be aware of the sides of the board. Knights don't go over the edge, obviously.

Examples
knightsJump("F4") ➞ "E2,G2,D3,H3,D5,H5,E6,G6"

knightsJump("A1") ➞ "C2,B3"

knightsJump("E2") ➞ "C1,G1,C3,G3,D4,F4"
 */

function knightsJump(square) {
  const files = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const rank = parseInt(square[1]);
  const fileIndex = files.indexOf(square[0]);
  const possibleMoves = [];

  const moveOffsets = [
    { file: -1, rank: -2 },
    { file: 1, rank: -2 },
    { file: -2, rank: -1 },
    { file: 2, rank: -1 },
    { file: -2, rank: 1 },
    { file: 2, rank: 1 },
    { file: -1, rank: 2 },
    { file: 1, rank: 2 },
  ];

  for (const offset of moveOffsets) {
    const newFileIndex = fileIndex + offset.file;
    const newRank = rank + offset.rank;

    if (newFileIndex >= 0 && newFileIndex < 8 && newRank >= 1 && newRank <= 8) {
      possibleMoves.push(files[newFileIndex] + newRank);
    }
  }

  return possibleMoves.join(",");
}

[
  ["A1", "C2,B3"],
  ["H1", "F2,G3"],
  ["F4", "E2,G2,D3,H3,D5,H5,E6,G6"],
  ["E5", "D3,F3,C4,G4,C6,G6,D7,F7"],
  ["A7", "B5,C6,C8"],
  ["B4", "A2,C2,D3,D5,A6,C6"],
  ["F3", "E1,G1,D2,H2,D4,H4,E5,G5"],
  ["C8", "B6,D6,A7,E7"],
  ["E4", "D2,F2,C3,G3,C5,G5,D6,F6"],
  ["G1", "E2,F3,H3"],
  ["G7", "F5,H5,E6,E8"],
  ["F3", "E1,G1,D2,H2,D4,H4,E5,G5"],
  ["C8", "B6,D6,A7,E7"],
  ["B6", "A4,C4,D5,D7,A8,C8"],
  ["E2", "C1,G1,C3,G3,D4,F4"],
  ["H5", "G3,F4,F6,G7"],
  ["D1", "B2,F2,C3,E3"],
  ["G1", "E2,F3,H3"],
].forEach((c) => Test.assertEquals(knightsJump(c[0]), c[1]));
