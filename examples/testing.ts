const { test, bench } = Bueno.testing;

test("1+1=2", (ctx) => {
  ctx.equals(1 + 1, 2);
  ctx.deepEquals(1 + 1, 2);
});

test("objects are different", (ctx) => {
  const a = { hello: "worl" };
  const b = { hello: { world: true } };

  // ctx.notDeepEquals(a, b);
});

test("maps are equal", (ctx) => {
  const a = new Map([
    ["key", "value"],
    ["k2", "v2"],
    ["dog", "cat"],
  ]);

  const b = new Map([
    ["key", "value"],
    ["k2", "v2"],
    ["dog", "cat"],
  ]);

  ctx.notEquals(a, b);
  ctx.deepEquals(a, b);
});

test("maps are not equal", (ctx) => {
  const a = new Map([
    ["key", "alue"],
    ["k2", "k0"],
    ["dog", "cat"],
  ]);

  const b = new Map([
    ["key", "value"],
    ["k2", "v2"],
    ["dog", "wow"],
  ]);

  ctx.notEquals(a, b);
  ctx.notDeepEquals(a, b);
});

test("sets are equal", (ctx) => {
  const a = new Set([
    "key",
    "value",
    "k2",
    "v2",
    "dog",
    "cat",
  ]);

  const b = new Set([
    "key",
    "value",
    "k2",
    "v2",
    "dog",
    "cat",
  ]);

  ctx.notEquals(a, b);
  ctx.deepEquals(a, b);
});

test("sets are not equal", (ctx) => {
  const a = new Set([
    "key",
    "alue",
    "k2",
    "k0",
    "dog",
    "cat",
  ]);

  const b = new Set([
    "key",
    "value",
    "k2",
    "v2",
    "dog",
    "wow",
  ]);

  ctx.notEquals(a, b);
  ctx.notDeepEquals(a, b);
});

test("this test fails", (ctx) => {
  // ctx.assert(false);
});

test("this test has sub-tests", (ctx) => {
  ctx.test("0 = 0", (ctx) => {
    ctx.equals(0, 0);
  });

  ctx.test("zero?", (ctx) => {
    ctx.equals(0, 0);
    ctx.test("actually 1", (ctx) => {
      ctx.equals(2 ** 0, 1);
    });
    ctx.equals(0 + 0, 0);
  });
});

await test("objects are equal", async (ctx) => {
  const a = { hello: "world" };
  const b = { hello: "world" };
  ctx.notEquals(a, b);

  const c = {
    dsfghsh: 123,
    sdjhfksdflk: 243545,
    sgkjsg: 13,
    hfjdsfghsh: 123,
    sdjhhfjfksdflk: 243545,
    sgkjhfjsg: 13,
    hello: { world: true },
    a: 5,
    b: 5,
    c: 5,
    d: 5,
    h: 5,
    g: 5,
  };

  class Dog {
    constructor(x) {
      Object.assign(this, x);
    }
  }

  const d = new Dog({
    dsfghsh: 123,
    sdjhfksdflk: 243545,
    sgkjsg: 13,
    hfjdsfghsh: 123,
    sdjhhfjfksdflk: 243545,
    sgkjhfjsg: 13,
    hello: { worlde: true },
    a: 5,
    b: 5,
    c: 5,
    d: 5,
    h: 5,
    g: 5,
  });

  ctx.notEquals(c, d);
  ctx.deepEquals(c, d);

  await ctx.test("this is async <should leak>", (ctx) => {
    return new Promise((r) => {
      const a = {
        doo: "doo",
      };

      const b = {
        rata: "ta",
      };

      setTimeout(() => {
        ctx.deepEquals(1, 2);
        r();
      }, 1);
      ctx.deepEquals(a, b);
    });
  });

  ctx.test("this should complain, because last step didnt finish yet", (ctx) => {});
});

test("incorrect usage of context", (ctx) => {
  ctx.test("im not using my own ctx", () => {
    ctx.equals(":(", ":(");
  });
});
