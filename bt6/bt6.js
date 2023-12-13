class SoThu {
    constructor() {
      this.danhSachDongVat = new Set();
    }
  
    themDongVat(dongVat) {
      this.danhSachDongVat.add(dongVat);
      console.log(`${dongVat} đã được thêm vào danh sách.`);
    }
  
    kiemTraTonTai(dongVat) {
      const tonTai = this.danhSachDongVat.has(dongVat);
      console.log(tonTai ? `${dongVat} đã có trong danh sách.` : `${dongVat} chưa có trong danh sách.`);
    }
  
    xoaDongVat(dongVat) {
      const tonTai = this.danhSachDongVat.has(dongVat);
      if (tonTai) {
        this.danhSachDongVat.delete(dongVat);
        console.log(`${dongVat} đã được xóa khỏi danh sách.`);
      } else {
        console.log(`${dongVat} không tồn tại trong danh sách.`);
      }
    }
  
    inDanhSach() {
      console.log("Danh sách động vật trong sở thú:");
      this.danhSachDongVat.forEach((dongVat) => {
        console.log(dongVat);
      });
    }
  }
  
  // Sử dụng chương trình
  const sởThúPeter = new SoThu();
  
  sởThúPeter.themDongVat("Sư tử");
  sởThúPeter.themDongVat("Hổ");
  sởThúPeter.kiemTraTonTai("Hổ");
  sởThúPeter.kiemTraTonTai("Giraffe");
  sởThúPeter.xoaDongVat("Sư tử");
  sởThúPeter.xoaDongVat("Elephant");
  sởThúPeter.inDanhSach();