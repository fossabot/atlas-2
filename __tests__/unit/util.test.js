import {
  bound,
  keyCount,
  removeFrom,
  strip,
  removeListFromList,
} from "../../src/lib/util"

describe("removeFrom()", () => {
  describe("when there are no duplicates", () => {
    const testCases = [
      {
        type: "string",
        input: {
          list: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            "Aliquam tincidunt mauris eu risus.",
            "Vestibulum commodo felis quis tortor.",
            "Ut aliquam sollicitudin leo.",
            "Cras iaculis ultricies nulla.",
            "Donec quis dui at dolor tempor interdum.",
          ],
          remove: "Vestibulum commodo felis quis tortor.",
        },
      },
      {
        type: "number",
        input: {
          list: [1, 2, 3, 4],
          remove: 2,
        },
      },
      {
        type: "object",
        input: {
          list: [
            {
              key: "value",
            },
            {
              otherKey: [1, 2],
            },
            {
              yetAnotherKey: 1,
            },
          ],
          remove: {
            otherKey: [1, 2],
          },
        },
      },
    ]
    testCases.forEach(tc => {
      describe(`for type ${tc.type}`, () => {
        const originalArray = tc.input.list
        it("should return the correct array", () => {
          const result = removeFrom(tc.input.list, tc.input.remove)
          expect(result.includes(tc.input.remove)).toBe(false)
        })
        it("should not mutate the original array", () => {
          expect(originalArray).toEqual(tc.input.list)
        })
      })
    })
  })
  describe("when the list is empty", () => {
    const testCases = [
      {
        type: "string",
        input: {
          list: [],
          remove: "Vestibulum commodo felis quis tortor.",
        },
      },
      {
        type: "number",
        input: {
          list: [],
          remove: 2,
        },
      },
      {
        type: "object",
        input: {
          list: [],
          remove: {
            otherKey: [1, 2],
          },
        },
      },
    ]
    testCases.forEach(tc => {
      describe(`for type ${tc.type}`, () => {
        const originalArray = tc.input.list
        it("should return the correct array", () => {
          const result = removeFrom(tc.input.list, tc.input.remove)
          expect(result.includes(tc.input.remove)).toBe(false)
        })
        it("should not mutate the original array", () => {
          expect(originalArray).toEqual(tc.input.list)
        })
      })
    })
  })
  describe("when there are duplicates", () => {
    const testCases = [
      {
        type: "string",
        input: {
          list: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            "Aliquam tincidunt mauris eu risus.",
            "Vestibulum commodo felis quis tortor.",
            "Donec quis dui at dolor tempor interdum.",
          ],
          remove: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        },
      },
      {
        type: "number",
        input: {
          list: [1, 2, 2, 3, 4],
          remove: 2,
        },
      },
      {
        type: "object",
        input: {
          list: [
            {
              key: "value",
            },
            {
              otherKey: [1, 2],
            },
            {
              yetAnotherKey: 1,
            },
            {
              otherKey: [1, 2],
            },
          ],
          remove: {
            otherKey: [1, 2],
          },
        },
      },
    ]
    testCases.forEach(tc => {
      describe(`for type ${tc.type}`, () => {
        const originalArray = tc.input.list
        it("should return the correct array", () => {
          const result = removeFrom(tc.input.list, tc.input.remove)
          expect(result.includes(tc.input.remove)).toBe(false)
        })
        it("should not mutate the original array", () => {
          expect(originalArray).toEqual(tc.input.list)
        })
      })
    })
  })
})
describe("removeListFromList()", () => {
  describe("when there are no duplicates", () => {
    const testCases = [
      {
        type: "string",
        input: {
          list1: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            "Aliquam tincidunt mauris eu risus.",
            "Vestibulum commodo felis quis tortor.",
            "Ut aliquam sollicitudin leo.",
            "Cras iaculis ultricies nulla.",
            "Donec quis dui at dolor tempor interdum.",
          ],
          list2: [
            "Vestibulum commodo felis quis tortor.",
            "Aliquam tincidunt mauris eu risus.",
          ],
        },
      },
      {
        type: "number",
        input: {
          list1: [1, 2, 3, 4],
          list2: [3, 2],
        },
      },
      {
        type: "object",
        input: {
          list1: [
            {
              key: "value",
            },
            {
              otherKey: [1, 2],
            },
            {
              yetAnotherKey: 1,
            },
          ],
          list2: [
            {
              otherKey: [1, 2],
            },
            {
              yetAnotherKey: 1,
            },
          ],
        },
      },
    ]
    testCases.forEach(tc => {
      describe(`for type ${tc.type}`, () => {
        const originalArray = tc.input.list1
        it("should return the correct array", () => {
          const result = removeListFromList(tc.input.list1, tc.input.list2)
          tc.input.list2.forEach(element => {
            expect(result.includes(element)).toBe(false)
          })
        })
        it("should not mutate the original array", () => {
          expect(originalArray).toEqual(tc.input.list1)
        })
      })
    })
  })
  describe("when the list is empty", () => {
    const testCases = [
      {
        type: "string",
        input: {
          list1: [],
          list2: ["Vestibulum commodo felis quis tortor."],
        },
      },
      {
        type: "number",
        input: {
          list1: [],
          list2: [2, 3],
        },
      },
      {
        type: "object",
        input: {
          list1: [],
          list2: [
            {
              otherKey: [1, 2],
            },
          ],
        },
      },
    ]
    testCases.forEach(tc => {
      describe(`for type ${tc.type}`, () => {
        const originalArray = tc.input.list1
        it("should return the correct array", () => {
          const result = removeListFromList(tc.input.list1, tc.input.list2)
          tc.input.list2.forEach(element => {
            expect(result.includes(element)).toBe(false)
          })
        })
        it("should not mutate the original array", () => {
          expect(originalArray).toEqual(tc.input.list1)
        })
      })
    })
  })
  describe("when there are duplicates", () => {
    const testCases = [
      {
        type: "string",
        input: {
          list1: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            "Aliquam tincidunt mauris eu risus.",
            "Vestibulum commodo felis quis tortor.",
            "Donec quis dui at dolor tempor interdum.",
          ],
          list2: [
            "Aliquam tincidunt mauris eu risus.",
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
          ],
        },
      },
      {
        type: "number",
        input: {
          list1: [1, 2, 2, 3, 4],
          list2: [3, 4],
        },
      },
      {
        type: "object",
        input: {
          list1: [
            {
              key: "value",
            },
            {
              otherKey: [1, 2],
            },
            {
              yetAnotherKey: 1,
            },
            {
              otherKey: [1, 2],
            },
          ],
          list2: [
            {
              otherKey: [1, 2],
            },
          ],
        },
      },
    ]
    testCases.forEach(tc => {
      describe(`for type ${tc.type}`, () => {
        const originalArray = tc.input.list1
        it("should return the correct array", () => {
          const result = removeListFromList(tc.input.list1, tc.input.list2)
          tc.input.list2.forEach(element => {
            expect(result.includes(element)).toBe(false)
          })
        })
        it("should not mutate the original array", () => {
          expect(originalArray).toEqual(tc.input.list1)
        })
      })
    })
  })
})

describe("strip()", () => {
  it("should remove leading spaces", () => {
    expect(strip("  HelloWorld")).toEqual("HelloWorld")
  })
  it("should remove trailing spaces", () => {
    expect(strip("HelloWorld  ")).toEqual("HelloWorld")
  })
  it("should note remove spaces inside the string", () => {
    expect(strip("Hello World")).toEqual("Hello World")
  })
})

describe("interval()", () => {
  describe("value is below lower limit", () => {
    it("should return lower limit", () => {
      expect(bound(20, 1, 40)).toEqual(20)
    })
  })
  describe("value is inside limit limit", () => {
    it("should return lower limit", () => {
      expect(bound(1, 2, 3)).toEqual(2)
    })
  })
  describe("value is above upper limit", () => {
    it("should return lower limit", () => {
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
      it("should return the correct number of unique entries", () => {
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
      it("should return the correct number of unique entries", () => {
        expect(keyCount(tc.arr, "testKey")).toEqual(tc.expected)
      })
    }
  })
})
