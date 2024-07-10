
function debounceFn(func, wait) {
  let timeout = null;

  function dbFn() {
    clearTimeout(timeout)
    timeout = setTimeout(function () {
      func()
    },wait)
  }
  return dbFn
}