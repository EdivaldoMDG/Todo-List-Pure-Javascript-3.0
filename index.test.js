import {
  addItem,
  fetchItems,
  removeItem,
  updateItem,
  clearList,
} from "./importfunc.js";

import * as assert from "assert";

function testInitialFetch() {
  //testing if returns object

  // prepare
  const expected = {};

  // act
  const result = fetchItems();

  // assert
  assert.deepEqual(expected, result);
}

//Test after one add
function testFetchAfterAddOneItem() {
  // prepare
  const expected = {
    id3: { id: "id3", name: "Capitan America", job: "superHero" },
  };

  // act
  addItem({ id: "id3", name: "Capitan America", job: "superHero" });
  const result = fetchItems();
  // assert
  assert.deepEqual(expected, result);
}

//test after two adds
function testFetchAfterAddTwoItems() {
  clearList();
  // prepare
  const expected = {
    id4: {
      id: "id4",
      name: "Spider-man",
      job: "Pro footballer",
    },
    id5: {
      id: "id5",
      sport: "Football",
    },
  };
  addItem({ id: "id4", name: "Spider-man", job: "Pro footballer" });
  addItem({ id: "id5", sport: "Football" });

  // act
  const result = fetchItems();

  // assert
  assert.deepEqual(expected, result);
}

//test after one remove
function testRemoveOneItem() {
  //prepare
  const expected = { id5: { id: "id5", sport: "Football" } };
  //act
  removeItem("id4");
  const result = fetchItems();
  //assert
  assert.deepEqual(expected, result);
}

function testUpdate() {
  //prepare
  const expected = { id5: { id: "id5", sport: "Basketball" } };
  //act
  updateItem("id5", { sport: "Basketball" });
  const result = fetchItems();
  //assert
  assert.deepEqual(expected, result);
}

testFetchAfterAddOneItem();
clearList();
testFetchAfterAddTwoItems();
testRemoveOneItem();
testUpdate();
