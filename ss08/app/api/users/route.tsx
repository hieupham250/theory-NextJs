import { NextRequest, NextResponse } from "next/server";

// dùng flie sytem
import fs from "fs";
import path from "path";

// lấy ở trong cơ sở dữ liệu
// dùng API tương tác vào cơ sở dữ liệu ==> data

// const users = [
//   {
//     id: 1,
//     name: "mỹ tâm",
//     address: "DN",
//   },
//   {
//     id: 2,
//     name: "cẩm ly",
//     address: "HCM",
//   },
// ];

// export async function GET() {
//   return NextResponse.json({ data: users });
// }

// export async function POST(request: any) {
//   const data = await request.json();

//   return NextResponse.json({
//     messenge: "thêm thành công",
//     user: data,
//   });
// }

// phần đọc ghi file
export async function GET() {
  try {
    // b1: lấy ra đường dẫn của file cần đọc
    const filePath = path.join(process.cwd(), "database", "users.json");
    // b2: sử dụng fs để đọc ghi file
    const data = fs.readFileSync(filePath, "utf8");
    // b3: ép kiểu sử dụng dạng json sang ts
    const users = JSON.parse(data);
    // trả về dữ liệu cho phía client
    return NextResponse.json(users);
  } catch (err) {
    return NextResponse.json(err);
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    // b1: lấy dữ liệu từ phía client
    const userRequest = await req.json();
    // b2: lấy ra đường daanx của file cần ghi
    const filePath = path.join(process.cwd(), "database", "users.json");
    // đọc file cần ghi vào
    const users = JSON.parse(fs.readFileSync(filePath, "utf8"));
    // push dữ liệu vào trong mảng
    users.push(userRequest);
    // b3: ghi file
    fs.writeFileSync(filePath, JSON.stringify(users), "utf8");
    return NextResponse.json("ghi thành công");
  } catch (err) {
    return NextResponse.json(err);
  }
}
