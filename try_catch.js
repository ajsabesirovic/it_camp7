try {
  try {
    console.log(count);
  } catch (e) {
    console.log(e.message);
  }
} catch {
  console.log(888888);
}

// try {
//   throw new Error("Something went wrong");
// } catch (error) {
//   console.log(error);
// }

// try {
//   try {
//     throw new Error("oops");
//   } catch (ex) {
//     console.error("inner", ex.message);
//     throw ex;
//   } finally {
//     console.log("finally");
//   }
// } catch (e) {
//   console.error("outer", e.message);
// } finally {
//   console.log("FINALLY");
// }
