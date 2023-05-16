# MakeHomePageService
## TypeScript 사용, PWA 발행 가능한 React 프로젝트 생성
```
npx create-react-app make-homepage-service --template pwa-typescript
```

## 필요한 패키지 설치 : Bootstrap, router, Redux, icons
```
npm install --save react-bootstrap bootstrap react-router-dom@6 @reduxjs/toolkit react-redux
```
```
npm install --save react-icons
```

## 자바스크립트 테스팅(보류) - react 프로젝트에 npm test 기능 존재
```
npm install -D jest @types/jest @babel/core @babel/preset-env
```

## branch 구성 및 Git-flow 전략
### branch 구성
- **main** : 제품으로 출시될 수 있는 브랜치
- **develop** : 다음 출시 버전을 개발하는 브랜치
- feature : 기능을 개발하는 브랜치
- release : 이번 출시 버전을 준비하는 브랜치
- hotfix : 출시 버전에서 발생한 버그를 수정하는 브랜치

### Git-flow 전략
1. main → develop 생성 : 상시로 버그를 수정한 커밋 추가
2. develop → feature-작업명 생성 : 새로운 기능 추가 작업이 있는 경우 생성. 기능 추가 작업 완료시 develop에서 해당 feature merge
3. develop → release 생성 : develop에 이번 버전에 포함되는 모든 기능이 merge 되었다면 QA를 하기 위해 release 생성
4. QA를 무사히 마쳤다면 main과 develop에서 release merge
5. 마지막으로 출시된 main 브랜치에서 버전 태그를 추가

## 프로젝트 구조
### public

📦public<br/>
 ┣ 📂img<br/>
 ┃ ┗ 📂background<br/>
 ┃ ┃ ┣ 📜bg_board.jpg<br/>
 ┃ ┃ ┣ 📜bg_homeGuide.jpg<br/>
 ┃ ┃ ┗ 📜bg_template.jpg<br/>
 ┣ 📜favicon.ico<br/>
 ┣ 📜index.html<br/>
 ┣ 📜logo192.png<br/>
 ┣ 📜logo512.png<br/>
 ┣ 📜manifest.json<br/>
 ┗ 📜robots.txt<br/>
 
 ### src
 
 📦src<br/>
 ┣ 📂component<br/>
 ┃ ┣ 📂background<br/>
 ┃ ┃ ┗ 📜Background.js<br/>
 ┃ ┣ 📂nav<br/>
 ┃ ┃ ┗ 📜Menubar.js<br/>
 ┃ ┗ 📂user<br/>
 ┃ ┃ ┗ 📜Sign.js<br/>
 ┣ 📂css<br/>
 ┃ ┣ 📜background.css<br/>
 ┃ ┣ 📜menubar.css<br/>
 ┃ ┗ 📜sign.css<br/>
 ┣ 📂data<br/>
 ┣ 📂func<br/>
 ┃ ┗ 📜activateComponent.ts<br/>
 ┣ 📂store<br/>
 ┃ ┗ 📜backgroundSlice.js<br/>
 ┣ 📜App.css<br/>
 ┣ 📜App.test.tsx<br/>
 ┣ 📜App.tsx<br/>
 ┣ 📜index.css<br/>
 ┣ 📜index.tsx<br/>
 ┣ 📜logo.svg<br/>
 ┣ 📜react-app-env.d.ts<br/>
 ┣ 📜reportWebVitals.ts<br/>
 ┣ 📜service-worker.ts<br/>
 ┣ 📜serviceWorkerRegistration.ts<br/>
 ┣ 📜setupTests.ts<br/>
 ┗ 📜store.js<br/>

## Code Convention
### Types
 - **Primitives**: primitive type은 그 값을 직접 조작한다.
   + ```string```
   + ```number```
   + ```boolean```
   + ```null```
   + ```undefined```

 - **Complex**: 참조형(Complex)은 참조를 통해 값을 조작한다.
   + ```object```
   + ```array```
   + ```function```  

### References
 - 변수 선언은 값이 변하는 경우에는 ```let```을 사용하고 변하지 않는 경우에는 ```const```를 사용한다.
 - ```let```과 ```const```는 선언된 블록 안에서만 존재하는 블록 스코프이다.
 - ```var```은 사용하지 않는다.

### Objects, Arrays
 - 오브젝트, 배열을 작성할 때는, 리터럴 구문을 사용한다.
```javascript
const item = {};
const item = [];
```
 - 아이템을 배열에 추가하는 경우, 직접 배열에 항목을 대입하지 말고 ```Array.push()```를 이용한다.
 - 배열을 복사할 때는 배열의 spread 연산자(```...```)를 이용한다.
```javascript
const itemsCopy = [...items];
```

### Strings
 - 문자열 생성 시 문자열 연결이 아닌 template strings를 이용한다.
```javascript
// bad
function sayHi(name) {
  return "How are you, " + name + "?";
}

// good
function sayHi(name) {
  return `How are you, ${name}?`;
}
```

### Functions
 - 함수 이외의 블록(if, for, while 등) 안에서 함수를 선언하지 않는다.
 - 함수의 파라미터를 재정의하지 않는다. 대신 default 파라미터를 이용한다.
```javascript
// really bad
function handleThings(opts) {
  opts = opts || {};
  // ...
}

// still bad
function handleThings(opts) {
  if (opts === void 0) {
    opts = {};
  }
  // ...
}

// good
function handleThings(opts = {}) {
  // ...
}
```
- 항상 default 파라미터는 뒤쪽에 둔다.
- 파라미터를 재할당하지 않는다. 단, 파라미터의 속성에 대해서는 재할당이 가능하다.
```javascript
// bad
function f1(a) {
  a = 1;
  // ...
}

// bad
function f2(a) {
  if (!a) { a = 1; }
  // ...
}


// good
function f3(a) {
  const b = a || 1;
  // ...
}

// good
function f4(a) {
  if (!a) { a.b = 1; }
  // ...
}    
```

### Arrow Functions
- 익명함수를 전달하는 경우, arrow function 표기를 이용한다. 
```javascript
// bad
[1, 2, 3].map(function (x) {
  const y = x + 1;
  return x * y;
});

// good
[1, 2, 3].map(x => {
  const y = x + 1;
  return x * y;
});
```
- 함수가 단일 파라미터인 경우, 소괄호(())는 생략한다.
```javascript
// bad
[1, 2, 3].map((x) => x * x);

// good
[1, 2, 3].map(x => x * x);

// good
[1, 2, 3].map(number => (
  `A long string with the ${number}. It’s so long that we don’t want it to take up space on the .map line!`
));

// bad
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});

// good
[1, 2, 3].map(x => {
  const y = x + 1;
  return x * y;
});
```

### Classes & Constructors
- ```prototype```을 직접 조작하는 것을 피하고 항상 ```class```를 이용한다.
```javascript
// bad
function Queue(contents = []) {
  this._queue = [...contents];
}
Queue.prototype.pop = function() {
  const value = this._queue[0];
  this._queue.splice(0, 1);
  return value;
}

// good
class Queue {
  constructor(contents = []) {
    this._queue = [...contents];
  }
  pop() {
    const value = this._queue[0];
    this._queue.splice(0, 1);
    return value;
  }
}
```

### Modules
- 비표준 모듈시스템이 아닌 (`import`/`export`) 를 항상 사용한다.
```javascript
// bad
const AirbnbStyleGuide = require("./AirbnbStyleGuide");
module.exports = AirbnbStyleGuide.es6;

// ok
import AirbnbStyleGuide from "./AirbnbStyleGuide";
export default AirbnbStyleGuide.es6;

// best
import {es6} from "./AirbnbStyleGuide";
export default es6;
```
- wildcard import 는 이용하지 않는다.
- import 문으로부터 직접 export 하지 않는다.
- import는 중복되지 않게 한 곳에서 import 한다.
```javascript
// bad
import foo from "foo";
// … some other imports … //
import {named1, named2} from "foo";

// good
import foo, {named1, named2} from "foo";

// good
import foo, {
  named1,
  named2
} from "foo";
```
- export가 하나일 경우, default export를 사용한다.
- 모든 `import`문은 상위에 위치한다

### Properties
- 프로퍼티에 Access하는 경우는 점 . 을 사용한다.
```javascript
const luke = {
  jedi: true,
  age: 28,
};

// bad
const isJedi = luke["jedi"];

// good
const isJedi = luke.jedi;
```
- 변수를 사용해 프로퍼티에 Access하는 경우는 대괄호([])를 사용한다.
```javascript
const luke = {
  jedi: true,
  age: 28,
};

function getProp(prop) {
  return luke[prop];
}

const isJedi = getProp("jedi");
```

### Variables
- 변수 선언은 변수당 하나씩 사용한다.
```javascript
// bad
const items = getItems(),
    goSportsTeam = true,
    dragonball = "z";

// bad
// (compare to above, and try to spot the mistake)
const items = getItems(),
    goSportsTeam = true;
    dragonball = "z";

// good
const items = getItems();
const goSportsTeam = true;
const dragonball = "z";
```
- 우선 const 를 그룹화하고 다음에 let 을 그룹화 한다.
```javascript
// bad
let i, len, dragonball,
    items = getItems(),
    goSportsTeam = true;

// bad
let i;
const items = getItems();
let dragonball;
const goSportsTeam = true;
let len;

// good
const goSportsTeam = true;
const items = getItems();
let dragonball;
let i;
let length;
```

### Comparison Operators & Equality
- == 이나 != 보다 === 와 !== 을 사용한다.
- if 문과 같은 조건식은 ToBoolean 메서드에 의한 강제형변환으로 평가되어 항상 다음과 같은 심플한 룰을 따른다.
  + **Object** 는 **true** 로 평가된다.
  + **undefined** 는 **false** 로 평가된다.
  + **null** 은 **false** 로 평가된다.
  + **Boolean** 은 **boolean형의 값** 으로 평가된다.
  + **Number** 는 **true** 로 평가된다. 하지만 **+0**, **-0**, **or NaN** 의 경우는 **false** 이다.
  + **String** 은 **true** 로 평가된다. 하지만 빈문자 "" 의 경우는 **false** 이다.
- Boolean에 대해서는 단축형을 사용한다.
```javascript
// bad
if (name !== "") {
  // ...stuff...
}

// good
if (name) {
  // ...stuff...
}

// bad
if (collection.length > 0) {
  // ...stuff...
}

// good
if (collection.length) {
  // ...stuff...
}
```
- case, default 구문에서 let, const, function, class가 사용 되는 경우에는 중괄호({})를 사용한다.
```javascript
// bad
switch (foo) {
  case 1:
    let x = 1;
    break;
  case 2:
    const y = 2;
    break;
  case 3:
    function f() {
      // ...
    }
    break;
  default:
    class C {}
}

// good
switch (foo) {
  case 1: {
    let x = 1;
    break;
  }
  case 2: {
    const y = 2;
    break;
  }
  case 3: {
    function f() {
      // ...
    }
    break;
  }
  case 4:
    bar();
    break;
  default: {
    class C {}
  }
}
```
- 중첩 3항 연산자는 사용하지 않는다.
```javascript
// bad
const foo = maybe1 > maybe2
  ? "bar"
  : value1 > value2 ? "baz" : null;

// better
const maybeNull = value1 > value2 ? "baz" : null;

const foo = maybe1 > maybe2
  ? "bar"
  : maybeNull;

// best
const maybeNull = value1 > value2 ? "baz" : null;

const foo = maybe1 > maybe2 ? "bar" : maybeNull;
```
- 불필요한 3항 연산자는 사용하지 않는다.
```javascript
// bad
const foo = a ? a : b;
const bar = c ? true : false;
const baz = c ? false : true;

// good
const foo = a || b;
const bar = !!c;
const baz = !c;
```

### Comments
- 문제의 해결이 필요하다는 주석으로써 // FIXME: 를 사용한다.
- 구현이 필요하다는 주석으로 // TODO: 를 사용한다.

### Whitespace
- 공백은 탭을 사용한다.
- 주요 중괄호 ({}) 앞에는 공백을 1개 넣는다.
- 제어구문 (if 문이나 while 문 등) 의 소괄호(()) 앞에는 공백을 1개 넣는다. 함수선언이나 함수호출시 인수리스트의 앞에는 공백을 넣지 않는다.
```javascript
// bad
if(isJedi) {
  fight ();
}

// good
if (isJedi) {
  fight();
}

// bad
function fight () {
  console.log ("Swooosh!");
}

// good
function fight() {
  console.log("Swooosh!");
}
```
- 연산자 사이에는 공백을 넣는다.
- 파일 끝에는 개행문자를 1개 넣는다.
- 메서드 체인이 2개를 초과한 경우, 적절히 줄 바꿈을 하여 사용한다. 메서드 체이닝을 하여 줄바꿈을 할 때에는 마침표(.) 다음에 줄 바꿈을 한다. 줄 바꿈 후에는 가독성을 위하여 자동 들여쓰기를 한다. 
```javascript
// bad
$("#items").find(".selected").highlight().end().find(".open").updateCount();

// bad
$("#items").
  find(".selected").
    highlight().
    end().
  find(".open").
    updateCount();

// good
$("#items")
  .find(".selected")
    .highlight()
    .end()
  .find(".open")
    .updateCount();

// bad
const leds = stage.selectAll(".led").data(data).enter().append("svg:svg").classed("led", true)
    .attr("width", (radius + margin) * 2).append("svg:g")
    .attr("transform", `translate(${radius + margin},${radius + margin})`)
    .call(tron.led);

// good
const leds = stage.selectAll(".led")
    .data(data)
  .enter().append("svg:svg")
    .classed("led", true)
    .attr("width", (radius + margin) * 2)
  .append("svg:g")
    .attr("transform", `translate(${radius + margin},${radius + margin})`)
    .call(tron.led);

// good
const leds = stage.selectAll(".led").data(data);
```
- 문의 앞과 블록의 뒤에는 빈행을 남겨둔다.
```javascript
// bad
if (foo) {
  return bar;
}
return baz;

// good
if (foo) {
  return bar;
}

return baz;

// bad
const obj = {
  foo() {
  },
  bar() {
  },
};
return obj;

// good
const obj = {
  foo() {
  },

  bar() {
  },
};

return obj;

// bad
const arr = [
  function foo() {
  },
  function bar() {
  },
];
return arr;

// good
const arr = [
  function foo() {
  },

  function bar() {
  },
];

return arr;
```

### Type Casting & Coercion
- 문자열의 경우:
```javascript
//  => this.reviewScore = 9;

// bad
const totalScore = this.reviewScore + "";

// good
const totalScore = String(this.reviewScore);
```
- 수치의 경우:
```javascript
const inputValue = "4";

// bad
const val = new Number(inputValue);

// bad
const val = +inputValue;

// bad
const val = inputValue >> 0;

// bad
const val = parseInt(inputValue);

// good
const val = Number(inputValue);

// good
const val = parseInt(inputValue, 10);
```
- parseInt를 사용하는 경우 성능적인 이유로 문제가 되면, Bitshift를 사용한다. 이때에는 꼭! Bitshift를 사용한 이유를 주석으로 남긴다.
```javascript
// good
/**
 * parseInt로 인해 느려졌음
 * Bitshift를 통한 수치로의 문자열 강제 형변환으로 성능을 개선시킴.
 */
const val = inputValue >> 0;
```
- **주의**: Bitshift를 사용하는 경우의 주의사항. 수치는 64비트 값으로 표현되어 있으나 bitshift 연산한 경우는 항상 32비트 integer 로 넘겨진다.
```javascript
2147483647 >> 0 //=> 2147483647
2147483648 >> 0 //=> -2147483648
2147483649 >> 0 //=> -2147483647
```
- Boolean의 경우:
```javascript
const age = 0;

// bad
const hasAge = new Boolean(age);

// good
const hasAge = Boolean(age);

// good
const hasAge = !!age;
```

### Naming Conventions
- 한 문자의 이름은 사용하지 않는다.
- 네임스페이스, 오브젝트, 함수 그리고 인스턴스에는 camelCase를 사용한다.
```javascript
// bad
naver.FOO.bar = function() {};
const OBJEcttsssss = {};
const this_is_my_object = {};
function c() {}

// good
naver.foo.bar = function() {};
const thisIsMyObject = {};
function thisIsMyFunction() {}
```
- 클래스나 constructor에는 PascalCase 를 사용한다.
```javascript
// bad
function user(options) {
  this.name = options.name;
}

const bad = new user({
  name: "nope",
});

// good
class User {
  constructor(options) {
    this.name = options.name;
  }
}

const good = new User({
  name: "yup",
});
```
- 함수명이나 속성명의 앞에 _ 가 있는 경우는 private을 의미한다. 외부에서 접근할 수 있는 경우, 사용하면 안되는 메서드명 또는 속성명은 _ 을 사용한다. 외부에서 접근할 수 없다면, 메서드명 이나 속성명에 _ 을 사용하지 않는다.
```javascript
// bad - 외부에서 접근할 수 있는 경우, 사용하면 안되는 메서드명 또는 속성명은 `_`을 사용한다.
class User({
   constructor() {
      privateState: true
   }
   privateMethod() {
   }
   _publicMethod() {
   }
}

// good - 외부에서 접근할 수 있는 경우, 사용하면 안되는 메서드명 또는 속성명은 `_`을 사용한다.
class User({
   constructor() {
      _privateState: true
   }
   _privateMethod() {
   }
   publicMethod() {
   }
}

// bad -  외부에서 접근할 수 없다면, 메서드명 이나 속성명에 `_`을 사용하지 않는다.
(function(){
   var _privateState = true;
   function _privateMethod() {
   }
   function publicMethod() {
      _privateMethod();
   }
})();

// good -  외부에서 접근할 수 없다면, 메서드명 이나 속성명에 `_`을 사용하지 않는다.
(function() {
   var privateState = true;
   function privateMethod() {
   }
   function publicMethod() {
       privateMethod();
   }
})();
```
- 가능한 this를 캐싱하지 않는다. arrow functions 또는 Function#bind를 사용한다. jQuery를 사용하는 경우라면, $.proxy를 사용한다. 만약, this의 참조를 저장하는 경우라면 self 를 사용한다.
```javascript
// bad
function foo() {
  const self = this;
  return function () {
    console.log(self);
  };
}

// bad
function foo() {
  const that = this;
  return function () {
    console.log(that);
  };
}

// good
function foo() {
  return () => {
    console.log(this);
  };
}
```
- 파일을 1개의 클래스로 export 하는 경우, 파일명은 클래스명과 완전히 일치시킨다.
```javascript
// file contents
class CheckBox {
  // ...
}
export default CheckBox;

// in some other file
// bad
import CheckBox from "./checkBox";

// bad
import CheckBox from "./check_box";

// good
import CheckBox from "./CheckBox";
```
- Default export가 함수일 경우, camelCase를 이용한다. 파일명은 함수명과 동일해야 한다.
```javascript
function makeStyleGuide() {
}

export default makeStyleGuide;
```
- Singleton / function library / 빈 오브젝트를 export 하는 경우에는 PascalCase를 사용한다.
```javascript
const AirbnbStyleGuide = {
  es6: {
  }
};

export default AirbnbStyleGuide;
```
- 약어 및 이니셜은 항상 모두 대문자이거나 모두 소문자이어야 한다.
```javascript
// bad
import SmsContainer from "./containers/SmsContainer";

// bad
const HttpRequests = [
  // ...
];

// good
import SMSContainer from "./containers/SMSContainer";

// good
const HTTPRequests = [
  // ...
];

// best
import TextMessageContainer from "./containers/TextMessageContainer";

// best
const Requests = [
  // ...
];
```
- 소스의 변수명, 클래스명 등에는 영문 이외의 언어를 사용하지 않는다.
- 한글 발음을 그대로 사용하지 않는다.
- 클래스, 메서드 등의 이름에는 특수 문자를 사용하지 않는다. jQuery 변수의 경우 $을 사용하는 것은 예외사항으로 한다.
- 클래스명과 변수명은 `명사 사용`을 준수한다.
- 메서드명은 `동사 사용`을 준수한다.
- 상수명은 대문자를 사용하고, 단어와 단어사이는 _ 로 연결한다.
```javascript
// bad
const firefox = 1;
const is_left = true;

// good
const FIREFOX = 1;
const IS_LEFT = true;
```

# Accessors
- 접근자 함수가 필요한 경우, getVal() 이나 setVal('hello') 로 한다.
```javascript
// bad
dragon.age();

// good
dragon.getAge();

// bad
dragon.age(25);

// good
dragon.setAge(25);
```
- 프로퍼티가 boolean 인 경우, isVal() 이나 hasVal() 로 한다.
```javascript
// bad
if (!dragon.age()) {
  return false;
}

// good
if (!dragon.hasAge()) {
  return false;
}
```
- 일관된 경우, get() 과 set() 으로 함수를 작성해도 좋다.
```javascript
class Jedi {
  constructor(options = {}) {
    const lightsaber = options.lightsaber || "blue";
    this.set('lightsaber', lightsaber);
  }

  set(key, val) {
    this[key] = val;
  }

  get(key) {
    return this[key];
  }
}
```


