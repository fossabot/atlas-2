import { bound, keyCount, removeFrom, strip } from "../../src/util"

describe("removeFrom()", () => {
  const testCases = [
    {
      expected: [12, 5, 16, 16, 16, 6326, 261],

      list1: [4, 6, 8, 8, 4],
      list2: [12, 4, 5, 16, 16, 16, 6326, 261, 4],
      name: "Should work with duplicates",
    },
    {
      expected: [0, 1, 2, 3, 7, 8, 9],
      list1: [4, 5, 6],
      list2: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      name: "Should remove all entries from list 2 if they are in list 1",
    },
  ]
  for (const t of testCases) {
    test(t.name, () => {
      expect(removeFrom(t.list1, t.list2)).toEqual(t.expected)
    })
  }
})

describe("strip()", () => {
  test("should remove leading spaces", () => {
    expect(strip("  HelloWorld")).toEqual("HelloWorld")
  })
  test("should remove trailing spaces", () => {
    expect(strip("HelloWorld  ")).toEqual("HelloWorld")
  })
  test("should note remove spaces inside the string", () => {
    expect(strip("Hello World")).toEqual("Hello World")
  })
})

describe("interval()", () => {
  describe("value is below lower limit", () => {
    test("should return lower limit", () => {
      expect(bound(20, 1, 40)).toEqual(20)
    })
  })
  describe("value is inside limit limit", () => {
    test("should return lower limit", () => {
      expect(bound(1, 2, 3)).toEqual(2)
    })
  })
  describe("value is above upper limit", () => {
    test("should return lower limit", () => {
      expect(bound(424, 1414, 500)).toEqual(500)
    })
  })
})

describe("keyCount()", () => {
  describe("when every item has the requested key", () => {
    const testCases = [
      {
        arr: [
          {
            testKey: "string1",
          },
          {
            testKey: "string2",
          },
          {
            testKey: "string1",
          },
          {
            testKey: "string3",
          },
          {
            testKey: "string2",
          },
        ],
        expected: 3,
      },
      {
        arr: [
          {
            testKey: "string1",
          },
          {
            testKey: "string2",
          },
          {
            testKey: "string3",
          },
          {
            testKey: "string4",
          },
          {
            testKey: "string5",
          },
        ],
        expected: 5,
      },
    ]

    for (const tc of testCases) {
      test("should return the correct number of unique entries", () => {
        expect(keyCount(tc.arr, "testKey")).toEqual(tc.expected)
      })
    }
  })
  describe("when not every item has the requested key", () => {
    const testCases = [
      {
        arr: [
          {
            testKey: "string1",
          },
          {},
          {
            testKey: "string1",
          },
          {
            testKey: "string3",
          },
          {
            testKey: "string2",
          },
        ],
        expected: 3,
      },
      {
        arr: [
          {
            testKey: "string1",
          },
          {
            testKey: "string3",
          },
          {},
          {
            testKey: "string4",
          },
        ],
        expected: 3,
      },
    ]

    for (const tc of testCases) {
      test("should return the correct number of unique entries", () => {
        expect(keyCount(tc.arr, "testKey")).toEqual(tc.expected)
      })
    }
  })
})
