// file: utils/validators.test.js

// Nhập hàm cần test từ file logic
const { isPasswordComplex } = require('./validators');

// Bắt đầu khối test cho hàm isPasswordComplex
describe('isPasswordComplex', () => {

  // Test case 1: Mật khẩu hợp lệ
  test('nên trả về true nếu mật khẩu đủ 8 ký tự, có chữ hoa và số', () => {
    expect(isPasswordComplex('Password123')).toBe(true);
  });

  // Test case 2: Thiếu độ dài
  test('nên trả về false nếu mật khẩu dưới 8 ký tự', () => {
    expect(isPasswordComplex('Pass1')).toBe(false);
  });

  // Test case 3: Thiếu chữ hoa
  test('nên trả về false nếu mật khẩu thiếu chữ hoa', () => {
    expect(isPasswordComplex('password123')).toBe(false);
  });

  // Test case 4: Thiếu số
  test('nên trả về false nếu mật khẩu thiếu số', () => {
    expect(isPasswordComplex('PasswordABC')).toBe(false);
  });
  
  // Test case 5: Đầu vào rỗng
  test('nên trả về false nếu mật khẩu rỗng (null hoặc undefined)', () => {
    expect(isPasswordComplex(null)).toBe(false);
    expect(isPasswordComplex(undefined)).toBe(false);
  });
});
