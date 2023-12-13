class ThongTin {
    constructor(ten, moTa, giaTriMacDinh = 1) {
      this.ten = ten;
      this.moTa = moTa;
      this.giaTriMacDinh = giaTriMacDinh;
    }
  
    tinhToan(thamSo = this.giaTriMacDinh) {
      return thamSo * 3;
    }
  }
  
  class HinhHoc extends ThongTin {
    constructor(ten, moTa, chieuDai) {
      super(ten, moTa);
      this.chieuDai = chieuDai;
    }
  
    // Ghi đè hàm tinhToan từ lớp ThongTin
    tinhToanHinhHoc(thamSo) {
      // Thực hiện tính toán nâng cao dựa trên chiều dài và tham số
      return this.tinhToan(thamSo) + this.chieuDai;
    }
  }
  
  // Tạo đối tượng của lớp ThongTin
  const thongTinObj = new ThongTin("Thông Tin 1", "Mô tả cho Thông Tin 1");
  
  // Tạo đối tượng của lớp HinhHoc
  const hinhHocObj = new HinhHoc("Hình Học 1", "Mô tả cho Hình Học 1", 5);
  
  // In thông tin của đối tượng ThongTin
  console.log("Thông tin của đối tượng ThongTin:");
  console.log("Tên:", thongTinObj.ten);
  console.log("Mô tả:", thongTinObj.moTa);
  console.log("Giá trị mặc định:", thongTinObj.giaTriMacDinh);
  console.log("Kết quả tính toán:", thongTinObj.tinhToan());
  
  console.log("\n----------------------------------------\n");
  
  // In thông tin của đối tượng HinhHoc và kết quả tính toán
  console.log("Thông tin của đối tượng HinhHoc:");
  console.log("Tên:", hinhHocObj.ten);
  console.log("Mô tả:", hinhHocObj.moTa);
  console.log("Chiều dài:", hinhHocObj.chieuDai);
  console.log("Kết quả tính toán Hình Học:", hinhHocObj.tinhToanHinhHoc(2));