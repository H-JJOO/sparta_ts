// public, private, protected

// public => 제한 없음, 누구나 access 가능
// private => 특정 class 안에서만 access 가능
// protected => 특정 callss 안에서 access 가능, 상속받는 class 안에서 access 가능

class Base {
  fisrt = "";
  public second = "";
  protected third = "";
  private fourth = "";

  baseFunction() {
    this.fourth;
  }
}

class Inherited extends Base {
  myFunction() {
    this.fisrt;
    this.second;
    this.third;
    // this.fourth;
  }
}

const inherited = new Inherited();

inherited.fisrt;
inherited.second;
// inherited.third;
// inherited.fourth;
