function pipeline(data) {
    return {
      pipe: function (cb) {
          data = cb(data);
          return this;
      },
      data: data
    }
}

var result = pipeline({}).pipe(
  function (data){
    data.name = "John";
    return data;
}).pipe(function (data) {
    data.lastName = "Doe";
});

console.log(result.data);
