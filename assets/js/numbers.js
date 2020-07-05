function arraysEqual(a1, a2) {
  return JSON.stringify(a1) == JSON.stringify(a2);
}

class getSimilarWords {
  _test(expected, wordString) {
    let word = new Word(wordString);

    // when
    let actual = word.getSimilarWords();

    // then
    let pass = arraysEqual(expected, actual);

    console.log("input = " + wordString);
    console.log("expected = " + expected);
    console.log("actual = " + actual);
    console.log("test passed = " + pass);
  }

  test1() {
    let expected = ["ACCORD'S", "ACCORDS", "MCCORD", "RECORD"];
    ["ABOARD", "ADORED", "AFFORD", "AWARD", "SCORED"];
    let input = "accord";
    _test(expected, input);
  }

  test2() {
    let expected = [
      "DRAFT'S",
      "DRAFTEE",
      "DRAFTER",
      "DRAFTS",
      "DRAFTY",
      "DRAUGHTS"
    ];
    ["CRAFT", "DRIFT", "GRAFT", "KRAFFT", "KRAFT"];
    let input = "draft";
    _test(expected, input);
  }

  test3() {
    let expected = [
      "AFFINED",
      "ALIGN",
      "ALIGNS",
      "ALINE",
      "ALINES",
      "ALLIED",
      "ASSIGNED",
      "BLIND",
      "LINED",
      "MALIGNED",
      "UNLINED"
    ];

    let input = "aligned";
    _test(expected, input);
  }
}
