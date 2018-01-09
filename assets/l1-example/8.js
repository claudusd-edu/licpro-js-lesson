try {
  foo.bar();
} catch (e) {
  if (e instanceof EvalError) {
    ...
  }
} finally {
    foo.baz();
}
