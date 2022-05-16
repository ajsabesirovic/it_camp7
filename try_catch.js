try {
  try {
    console.log(count);
  } catch (e) {
    console.log(e.message);
  }
} catch {
  console.log(888888);
}
