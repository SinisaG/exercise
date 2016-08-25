function Stack () {
  this.top = null;

  this.push = function (value) {
    if (!this.top) {
      this.top = {
        value: value
      }
    } else {
      this.top = {
        value: value,
        next: this.top
      }
    }
  }

  this.pop = function () {
    if (!this.top) {
      return;
    } else if (!this.top.next){
      this.top == null;
    } else {
      this.top = this.top.next;
    }
  }


  this.print = function () {
    if (!this.top) {
      return;
    }
    var temp = this.top;
    while (temp) {
        console.log(temp.value);
        temp = temp.next;
    }
  }
}

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.pop();
stack.print();
