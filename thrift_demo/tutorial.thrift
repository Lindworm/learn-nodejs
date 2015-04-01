
namespace java tutorial
namespace php tutorial

typedef i32 MyInteger

const i32 INT32CONSTANT = 9853
const map<string,string> MAPCONSTANT = {'hello':'world', 'goodnight':'moon'}

enum Operation {
  ADD = 1,
  SUBTRACT = 2,
  MULTIPLY = 3,
  DIVIDE = 4
}

struct Work {
  1: i32 num1 = 0,
  2: i32 num2,
  3: Operation op,
  4: optional string comment,
}

struct User {
  1: i32 id,
  2: string name,
  3: i32 score,
  4: binary image,
  5: string birth,
  6: string createTime
}

exception InvalidOperation {
  1: i32 what,
  2: string why
}

service Calculator {

   void ping(),

   i32 add(1:i32 num1, 2:i32 num2),
   
   User getUserById(1:i32 id)
}
