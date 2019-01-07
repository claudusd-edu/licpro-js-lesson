try {
  throw new EvalError();
  foo.bar();
} catch (e) {
  if (e instanceof EvalError) {
    ...
  }
} finally {
    foo.baz();
}
