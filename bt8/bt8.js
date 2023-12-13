class Person {
    constructor(name) {
      this._name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(newName) {
      this._name = newName;
    }
  
    walk() {
      console.log(`${this._name} is walking.`);
    }
  }
  
  class Programmer extends Person {
    constructor(name, programmingLanguage) {
      super(name);
      this._programmingLanguage = programmingLanguage;
    }
  
    get programmingLanguage() {
      return this._programmingLanguage;
    }
  
    set programmingLanguage(newLanguage) {
      this._programmingLanguage = newLanguage;
    }
  
    writeCode() {
      console.log(`${this._name} is writing code in ${this._programmingLanguage}.`);
    }
  }
  
  // Tạo đối tượng của lớp Programmer
  const programmer1 = new Programmer("John Doe", "JavaScript");
  
  // Gọi các hàm của lớp Person và Programmer
  console.log(`Initial name: ${programmer1.name}`);
  programmer1.walk();
  programmer1.writeCode();
  
  // Sử dụng hàm set để thay đổi tên và ngôn ngữ lập trình
  programmer1.name = "Jane Doe";
  programmer1.programmingLanguage = "Python";
  
  // Gọi lại các hàm để quan sát kết quả
  console.log(`New name: ${programmer1.name}`);
  programmer1.walk();
  programmer1.writeCode();